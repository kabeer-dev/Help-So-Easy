const { User, AuthenticationLog, RefFaqCategory, Faq, EmailContent, FirewallIps, InvitationCode, WaitingList, UsersSpokenLanguages, RefCountry, RefState } = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const { handleResponse, handleError } = require("../utils/responses");
const sendMail = require("../mail/sendMail");
// const { OTPcode, mailSubject, content } = require("../mail/mailBody");
const router = require("../routes/v1/auth");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const sendMail = require('../mail/sendMail');
// const randstring = require('randomstring');

exports.login =  async (req, res) => {
  const body = req.body;

  let ipData;
  await FirewallIps.findOne({
    where: {ip: req.ip}
  }).then((firewallIp) => {
    if(!firewallIp){
      FirewallIps.create({
        ip: req.ip,
        is_blocked: 0
      }).then((firewallIp) => {
        ipData = firewallIp;
      })
    }else{
      ipData = firewallIp;
    }
  })
  

  try{
    User.findOne({
      where: {
        email: body.email,
      },
      include: [
        {
          model: RefCountry,
          attributes: ["name"],
        },
        {
          model: RefState,
          attributes: ["name"],
        },
      ]
      
    })
      .then((user) => {
        if (!user) {
          return handleError(res, "User Not found.", 404);
        }
  
      
       
        var passwordIsValid = bcrypt.compareSync(body.password, user.password);
  
        if(user.status_nm === 'Deleted'){
          return handleError(res, "Account Deleted Please Contact to HELP SO EASY.", 401);
        }
  
        if (!passwordIsValid) {
          FirewallIps.findOne({
            where: {ip: req.ip}
          }).then((firewallIp) => {
            if (firewallIp) {
              // Update total_attempts if the firewallIp exists
              firewallIp.update({
                total_attempts: firewallIp.total_attempts + 1
            })
          }
          })
          return handleError(res, "Invalid Password!", 401)
      
        }
  
        if(user.verified_at === null){
          return handleError(res, "Please verify your email", 403);
        }
  
        var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: 86400, // 24 hours
        });
        if(token){
          
          AuthenticationLog.findOne(
            {
              where: {fk_user_id: user.id}
            }
          ).then( async (authentication_log) => {
            if(!authentication_log){
              AuthenticationLog.create(
                {
                  fk_user_id: user.id,
                  ip_address: req.ip,
                  login_time: new Date()
                }
              )
            }else{
              AuthenticationLog.update(
                {
                  login_time: new Date()
                },{
                  where: {fk_user_id: user.id}
                }
              )
            }
          })
  
        }
  
        FirewallIps.destroy({
          where: {ip: req.ip}
        }).then(
          handleResponse(res, {
            user,
            accessToken: token,
          })
        )
      })
      .catch((err) => {
        handleError(res, err);
      });
  }catch (error) {
    // Handle any errors that might occur during the process
    console.error("Error occurred:", error);
    return handleError(res, "An error occurred.", 500);
  }

  

  // RefSpokenLanguages.findOne({
  //   where: {
  //     id: 1
  //   },
  //    include: User
  // }).then((yes)=>{
  //   console.log(yes)
  // })
};

exports.Adminlogin = (req, res) => {
  const body = req.body;
  User.findOne({
    where: {
      email: body.email,
    },
    
  })
    .then((user) => {
      if (!user) {
        return handleError(res, "User Not found.", 404);
      }
      console.log(user.is_admin)
      if(user.is_admin === false ){
        return handleError(res, "You are not Admin.", 401);
      }
     
      var passwordIsValid = bcrypt.compareSync(body.password, user.password);

      if (!passwordIsValid) {
        return handleError(res, "Invalid Password!", 401);
      }

      var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400, // 24 hours
      });

      handleResponse(res, {
        user,
        accessToken: token,
      });
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.signUp = async (req, res) => {
  const body = req.body;
  console.log(body.invitation_code)

  // Email
  User.findOne({
    where: {
      email: body.email,
    },
  }).then(async (user) => {
    if (user) {
      return handleError(res, "Email is already taken.", 400);
      // if(user.verified_at !== null){
      //   return handleError(res, "Email is already taken.", 400);
      // }else{
      //   EmailContent.findOne({
      //     where: {slug: '3_2_signup_verification'}
      //   }).then((email_content) => {
      //     console.log(email_content)
      //     const mainContent = email_content.content_longtext;
      //     emailSending(user.email, mainContent);
      //   })
      //   return handleResponse(res, {user: user, message: "Email Send to your Gmail" });
      // }
    }

    // Nickname
    // User.findOne({
    //   where: {
    //     nickname: body.nickname,
    //   },
    // }).then((user) => {
    //   if (user) {
    //     return handleError(res, "Nickname is already taken.", 400);
    //   }

    

    InvitationCode.findOne({
      where: {invitation_code: body.invitation_code}
    }).then( async (InviteCode) => {
      if(!InviteCode){
        return handleError(res, "Please Enter Correct Invitation Code", 400);
      }else{
        if(InviteCode.status === true){
          return handleError(res, "This Invitation Code already in Use.", 400);
        }
        else{
          const customer = await stripe.customers.create({
            email: body.email,
            name: `${body.first_name} ${body.last_name}`,
          });
      
          User.create({
            stripe_customer_id: customer.id,
            is_admin: 0,
            email: body.email,
            password: bcrypt.hashSync(body.password, 8),
      
            // nick_name: body.nick_name,
            // first_name: body.first_name,
            // last_name: body.last_name,
          })
            .then((user) => {
              UsersSpokenLanguages.create({
                fk_user_id: user.id,
                fk_language_id: 1
              });
              
              InviteCode.update({
                status: InviteCode.invitation_code === 'K8F3J7' ? 0 : 1
              });
              EmailContent.findOne({
                where: {slug: '3_2_signup_verification'}
              }).then((email_content) => {
                // console.log(email_content)
                const subject = email_content.subject;
                const mainContent = email_content.content_longtext;
                const bcc = email_content.bcc;
                emailSending(user.email, subject, mainContent, bcc);
              })
              
              user.update({
                verification_code_sent_time : new Date()
              })
              handleResponse(res, {user: user, message: "Email Send to your Gmail" });
            })
            .catch((err) => {
              handleError(res, err);
            });
        }
      }
    });


    
  });
};

// resend Varification code
exports.resendVerificationCode = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (user) => {
    if (!user) {
      return handleError(res, "User not Found.", 400);
    } 
    // else if (user.verified_at != null) {
    //   return handleError(res, "User email is already Verified.", 400);
    // } 
    else {
      EmailContent.findOne({
        where: {slug: '3_2_signup_verification'}
      }).then((email_content) => {
        console.log(email_content)
        const subject = email_content.subject;
        const mainContent = email_content.content_longtext;
        const bcc = email_content.bcc;
        emailSending(user.email, subject, mainContent, bcc);
      })
      user.update({
        verification_code_sent_time : new Date()
      })
      handleResponse(res, {
        message: "Verification code ReSent.",
      });
    }
  });
};

//verify email
exports.signupVerification = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (user) => {
    if (!user) {
      return handleError(res, "User not Found.", 400);
    } else {
      if (req.body.verification_code == user.verification_code) {
        // let time = time_check(user.verification_code_sent_time);
        // if (time == 0) {
        //   return handleError(res, "Time is Over for Verification", 401);
        // }
        
          User.update(
            {
              verified_at: new Date(),
            },
            {
              where: { email: user.email },
            }
          ).then( () => {
  
        
            EmailContent.findOne({
              where: {slug: '3_5_signup_account_verification'}
            }).then((email_content) => {
              console.log(email_content)
              const subject = email_content.subject;
              const mainContent = email_content.content_longtext;
              const bcc = email_content.bcc;
              sendMail(user.email, subject, mainContent, bcc);
            });
            handleResponse(res, {
              message: "user verified",
            })
        });
        
        
      } else {
        return handleError(res, "Please Enter Correct Verification code", 401);
        
      }
    }
  });
};

exports.forgetPassword = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (user) => {
    if (!user) {
      return handleError(res, "Email not Found.", 400);
    } else {
      EmailContent.findOne({
        where: {slug: '4_10_forget_password'}
      }).then((email_content) => {
        console.log(email_content)
        const subject = email_content.subject;
        const mainContent = email_content.content_longtext;
        const bcc = email_content.bcc;
        emailSending(user.email, subject, mainContent, bcc);
      })
      handleResponse(res, {user: user, message: "Email Send to your Gmail" });
      User.update(
        {
          verification_code_sent_time: new Date(),
        },
        {
          where: { email: user.email },
        }
      );
    }
  });
};

exports.forgetPasswordEmailVerfication = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (user) => {
    if (!user) {
      return handleError(res, "Email not Found.", 400);
    } else {
      if (req.body.verification_code == user.verification_code) {
        // let time = time_check(user.verification_code_sent_time);
        // if (time == 0) {
        //   return handleError(res, "Time is Over for Verification", 401);
        // } else {
          handleResponse(res, {
            message: "Email verified",
          });
          User.update(
            {
              verified_at: new Date(),
            },
            {
              where: { email: user.email },
            }
          );
        // }
      } else {
        user.update({
          total_attempts: user.total_attempts + 1
        });
        const remaining_attempts = 5 - user.total_attempts;
        return handleError(res, `Verification code invalid, you have ${remaining_attempts} more attempts.`, 401);
      }
    }
  });
};

exports.newPasswordSuccess = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (user) => {
    if (!user) {
      return handleError(res, "Email not Found.", 400);
    } 
    else {
      User.update(
        {
          password: bcrypt.hashSync(req.body.password, 8),
        },
        {
          where: { email: user.email },
        }
      ).then( () => {
        EmailContent.findOne({
          where: {slug: '4_14_reset_password_success'}
        }).then((email_content) => {
          console.log(email_content)
          const subject = email_content.subject;
          const mainContent = email_content.content_longtext;
          const bcc = email_content.bcc;
          sendMail(user.email, subject, mainContent, bcc);
        });
        handleResponse(res, {user: user, message: "Password Reset Successfully" });
      })
    }
  })
};


exports.resetPasswordSuccess = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (user) => {
    if (!user) {
      return handleError(res, "Email not Found.", 400);
    } else {
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (passwordIsValid) {
        return handleError(res, "You Entered Your Old Password.", 400);
      } else {
        User.update(
          {
            password: bcrypt.hashSync(req.body.password, 8),
          },
          {
            where: { email: user.email },
          }
        ).then(() => {
          EmailContent.findOne({
            where: {slug: '4_14_reset_password_success'}
          }).then((email_content) => {
            console.log(email_content)
            const subject = email_content.subject;
            const mainContent = email_content.content_longtext;
            const bcc = email_content.bcc;
            sendMail(user.email, subject, mainContent, bcc);
          })
          handleResponse(res, {
            message: "Password Updated Successfully",
          })
        });
      }
    }
  });
};

exports.faqs = (req, res) => {
  RefFaqCategory.findAll(
    {
      attributes: ['name'],
      include: [
        {
          model: Faq,
          required: false,   //require:false gives the categories that even have no queation and answer
          attributes: ['question', 'answer']
        }
      ]
    }
  ).then( (ref_faq_categories) => {
    handleResponse(res, {ref_faq_categories})
  })
}

exports.getAllCountries = async (req, res) => {
  RefCountry.findAll().then((countries) => {
    handleResponse(res, {
      ref_countries: countries,
    });  
  });
}

exports.waitingList = async (req, res) => {
  const body = req.body;
  WaitingList.findOne({
    where: {email: body.email}
  }).then( async (waiting_list) => {
    if(waiting_list){
      return handleError(res, "You already in Waiting List", 400);
    }else{
      try{
        const waitintUser = await WaitingList.create({
          // first_name: body.first_name,
          name: body.name,
          email: body.email,
          country: body.country,
          comment: body.comment,
          reason: body.reason
        });
        if(waitintUser){
          EmailContent.findOne({
            where: {slug: '0_0_waiting_list'}
          }).then((email_content) => {
            console.log(email_content)
            const subject = email_content.subject;
            const mainContent = email_content.content_longtext;
            const bcc = email_content.bcc;
            sendMail(body.email, subject, mainContent, bcc);
          })
          handleResponse(res, {
            message: "Added Successfully, Now you are in Waiting List.",
          })
        }
      }catch (error) {
        // Handle any errors that might occur during the process
        console.error("Error occurred:", error);
        return handleError(res, "An error occurred.", 500);
      }
    }
  });
  
}


// mail send function
function emailSending(userEmail, subject, mainContent, bcc = null) {
  const OTPcode = generateRandomSixDigits(); 
  // let content = '<p>Hay Please Verify your email Address. Your One Time Password is: <h2>' +OTPcode+'</h2>';
  const content = mainContent.replace('["otp"]', OTPcode)
  sendMail(userEmail, subject, content, bcc);
  User.update(
    {
      verification_code: OTPcode,
    },
    {
      where: { email: userEmail },
    }
  );
}


const generateRandomSixDigits = () => {
  const timestamp = new Date().getTime(); // Get current timestamp
  console.log(timestamp)
  const randomNumber = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
  console.log(randomNumber)
  const combinedNumber = timestamp.toString() + randomNumber.toString(); // Combine timestamp and random number
  console.log(combinedNumber)
  const sixDigitNumber = combinedNumber.slice(-6); // Extract the last six digits
  return sixDigitNumber;
};

// 2 mints time check function
function time_check(code_sent_time) {
  const timeDifference = Math.abs(new Date() - code_sent_time);
  const oneMinutesInMilliseconds = 1 * 60 * 1000;
  let result;
  if (timeDifference <= oneMinutesInMilliseconds) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
}



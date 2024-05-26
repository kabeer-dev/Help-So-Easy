const { handleResponse, handleError } = require("../utils/responses.js");
const sendMail = require("../mail/sendMail");
// const { mailSubject, content } = require("../mail/mailBody");
const bcrypt = require("bcrypt");
const { Op } = require('sequelize');
const {
  User,
  RefCountry,
  RefState,
  RefTimeZone,
  RefInterest,
  UsersInterests,
  PremiumNickname,
  RefSpokenLanguage,
  UsersSpokenLanguages,
  RefDisplayLanguage,
  RefBuyerLevel,
  RefCurrency,
  Service,
  RefHelperAvailability,
  RefVideoPreference,
  ServiceRate,
  ServiceImage,
  AuthenticationLog,
  Faq,
  RefFaqCategory,
  Notification,
  Contact,
  RefAccountActionReason,
  RefCancelAccountActionReason,
  EmailContent,

} = require("../models");

const path = require("path");
const { Sequelize, DataTypes } = require('sequelize');



exports.getProfile = (req, res) => {
  handleResponse(res, {user: req.user});
};

exports.editCredentials = (req, res) => {
  if(req.user.email === req.body.email){
    var passwordIsValid = bcrypt.compareSync( req.body.password, req.user.password,);
    if(!passwordIsValid){
      return handleError(res, "Password is Worng", 401);
    }else{
      handleResponse( res, null, 200, "Do Further");
    }
  }else{
    return handleError(res, "Email is Wrong", 401);
  }
  
}

exports.editEmail = (req, res) => {
  if(req.body.new_email === req.user.email){
    return handleError(res, "This is your current Email.", 401);
  }
  User.findOne({
    where: {email: req.body.new_email}
  }).then((user) => {
    if(user){
      return handleError(res, "This Email Address is Exists .", 401);
    }else{
      EmailContent.findOne({
        where: {slug: '3_2_signup_verification'}
      }).then((email_content) => {
        console.log(email_content)
        const subject = email_content.subject;
        const mainContent = email_content.content_longtext;
        const bcc = email_content.bcc;
        emailSending(req.body.new_email, req.user.email, req.user, subject, mainContent, bcc);
      })
      handleResponse( res, null, 200, "Verification Code sent to " + req.body.new_email );
    }
  })
};

exports.editEmailVerification = (req, res) => {
  
  if (req.body.verification_code == req.user.verification_code) {
    let time = time_check(req.user.verification_code_sent_time);
    // if (time == 0) {
    //   return handleError(res, "Time is Over for Verification", 401);
    // } else {
      req.user
        .update({
          email: req.body.new_email,
          verified_at: new Date(),
        })
        .then(() => {
          EmailContent.findOne({
            where: {slug: '5_28_change_email_success'}
          }).then((email_content) => {
            const subject = email_content.subject;
            const mainContent = email_content.content_longtext;
            const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
            const bcc = email_content.bcc;
            sendMail(req.user.email, subject, content, bcc);
            sendMail(req.body.old_email, subject, content, bcc);
          })
          handleResponse(res, { message: "Email Edit Successfully" })
        });
    // }
  } else {
    return handleError(res, "Please Enter Correct Verification code", 401);
  }
};

exports.edit_email_resend_code = (req, res) => {
  EmailContent.findOne({
    where: {slug: '3_2_signup_verification'}
  }).then((email_content) => {
    // console.log(email_content)
    const subject = email_content.subject;
    const mainContent = email_content.content_longtext;
    const bcc = email_content.bcc;
    emailSending(req.body.new_email, req.user.email, req.user, subject, mainContent, bcc);
  })
  handleResponse( res, null, 200, "Verification Code sent to " + req.body.new_email ? req.user.first_name : 'User' );
}

exports.editPassword = (req, res) => {
  var passwordIsValid = bcrypt.compareSync(
    req.body.new_password,
    req.user.password
  );
  if (passwordIsValid) {
    return handleError(res, "You Entered Your Old Password", 400);
  }
  req.user
    .update({
      password: bcrypt.hashSync(req.body.new_password, 8),
    })
    .then( () => {
      EmailContent.findOne({
        where: {slug: '4_14_reset_password_success'}
      }).then((email_content) => {
        const subject = email_content.subject;
        const mainContent = email_content.content_longtext;
        const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
        const bcc = email_content.bcc;
        sendMail(req.user.email, subject, content, bcc);
      })
      handleResponse(res, { message: "Password Edit Successfully" })
    });
};
exports.edit_nick_name = (req, res) => {
  if (/^[a-z0-9_]+$/.test(req.body.nick_name)) {
    User.findOne({
      where: { nick_name: req.body.nick_name },
    }).then((user) => {
      if (!user) {
        PremiumNickname.findOne({
          where: { nickname: req.body.nick_name },
        }).then((nickname) => {
          if (!nickname && req.body.nick_name.length >= 4) {
            req.user
              .update({ nick_name: req.body.nick_name })
              .then(
                handleResponse(res, { message: "Nick Name Edit Successfully." })
              );
          } else {
            return handleError( res, "The Nick Name is Premium Nick Name..", 400 );
          }
        });
      } else {
        return handleError(res, "The Nick Name is Unavailabile.", 400);
      }
    });
  } else {
    return handleError(res, "The Nick Name is Not Valid.", 400);
  }
};

exports.editProfileS1 = (req, res) => {
  let body = req.body;
  req.user
    .update({
      first_name: body.first_name,
      fname_privacy: body.fname_privacy,
      last_name: body.last_name,
      lname_privacy: body.lname_privacy,
      birth_year: body.birth_year,
      birth_year_privacy: body.birth_year_privacy,
      phone: body.phone,
      phone_privacy: body.phone_privacy,
    })
    .then(handleResponse(res, { message: "Profile Edit Successfully" }));
};
exports.editProfileS2Get = (req, res) => {
  RefCountry.findAll().then((countries) => {
    RefState.findAll().then((states) => {
      RefTimeZone.findAll().then((timeZones) => {
        handleResponse(res, {
          countries,
          states,
          timeZones,
        });
      });
    });
  });
};
exports.editProfileS2Post = (req, res) => {
  let body = req.body;
  req.user
    .update({
      fk_country_id: body.fk_country_id,
      country_privacy: body.country_privacy,
      fk_state_id: body.fk_state_id,
      state_privacy: body.state_privacy,
      address: body.address,
      address_privacy: body.address_privacy,
      postal_code: body.postal_code,
      postal_code_privacy: body.postal_code_privacy,
      fk_time_zone_id: body.fk_time_zone_id,
      time_zone_privacy: body.time_zone_privacy,
    })
    .then(handleResponse(res, { message: "Profile Edit Successfully" }));
};
exports.editProfileS3Get = (req, res) => {
  RefInterest.findAll().then((refinterests) => {
    handleResponse(res, { refinterests });
  });
};
exports.editProfileS3Post = (req, res) => {
  const totalInterestedCategories = req.body.fk_interest_id;
  console.log(totalInterestedCategories);
  const userInterests = totalInterestedCategories.map((interestId) => ({
    fk_user_id: req.user.id,
    fk_interest_id: interestId,
  }));

  UsersInterests.bulkCreate(userInterests).then(
    handleResponse(res, { message: "Interested Categories Added Successfully" })
  );
};
exports.editProfileS4 = (req, res) => {
  req.user
    .update({
      description: req.body.description,
      description_privacy: req.body.description_privacy,
    })
    .then(handleResponse(res, { message: "Description Added Successfully" }));
};

exports.editImage = (req, res) => {
  var file = req.files.avatar;
  if (file.size >= 10485760) {
    handleError(res, { message: "Image is more then 10 MB" }, 400);
  } else {
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype)) {
      handleError(
        res,
        {
          message:
            "Invalid File Format. Available formats are jpg, png and jpeg",
        },
        400
      );
    } else {
      file.mv("public/images/" + file.name);
      const filePath = path.join(__dirname, "../public/images/" + file.name);
      console.log(filePath);
      req.user
        .update({
          avatar: filePath,
        })
        .then(handleResponse(res, { message: "File Upload Sussessfully" }));
    }
  }
};

exports.deleteImage = (req, res) => {
  if (req.user.avatar != null) {
    req.user
      .update({
        avatar: null,
      })
      .then(handleResponse(res, { message: "Image Delete Successfully" }));
  } else {
    handleResponse(res, { message: "You not upload any Image" });
  }
};

exports.spokenLanguages = async (req, res) => {
  const user = req.user;
  try {
    const userLanguages = await user.getRefSpokenLanguages(); // Ensure this returns the expected data

    // Extract IDs from userLanguages to create an array of IDs
    const userLanguageIds = userLanguages.map(lang => lang.id);

    const spoken_languages = await RefSpokenLanguage.findAll({
        where: {
            id: {
                [Sequelize.Op.notIn]: userLanguageIds
            }
        },
        order: [['name', 'ASC']]
        
    });
    handleResponse(res, { spoken_languages });
  
} catch (error) {
    console.error('Error fetching other languages:', error);
    throw error;
}
  
};

exports.userSpokenLanguages = (req, res) => {
  const user = req.user;
  user.getRefSpokenLanguages({
    attributes: ['id', 'name'],  // Specify attributes from the RefSpokenLanguage model to include 
    order: [['name', 'ASC']] 
  }).then((userSpokenLanguages) => {
    handleResponse(res, { userSpokenLanguages });
  })
}

exports.editUserSpokenLanguages = (req, res) => {
  const user = req.user;
  const body = req.body;
  // const totalSpokenLanguages = req.body.checkedLanguages;
  // console.log(totalSpokenLanguages)
  // const userSpokenLanguages = totalSpokenLanguages.map((languageId) => ({
  //   fk_user_id: req.user.id,
  //   fk_language_id: languageId,
  // }));
  // UsersSpokenLanguages.bulkCreate(userSpokenLanguages).then(
  //   handleResponse(res, { message: "Spoken Languages are Added Successfully" })
  // );
  UsersSpokenLanguages.create({
    fk_user_id: user.id,
    fk_language_id: body.spoken_language_id
  }).then(handleResponse(res, { message: "Spoken Languages are Added Successfully" }))
};

exports.deleteSpokenLanguage = (req, res) => {
  const user = req.user;
  const body = req.body;
  
  UsersSpokenLanguages.destroy({
    where: {
      fk_user_id: user.id,
      fk_language_id: body.spoken_language_id
    }

  }) 
  handleResponse(res);
}

exports.refDisplayLanguages = (req, res) => {
  RefDisplayLanguage.findAll().then((ref_display_languages) => {
    handleResponse(res, { ref_display_languages });
  });
};

exports.userDisplayLanguage = (req, res) => {
  req.user
    .update({
      fk_display_language_id: req.body.fk_display_language_id,
    })
    .then(
      handleResponse(res, {
        message: "Display Languages are Changed Successfully",
      })
    );
};
exports.userCurrency = (req, res) => {
  RefCurrency.findOne({
    where: { id: req.user.fk_currency_id },
  }).then((user_currency) => {
    handleResponse(res, { user_currency });
  });
};

exports.userLevel = (req, res) => {
  RefBuyerLevel.findOne({
    where: { id: req.user.fk_buyer_level_id },
  }).then((user_level) => {
    handleResponse(res, { user_level });
  });
};

exports.changeAvailability = (req, res) => {
  req.user                 
    .update({                       
      fk_helper_availability_id: req.body.fk_helper_availability_id,
    })
    .then(
      handleResponse(res, { message: "user availability changed successfully" })
    );
};




exports.announceService = (req, res) => {
  const current_yaer = new Date().getFullYear();
  const user_age = current_yaer - req.user.birth_year;
  if(user_age < 18){
    return handleError(res, "You Nead to meet the age requirement to announce a service", 401);
  }else{
    RefInterest.findAll().then((ref_interests) => {
      handleResponse(res, {ref_interests});
    });
  } 
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

exports.notifications = (req, res) => {
  if(req.body.show_all == 1){
    Notification.findAll(
      {
        where: {fk_user_id: req.user.id}
      }
    ).then( (user_notifications) => {
      if(user_notifications != ''){
        handleResponse(res, {user_notifications}, 200, 'Users all Notifications')
      }else{
        handleResponse(res, {message: 'No notifications yet'})
      }
    })
  }else{
    Notification.findAll(
      {
        where: {
          fk_user_id: req.user.id,
          is_read: 0
        }
      }
    ).then( (user_notifications) => {
      if(user_notifications != ''){
        handleResponse(res, {user_notifications}, 200, 'Users Unread Notifications')
      }else{
        handleResponse(res, {message: 'No notifications yet'})
      }
    })
  }
  
}

exports.contact = (req, res) => {
  const body = req.body;
  try{
    Contact.create({
      email: body.email,
      subject: body.subject,
      comment: body.comment,
      like_type: body.like_type ? body.like_type : 'Happy'
    }).then(() => {
      EmailContent.findOne({
        where: {slug: '31_157_contact_us'}
      }).then((email_content) => {
        const mainContent = email_content.content_longtext;
        const subject = email_content.subject;
        const content = mainContent.replace('["username"]', req.user ? req.user.first_name : 'User')
        const bcc = email_content.bcc;
        sendMail(req.body.email, subject, content, bcc);
      })
      handleResponse(res, {message: "Message send Successfully"})
    })
  }catch (error) {
    console.error('Error fetching other languages:', error);
    throw error;
  }
 
}

exports.logout = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  AuthenticationLog.destroy(
    {
      where: {fk_user_id: req.user.id}
    }
  ).then(() => {
    EmailContent.findOne({
      where: {slug: '0_1_log_out'}
    }).then((email_content) => {
      const mainContent = email_content.content_longtext;
      const subject = email_content.subject;
      const content = mainContent.replace('["username"]', user.first_name ? user.first_name : 'User')
      const bcc = email_content.bcc;
      sendMail(user.email, subject, content, bcc);
    });
    handleResponse(res, {message: 'Logout Successfully'})
  });
}

exports.getDeleteReasons = (req, res) => {
  RefAccountActionReason.findAll().then( (delete_reasons) => {
    handleResponse(res, {delete_reasons})
  })
}

exports.deleteAccount = (req, res) => {
  const user= req.user;
  const body = req.body;
  user.update({
    status_nm: 'Deleted',
    fk_account_action_reason_id: body.fk_account_action_reason_id,
    user_cancel_reason_other: body.other_reason ? body.other_reason : 'NULL',
    account_action_start: new Date()
  }).then(() => {

    Service.update({
      status_nm: 'NonActive'
    },
    {
      where: {
        fk_helper_id: user.id
      }
    }).then(() => {
      EmailContent.findOne({
        where: {slug: '33_166_delete_account'}
      }).then((email_contents) => {
        console.log(email_contents.content_longtext)
        const subject = email_contents.subject;
        const content = email_contents.content_longtext.replace('["username"]', user.first_name ? user.first_name : 'User' )
        const bcc = email_contents.bcc;
        sendMail(user.email, subject, content, bcc);
        handleResponse(res, {message: 'User Delete Successfully'})
      })
    })
  })
}


// exports.addUserId = () => {
//   const body = req.body;
//   const user = req.user
//   user.update({
//     user_id: body.user_id
//   })
// }

// delete account mail send function
// function deleteAccountEmailSending(userEmail) {
//   let mailSubject = "Help So Easy Delete Account";
//   let content = '<p>Your Account is Deleted Successfully</p>';
//   sendMail(userEmail, mailSubject, content);
// }

// mail send function
function emailSending(newEmail, userEmail, user, subject, mainContent, bcc = null) {
  
  const OTPcode = generateRandomSixDigits(); 
  // let content = '<p>Hay Please Verify your email Address. Your One Time Password is: <h2>' +OTPcode+'</h2>';
  const content = mainContent.replace('["otp"]', OTPcode)
  sendMail(newEmail, subject, content, bcc);
  user.update(
    {
      verification_code: OTPcode,
      verification_code_sent_time: new Date(),
    },
    {
      where: { email: userEmail },
    }
  );
}

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


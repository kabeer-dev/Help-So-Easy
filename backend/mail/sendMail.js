const nodeMailer = require('nodemailer');
const {SMTP_MAIL, SMTP_PASS} = process.env;
const { SmtpPlugin } = require("../models");


const sendMail = async (email, subject, content, bcc = null)=>{
    SmtpPlugin.findOne().then((smtpPlugin) => {
        // console.log("flkjkff",smtpPlugin.dataValues.smtpHost)
        try {
            // console.log("email", smtpPlugin.dataValues.smtpUser)
            const transport= nodeMailer.createTransport ({
                host: smtpPlugin.dataValues.smtpHost,
                port: 465,
                secure: true,
                // requireTLS: false,
                auth: {
                    user: smtpPlugin.dataValues.smtpUser,
                    pass: smtpPlugin.dataValues.security
                  },
                //   tls: {
                //     rejectUnauthorized: false // Add this if you encounter certificate issues
                //   }
              
            })
    
            const mailOptions = {
                from: smtpPlugin.dataValues.smtpUser,
                to: email,
                subject: subject,
                html: content,
            }

            if (bcc != null) {
                // mailOptions.bcc = 'betawod718@tsderp.com';
                mailOptions.bcc = bcc;
            }
    
            transport.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log("Mail send Successfully", info.response);
                }
            })
    
        } catch (error) {
            console.log(error.message);
        }
    });


    
}


module.exports = sendMail;
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('email_contents', [
      {
        slug: '3_2_signup_verification',
        subject: 'Sign Up Verification',
        content_longtext: `
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
    <tbody>
        <tr>
            <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
            </td>
        </tr>
        <tr>
            <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                <h1 style="padding-top: 0rem; font-weight: 500;">Sign Up Verification</h1>
                <h1 style="padding-top: 0px; font-weight: 500;">OTP : ["otp"]</h1>
                <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                    <p style="margin-top: 0px;">This is your verification code please add this on browser to verify your Email.</p>
                    
                    <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>About</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Info</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Download App</h2>
                                <p style="margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                </p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align: center;">
                                <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
      
          
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '3_5_signup_account_verification',
        subject: 'Sign Up Account Verification Successfully',
        content_longtext: `
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
    <tbody>
        <tr>
            <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
            </td>
        </tr>
        <tr>
            <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                <h1 style="padding-top: 0rem; font-weight: 500;">Account Verify Successfully</h1>
                
                <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                    <p style="margin-top: 0px;">Congratulations! Your account has been verified Successfully. Thanks!</p><p style="margin-top: 0px;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    
                    
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>About</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Info</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Download App</h2>
                                <p style="margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                </p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align: center;">
                                <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '4_10_forget_password',
        subject: 'Forget Password Verification',
        content_longtext: `
       
       
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
    <tbody>
        <tr>
            <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
            </td>
        </tr>
        <tr>
            <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                <h1 style="padding-top: 0rem; font-weight: 500;">Forget Password Verification</h1>
                <h1 style="padding-top: 0px; font-weight: 500;">OTP : ["otp"]</h1>
                <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                    <p style="margin-top: 0px;">This is 6 digits verification code please enter this code on brower.</p>
                    
                    <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>About</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Info</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Download App</h2>
                                <p style="margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                </p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align: center;">
                                <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '4_14_reset_password_success',
        subject: 'Reset Password Successfully',
        content_longtext: `
        
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
    <tbody>
        <tr>
            <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
            </td>
        </tr>
        <tr>
            <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                <h1 style="padding-top: 0rem; font-weight: 500;">Password Reset Successfully</h1>
                <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                    <p style="margin-top: 0px;">Congratulations! Your account has been reactivated. Thanks!</p>
                    
                    <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>About</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Info</h2>
                                <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                            </td>
                            <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                <h2>Download App</h2>
                                <p style="margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                </p>
                                <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                    <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align: center;">
                                <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
      
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '5_28_change_email_success',
        subject: 'Change Email Successfully',
        content_longtext: `
        
       
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Email Changed Succesfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Congratulations! Your account has been reactivated. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '15_72_add_receiving_method',
        subject: 'Receiving Payment Method Added Successfully',
        content_longtext: `
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Receiving Payment Method Added Successfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Congratulations! Your Receiving Payment Method is Added Succefffully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '14_70_delete_receiving_method',
        subject: 'Bank Account Delete Successfully',
        content_longtext: `
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Bank Account Deleted</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Your Bank Account deleted Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '15_72_add_sending_method',
        subject: 'Card Added Successfully',
        content_longtext: `
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Card Added Successfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Congratulations! Your Card is Added Succefffully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '15_75_delete_sending_method',
        subject: 'Card Delete Successfully',
        content_longtext: `
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Card Deleted Successfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Your Card is Deleted Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '16_81_delete_service',
        subject: 'Service Delete Successfully',
        content_longtext: `
        
       
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Service Deleted Successfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Your Service is deleted Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '18_90_add_change_service',
        subject: 'Service Changed Successfully',
        content_longtext: `
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Service Added Successfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Congratulations! Your Service is Added Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '27_143_sell_email_invoice',
        subject: 'Seller Invoice',
        content_longtext: `
       
        <p>&nbsp;is&nbsp;</p><table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Seller Invoice&nbsp;</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Your Invoice is generated Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '27_143_buy_email_invoice',
        subject: 'Buyer Invoice',
        content_longtext: `
       
        <p>&nbsp;is&nbsp;</p><table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Buyer Invoice&nbsp;</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Your Invoice is generated Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        slug: '31_157_contact_us',
        subject: 'Email Sent Succesfully',
        content_longtext: `
       
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Message Sent Successfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Congratulations! Your message is sent to Help So Easy Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '33_166_delete_account',
        subject: 'Account Deleted Successfully',
        content_longtext: `
        
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Account Deleted Successfully</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Your account has been deleted Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },


      {
        slug: '0_0_waiting_list',
        subject: 'Adding in Waiting List Successfully',
        content_longtext: `
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Waiting list request</h1>
                    
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">Congratulations! Your are added in waiting list Successfully. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        slug: '0_1_share_service',
        subject: 'Open Share Service',
        content_longtext: `
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Share Service</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">You open Share Service from a Service. Thanks!</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: '0_1_log_out',
        subject: 'User Log Out',
        content_longtext: `
        
        <table style="width: 70%; margin: 0 auto; padding: 54px; background-color: #F8F9FA; height: 900px; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
        <tbody>
            <tr>
                <td style="max-width: 1140px; background-color: #EBEBEB; padding: 0.5rem; height: 115px;">
                    <h1 style="color: #3BB34F; float: left; padding-left: 3rem; padding-top: 0.4rem;">HELP SO EASY</h1>
                    <img style="object-fit: cover; padding-right: 3rem; float: right;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
                </td>
            </tr>
            <tr>
                <td style="background-color: #fff; width: 70%; height: 440px; border-radius: 4px; margin: 2.5rem auto 1.5rem; padding: 1.25rem; line-height: 1; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
                    <img style="object-fit: cover;" src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" alt="logo-png" height="70px" data-mce-src="https://help-so-easy-bucket.s3.amazonaws.com/assets/logo.png" data-mce-style="object-fit: cover;">
                    <h1 style="padding-top: 0rem; font-weight: 500;">Logged Out</h1>
                    <h1 style="padding-top: 0px; font-weight: 500;">Dear : ["username"]</h1>
                    <div style="color: #6C757D; margin-top: 0rem; padding: 0 0.1rem;line-height: 1.6;">
                        <p style="margin-top: 0px;">You have logged out of your account successfully.</p>
                        
                        <p style="padding: 0px 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out. Cheers, <br>Help So Easy Inc.</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 70%; margin: 0 auto; background-color: #CEF5C9; border-radius: 4px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; font-size: 0.75rem; text-align: center;">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>About</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">About us</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Terms and policies</p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008CFF; margin: 0;">http://www.helpsoeasy.com</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Info</h2>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0;">FAQ</p>
                                    <p style="font-weight: bold; font-size: 13px; margin: 0; padding-top: 5px;">Contact us</p>
                                </td>
                                <td style="padding: 0.5rem 1.25rem; text-align: left; vertical-align: top;">
                                    <h2>Download App</h2>
                                    <p style="margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/play-store-logo.png" height="40px" style="margin: 0;">
                                    </p>
                                    <p style="font-weight: bold; font-size: 13px; padding-top: 5px; margin: 0;">
                                        <img src="https://help-so-easy-bucket.s3.amazonaws.com/assets/apple-app-store-logo.jpg" alt="logo-png" height="37px" style="margin: 0;">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align: center;">
                                    <button style="background: #3BB34F; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
      
      `,
        created_at: new Date(),
        updated_at: new Date()
      }
    

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('email_contents', null, [])
  }
};

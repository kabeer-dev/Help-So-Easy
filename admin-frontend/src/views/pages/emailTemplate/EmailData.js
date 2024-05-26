 
import deactivate from 'assets/images/AccountDeactivated.png';
import AccountSuspand from "assets/images/Account Suspended.png";
import AccVerfied from "assets/images/Account varified.png";
import AccReactivate from "assets/images/Accountreactivated.png";
import Confirmation from "assets/images/Confirmation.png";
import Delete from "assets/images/Deleted.png";
import LogIn from "assets/images/Log in.png";
import MissedCall from "assets/images/Missed call.png";
import NewService from "assets/images/New Service.png";
import RecivingAcc from "assets/images/Receiving account activated.png";
import Request from "assets/images/Request.jpg";
import Visted from "assets/images/Visited.png";
import filter from "assets/images/FIlter.png"

 const data = [
    {
        id: 1,
        name: '4_8_signup_verification'
    },
    {
        id: 2,
        name: '4_9_signup_account_verification'
    },
    {
        id: 3,
        name: '5_14_forgot_password'
    },
    {
        id: 4,
        name: '5_21_reset_password_success'
    },
    {
        id: 5,
        name: '6_24_verify_new_email'
    },
    {
        id: 6,
        name: '6_28_change_email_success'
    },
    {
        id: 7,
        name: '6_30_reset_password_success'
    },
    {
        id: 8,
        name: '7_32_confirmed_nickname'
    },
    {
        id: 9,
        name: '15_70_add_bank'
    },
    {
        id: 10,
        name: '15_72_delete_bank'
    },
    {
        id: 11,
        name: '16_76_add_card'
    },
    {
        id: 12,
        name: '16_78_delete'
    },
    {
        id: 13,
        name: '19_104_delete_service'
    },
    {
        id: 14,
        name: '21_114_add_change_service'
    },
    {
        id: 15,
        name: '22_120_1_copy_share_link'
    },
    {
        id: 16,
        name: '28_154_buyer_upgrade'
    },
    {
        id: 17,
        name: '28_154_invoice'
    },
    {
        id: 18,
        name: '29_158_reject_call'
    },
    {
        id: 19,
        name: '29_162_invoice'
    },
    {
        id: 20,
        name: '30_166_buyer_email_invoice'
    },
    {
        id: 21,
        name: '30_171_helper_email_invoice'
    },
    {
        id: 22,
        name: '34_180_contact_us'
    },
    {
        id: 23,
        name: '36_186_delete_account'
    },
    {
        id: 24,
        name: 'test-email'
    }
];
const textData = [
    {
        id: 1,
        heading:"Account is Deactivated!",
        img:deactivate
    },
    {
        id: 2,
        heading:"Account is Reactivated!",
        img:AccReactivate
    },
    {
        id: 3,
        heading:"Account is Suspended!",
        img:AccountSuspand
    },
    {
        id: 4,
        heading:"Account Varified!",
        img:AccVerfied
    },
    {
        id: 5,
        heading:"Bank Receiving account activated!",
        img:RecivingAcc
    },
    {
        id: 6,
        heading:"Bank Receiving account deleted!",
        img:Delete
    },
    {
        id: 7,
        heading:"Bank sending account activated!",
        img:RecivingAcc
    },
    {
        id: 8,
        heading:"Bank sending account deleted!",
        img:deactivate
    },
    {
        id: 9,
        heading:"Buyer visited your profile!",
        img:Visted
    },
    {
        id: 10,
        heading:"Credit card sending account activated!",
        img:AccVerfied
    },
    {
        id: 23,
        heading:"Credit card sending account deleted!",
        img:deactivate
    },
    {
        id: 11,
        heading:"Debit card sending account activated!",
        img:AccVerfied
    },
    {
        id: 12,
        heading:"Debit card sending account deleted!",
        img:Delete
    },
    {
        id: 13,
        heading:"Deleted Paypal receiving account !",
        img:Delete
    },
    {
        id: 14,
        heading:"Deleted Service!",
        img:Delete
    },
    {
        id: 15,
        heading:"Login!",
        img:LogIn
    },
    {
        id: 16,
        heading:"Missed a Call!",
        img:MissedCall
    },
    {
        id: 17,
        heading:"New Device Confirmation!",
        img:Confirmation
    },
    {
        id: 18,
        heading:"New Filter!",
        img:filter
    },
    {
        id: 19,
        heading:"New Service is Created!",
        img:NewService
    },
    {
        id: 20,
        heading:"New Terms and Condition!",
        img:Request
    },
    {
        id: 21,
        heading:"Paypal Receiving Account!",
        img:RecivingAcc
    },
    {
        id: 22,
        heading:"Paypal Sending account activated!",
        img:Confirmation
    },
    {
        id: 24,
    },
    
];
// const textData = [
//     {
//         id: 1,
//         name: `
// <div style="padding:40px;" data-mce-style="padding:40px;">
// <div style="background-color: #f8f9fa;" data-mce-style="background-color: #f8f9fa;">
// <div style="background-color: #ebebeb; display: flex; align-items: center; padding: 20px;" data-mce-style="background-color: #ebebeb; display: flex; align-items: center; padding: 20px;">
// <div>
// <img src="${image}" alt="logo-png" height="80px" data-mce-src="${image}">

// </div>
// <div style="margin-left: 20px;" data-mce-style="margin-left: 20px;"><h1 style="color: #3bb34f;" data-mce-style="color: #3bb34f;">HELP SO EASY</h1>
// </div>
// </div>
// <div style="display: flex; justify-content: center; align-items: center;" data-mce-style="display: flex; justify-content: center; align-items: center;">
// <div style="background-color: #fff; width: 70%; border-radius: 4px; margin-top: 25px; margin-bottom: 25px; padding: 1.25rem; line-height: 1.6; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;" data-mce-style="background-color: #fff; width: 70%; border-radius: 4px; margin-top: 25px; margin-bottom: 25px; padding: 1.25rem; line-height: 1.6; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
// <div style="text-align: center;" data-mce-style="text-align: center;">
// <img style="object-fit: cover;" src="${deactivate}" alt="logo-png" height="70px" data-mce-src="${deactivate}" data-mce-style="object-fit: cover;">
// <h1 style="padding-top: 0rem; font-weight: 500;" data-mce-style="padding-top: 0rem; font-weight: 500;">Account is Deactivated!</h1>
// </div>
// <div style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;" data-mce-style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;">Dear ["username"]:<p style="margin-top: 0px;" data-mce-style="margin-top: 0px;">Your account is deactivated successfully. You can reactive your account within a week. After that it will be permanently deleted. Thanks!</p>
// <p style="padding: 0.4rem 0rem;" data-mce-style="padding: 0.4rem 0rem;">If that doesnt work, copy and paste the following link in your browser:</p>
// <a style="color: #3bb34f;" href="#" data-mce-href="#" data-mce-style="color: #3bb34f;">["XXX.XXXXXXX.XXX / XXXXXXXXXXXXX"]&lt;/a &gt;</a>
// <p style="padding: 0.4rem 0rem;" data-mce-style="padding: 0.4rem 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out.</p>
// <a style="color: #3bb34f;" href="#" data-mce-href="#" data-mce-style="color: #3bb34f;">Cheers, <br>Help So Easy Inc. </a>
// </div></div></div>
// <div style="display: flex; justify-content: center; align-items: center;" data-mce-style="display: flex; justify-content: center; align-items: center;">
// <div style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;" data-mce-style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;">
// <div style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;" data-mce-style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;">
// <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;">
// <div><h2>About</h2></div>
// <div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">About us</div><div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Terms and policies</div>
// <div style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;">http://www.helpsoeasy.com</div></div>
// <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>Info</h2></div><div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">FAQ</div>
// <div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Contact us</div></div><div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>Download App</h2></div>
// <div><img src="../../images/play-store-logo.png" alt="logo-png" height="40px" data-mce-src="../../images/play-store-logo.png"></div>
// <div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;"><img src="../../images/apple-app-store-logo.jpg" alt="logo-png" height="37px" data-mce-src="../../images/apple-app-store-logo.jpg"></div></div></div>

// <!-- <div style="display: flex; flex-direction: column;"> --> <!-- <div>
//       <h2>Follow us</h2>
//       </div> --> <!-- <div style="display: flex;">
//       <div><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       </div> -->
//       <!-- </div> --> <!-- </div> -->
//       <div><button style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;" data-mce-style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button></div></div></div><div style="margin: 0 auto; padding: 1.5rem; font-family: Arial, Helvetica, sans-serif; font-size: 0.7rem; width: 69%;" data-mce-style="margin: 0 auto; padding: 1.5rem; font-family: Arial, Helvetica, sans-serif; font-size: 0.7rem; width: 69%;">
//       <div><a style="color: #343a40; font-weight: bold; line-height: 1.8;" href="#" data-mce-href="#" data-mce-style="color: #343a40; font-weight: bold; line-height: 1.8;">view it in your browser.&lt;/a &gt; </a>
//       </div>
//       <div style="display: flex;" data-mce-style="display: flex;"><br></div>
//       <div style="display: flex;" data-mce-style="display: flex;">
//       <span style="color: #6c757d; font-size: 0.7rem;" data-mce-style="color: #6c757d; font-size: 0.7rem;">www.helpsoeasy.com</span>
//       </div></div></div></div>
// `
//     },
//     {
//         id: 2,
//         name: `
//         <div style="background-color: #f8f9fa; height: 1000px;" data-mce-style="background-color: #f8f9fa; height: 1000px;">
//         <div style="max-width: 1140px; background-color: #ebebeb; padding: 1rem 2rem 4rem; height: 45px;" data-mce-style="max-width: 1140px; background-color: #ebebeb; padding: 1rem 2rem 4rem; height: 45px;"><div style="margin: 0 0rem 2rem 0rem;" data-mce-style="margin: 0 0rem 2rem 0rem;">
//         <h1 style="color: #3bb34f; float: left; padding-left: 3rem;" data-mce-style="color: #3bb34f; float: left; padding-left: 3rem;">HELP SO EASY</h1>
//         <img style="object-fit: cover; padding-right: 3rem; float: right;" src="../../images/logo.png" alt="logo-png" height="70px" data-mce-src="../../images/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
//         </div>
//         <div style="background-color: #fff; width: 70%; height: 470px; border-radius: 4px; margin: 5.5rem  auto 1.5rem; padding: 1.25rem; line-height: 1.6; font-size: .84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: .56px;" data-mce-style="background-color: #fff; width: 70%; height: 470px; border-radius: 4px; margin: 5.5rem  auto 1.5rem; padding: 1.25rem; line-height: 1.6; font-size: .84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: .56px;">
//         <div style="text-align: center;" data-mce-style="text-align: center;">
//         <img style="object-fit: cover;" src="../../images/Account reactivated.png" alt="logo-png" height="70px" data-mce-src="../../images/Account reactivated.png" data-mce-style="object-fit: cover;">
//         <h1 style="padding-top: 0rem; font-weight: 500;" data-mce-style="padding-top: 0rem; font-weight: 500;">Account is Reactivated!</h1>
//         </div>
//         <!-- ---- content ---- -->
//         <div style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;" data-mce-style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;">Dear ["username"]:<p style="margin-top: 0px;" data-mce-style="margin-top: 0px;">Congratulations! Your account has been reactivated. Thanks!</p>
//         <p style="padding: .4rem 0rem;" data-mce-style="padding: .4rem 0rem;">If that doesn't work, copy and paste the following link in your browser:</p>
//         <a style="color: #3bb34f;" href="#" data-mce-href="#" data-mce-style="color: #3bb34f;">["XXX.XXXXXXX.XXX / XXXXXXXXXXXXX"]</a>
//         <p style="padding: .4rem 0rem;" data-mce-style="padding: .4rem 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out.</p>Cheers, <br>Help So Easy Inc.</div></div>
//         <!-- ----- footer ----- -->
//         <div style="display: flex; justify-content: center; align-items: center;" data-mce-style="display: flex; justify-content: center; align-items: center;">
//         <div style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;" data-mce-style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;">
//         <div style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;" data-mce-style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;"><div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>About</h2></div>
//         <div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">About us</div><div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Terms and policies</div>
//         <div style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;">http://www.helpsoeasy.com</div>
//         </div>
//         <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>Info</h2></div><div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">FAQ</div><div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Contact us</div>
//         </div>
//         <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>Download App</h2></div><div><img src="../../images/play-store-logo.png" alt="logo-png" height="40px" data-mce-src="../../images/play-store-logo.png"></div>
//         <div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;"><img src="../../images/apple-app-store-logo.jpg" alt="logo-png" height="37px" data-mce-src="../../images/apple-app-store-logo.jpg"></div>
//         </div>
//         </div>
//         <div>
//         <button style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;" data-mce-style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>`
//     },
//     {
//         id: 3,
//         name: `
//         <div style="background-color: #f8f9fa; height: 1000px;" data-mce-style="background-color: #f8f9fa; height: 1000px;"><div style="max-width: 1140px; background-color: #ebebeb; padding: 1rem 2rem 4rem; height: 45px;" data-mce-style="max-width: 1140px; background-color: #ebebeb; padding: 1rem 2rem 4rem; height: 45px;">
//         <div style="margin: 0 0rem 2rem 0rem;" data-mce-style="margin: 0 0rem 2rem 0rem;"><h1 style="color: #3bb34f; float: left; padding-left: 3rem;" data-mce-style="color: #3bb34f; float: left; padding-left: 3rem;">HELP SO EASY</h1>
//         <img style="object-fit: cover; padding-right: 3rem; float: right;" src="../../images/logo.png" alt="logo-png" height="70px" data-mce-src="../../images/logo.png" data-mce-style="object-fit: cover; padding-right: 3rem; float: right;">
//         </div>
//         <div style="background-color: #fff; width: 70%; height: 490px; border-radius: 4px; margin: 5.5rem  auto 1.5rem; padding: 1.25rem; line-height: 1.6; font-size: .84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: .56px;" data-mce-style="background-color: #fff; width: 70%; height: 490px; border-radius: 4px; margin: 5.5rem  auto 1.5rem; padding: 1.25rem; line-height: 1.6; font-size: .84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: .56px;">
//         <div style="text-align: center;" data-mce-style="text-align: center;"><img style="object-fit: cover;" src="../../images/Account Suspended.png" alt="logo-png" height="70px" data-mce-src="../../images/Account Suspended.png" data-mce-style="object-fit: cover;"><h1 style="padding-top: 0rem; font-weight: 500;" data-mce-style="padding-top: 0rem; font-weight: 500;">Account is Suspended!</h1>
//         </div>
//         <!-- ---- content ---- -->
//         <div style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;" data-mce-style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;">Dear ["username"]:<p style="margin-top: 0px;" data-mce-style="margin-top: 0px;">We have detected an apropriate activity from your account that does not follow our terms and conditions. That’s why your account has been suspended.</p>
//         <p style="padding: .4rem 0rem;" data-mce-style="padding: .4rem 0rem;">If that doesn't work, copy and paste the following link in your browser:</p>
//         <a style="color: #3bb34f;" href="#" data-mce-href="#" data-mce-style="color: #3bb34f;">["XXX.XXXXXXX.XXX / XXXXXXXXXXXXX"]</a><p style="padding: .4rem 0rem;" data-mce-style="padding: .4rem 0rem;">If you have any questions, just reply to this email. We'll always happy to help you out.</p>Cheers, <br>Help So Easy Inc.</div>
//         </div>
//         <!-- ----- footer ----- -->
//         <div style="display: flex; justify-content: center; align-items: center;" data-mce-style="display: flex; justify-content: center; align-items: center;"><div style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;" data-mce-style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;">
//         <div style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;" data-mce-style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;"><div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;">
//         <div><h2>About</h2></div>
//         <div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">About us</div>
//         <div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Terms and policies</div>
//         <div style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;">http://www.helpsoeasy.com</div>
//         </div>
//         <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>Info</h2></div>
//         <div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">FAQ</div><div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Contact us</div>
//         </div>
//         <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;">
//         <div><h2>Download App</h2></div><div><img src="../../images/play-store-logo.png" alt="logo-png" height="40px" data-mce-src="../../images/play-store-logo.png"></div><div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;"><img src="../../images/apple-app-store-logo.jpg" alt="logo-png" height="37px" data-mce-src="../../images/apple-app-store-logo.jpg"></div>
//         </div>
//         </div>
//         <!-- <div style="display: flex; justify-content: center; align-items: center; padding-left: 30px; padding-right: 30px; padding-bottom: 30px;"> --> 
//         <!-- <div style="display: flex; flex-direction: column;"> --> 
//         <!-- <div>
//          <h2>Follow us</h2>
//           </div> -->
//           <div><button style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;" data-mce-style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button></div>
//           </div>
//           </div>
//           </div>
//           </div>`
//     }
//  <div style="padding:40px;" data-mce-style="padding:40px;">
// <div style="background-color: #f8f9fa;" data-mce-style="background-color: #f8f9fa;">
// <div style="background-color: #ebebeb; display: flex; align-items: center; padding: 20px;" data-mce-style="background-color: #ebebeb; display: flex; align-items: center; padding: 20px;">
// <div>
// <img src="${logo}" alt="logo-png" height="80px" data-mce-src="${logo}">

// </div>
// <div style="margin-left: 20px;" data-mce-style="margin-left: 20px;"><h1 style="color: #3bb34f;" data-mce-style="color: #3bb34f;">HELP SO EASY</h1>
// </div>
// </div>
// <div style="display: flex; justify-content: center; align-items: center;" data-mce-style="display: flex; justify-content: center; align-items: center;">
// <div style="background-color: #fff; width: 70%; border-radius: 4px; margin-top: 25px; margin-bottom: 25px; padding: 1.25rem; line-height: 1.6; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;" data-mce-style="background-color: #fff; width: 70%; border-radius: 4px; margin-top: 25px; margin-bottom: 25px; padding: 1.25rem; line-height: 1.6; font-size: 0.84rem; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.56px;">
// <div style="text-align: center;" data-mce-style="text-align: center;">
// <img style="object-fit: cover;" src="${deactivate}" alt="logo-png" height="70px" data-mce-src="${deactivate}" data-mce-style="object-fit: cover;">
// <h1 style="padding-top: 0rem; font-weight: 500;" data-mce-style="padding-top: 0rem; font-weight: 500;">${heading}</h1>
// </div>
// <div style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;" data-mce-style="color: #6c757d; margin-top: 3rem; padding: 0 0.5rem;">Dear ["username"]:<p style="margin-top: 0px;" data-mce-style="margin-top: 0px;">Your account is deactivated successfully. You can reactive your account within a week. After that it will be permanently deleted. Thanks!</p>
// <p style="padding: 0.4rem 0rem;" data-mce-style="padding: 0.4rem 0rem;">If that doesnt work, copy and paste the following link in your browser:</p>
// <a style="color: #3bb34f;" href="#" data-mce-href="#" data-mce-style="color: #3bb34f;">["XXX.XXXXXXX.XXX / XXXXXXXXXXXXX"]&lt;/a &gt;</a>
// <p style="padding: 0.4rem 0rem;" data-mce-style="padding: 0.4rem 0rem;">If you have any questions, just reply to this email. We'll always be happy to help you out.</p>
// <a style="color: #3bb34f;" href="#" data-mce-href="#" data-mce-style="color: #3bb34f;">Cheers, <br>Help So Easy Inc. </a>
// </div></div></div>
// <div style="display: flex; justify-content: center; align-items: center;" data-mce-style="display: flex; justify-content: center; align-items: center;">
// <div style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;" data-mce-style="background-image: linear-gradient(#cef5c9, #cef5c9); width: 70%; padding-left: 1.25rem; padding-right: 1.25rem; font-family: Arial, Helvetica, sans-serif; border-radius: 4px; line-height: 1.6; font-size: 0.75rem; text-align: center;">
// <div style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;" data-mce-style="display: flex; justify-content: space-between; padding-left: 30px; padding-right: 30px;">
// <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;">
// <div><h2>About</h2></div>
// <div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">About us</div><div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Terms and policies</div>
// <div style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 20px; color: #008cff;">http://www.helpsoeasy.com</div></div>
// <div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>Info</h2></div><div style="font-weight: bold; font-size: 13px;" data-mce-style="font-weight: bold; font-size: 13px;">FAQ</div>
// <div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;">Contact us</div></div><div style="display: flex; flex-direction: column; text-align: left;" data-mce-style="display: flex; flex-direction: column; text-align: left;"><div><h2>Download App</h2></div>
// <div><img src="../../images/play-store-logo.png" alt="logo-png" height="40px" data-mce-src="../../images/play-store-logo.png"></div>
// <div style="font-weight: bold; font-size: 13px; padding-top: 5px;" data-mce-style="font-weight: bold; font-size: 13px; padding-top: 5px;"><img src="../../images/apple-app-store-logo.jpg" alt="logo-png" height="37px" data-mce-src="../../images/apple-app-store-logo.jpg"></div></div></div>

// <!-- <div style="display: flex; flex-direction: column;"> --> <!-- <div>
//       <h2>Follow us</h2>
//       </div> --> <!-- <div style="display: flex;">
//       <div><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       <div style="padding-left: 10px;"><img src="../../images/logo.png" alt="logo-png" height="20px" /></div>
//       </div> -->
//       <!-- </div> --> <!-- </div> -->
//       <div><button style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;" data-mce-style="background: #3bb34f; border: 0; color: white; padding: 8px 18px; border-radius: 3px; margin: 0 0 14px 0;">Unsubscribe</button></div></div></div><div style="margin: 0 auto; padding: 1.5rem; font-family: Arial, Helvetica, sans-serif; font-size: 0.7rem; width: 69%;" data-mce-style="margin: 0 auto; padding: 1.5rem; font-family: Arial, Helvetica, sans-serif; font-size: 0.7rem; width: 69%;">
//       <div><a style="color: #343a40; font-weight: bold; line-height: 1.8;" href="#" data-mce-href="#" data-mce-style="color: #343a40; font-weight: bold; line-height: 1.8;">view it in your browser.&lt;/a &gt; </a>
//       </div>
//       <div style="display: flex;" data-mce-style="display: flex;"><br></div>
//       <div style="display: flex;" data-mce-style="display: flex;">
//       <span style="color: #6c757d; font-size: 0.7rem;" data-mce-style="color: #6c757d; font-size: 0.7rem;">www.helpsoeasy.com</span>
// </div></div></div></div> 

// ];

export { data,textData }  
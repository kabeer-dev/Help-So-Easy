const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { login, Adminlogin, signUp, signupVerification, resendVerificationCode, forgetPassword, forgetPasswordEmailVerfication, newPasswordSuccess, resetPasswordSuccess, faqs, getAllCountries, waitingList} = require("../../controllers/auth.js");
const { allServices, allServicesWithSearchKeyword, allServiceWithTitle} = require("../../controllers/service.js");

const { contact } = require('../../controllers/user.js')
const { validateRequest } = require("../../middleware/validateRequest.js");
const { verifyBlock } = require('../../middleware/verifyBlock.js')
const { verifyAttempts } = require('../../middleware/verifyAttempts.js')

const {verifyApisAttempts} = require('../../middleware/verifyApisAttempts.js')
// router.get('/', (req, res)=>{
//   res.send("sdkjhdl");
// })
router.post(
  "/login",
  [
    body("email", "Email is not valid")
      .notEmpty()
      .withMessage("Email is required")
      .if(body("email").notEmpty())
      .isEmail(),
      // .normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  verifyApisAttempts,
  login
);

router.post(
  "/admin/login",
  [
    body("email", "Email is not valid")
      .notEmpty()
      .withMessage("Email is required")
      .if(body("email").notEmpty())
      .isEmail(),
      // .normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  Adminlogin
);

router.post(
  "/sign-up",
  [
    body("email", "Email is not valid")
      .notEmpty()
      .withMessage("Email is required")
      .if(body("email").notEmpty())
      .isEmail(),
      // .normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required"),
    body("invitation_code").notEmpty().withMessage("Invitation Code is required"),
    // body("nickname"),
    // body("firstName"),
    // body("lastName")
    
    // body("nickname").notEmpty().withMessage("Nickname is required"),
    // body("firstName").notEmpty().withMessage("First name is required"),
    // body("lastName").notEmpty().withMessage("Last name is required"),
  ],
  validateRequest,
  
  signUp
);

router.post(
  '/resend_verification_code',
  [
    body('email').notEmpty().withMessage('user email is required')
  ],
  validateRequest,
  resendVerificationCode
)

router.post(
  '/signup_verification', 
  [
    body('verification_code', "verification Code is not Valid").notEmpty().withMessage("verification Code is required"),
    body('email').notEmpty().withMessage('user email is required')
  ],
  validateRequest,
  signupVerification
  );

router.post(
  '/forget_password',
  [
    body('email').notEmpty().withMessage('Email is required')
  ],
  validateRequest,
  verifyBlock,
  forgetPassword
);

router.post(
  '/forget_password_email_verification',
  [
    body('email').notEmpty().withMessage('Email is required'),
    body('verification_code').notEmpty().withMessage('Verification code is required'),
  ],
  validateRequest,
  verifyAttempts,
  forgetPasswordEmailVerfication
);

router.post(
  '/new_password_success',
  [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validateRequest,
  newPasswordSuccess
)

router.put(
  '/reset_password_success',
  [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validateRequest,
  resetPasswordSuccess
)

router.get( 
  '/faqs', 
  validateRequest, 
  faqs 
)

router.get(
  '/get_all_countries',
  validateRequest,
  getAllCountries
)

router.post(
  '/waiting_list',
  [
    // body('first_name').notEmpty().withMessage('First Name is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('country').notEmpty().withMessage('Country is required'),
    body('comment').notEmpty().withMessage('Comment is required'),
    body('reason').notEmpty().withMessage('Reason is required'),
  ],
  validateRequest,
  waitingList

)

router.get(
  "/all_service",
  validateRequest,
  allServices
);

router.post(
  '/allServicesWithSearchKeyword',
  validateRequest,
  allServicesWithSearchKeyword
);

router.post(
  '/contact',
  [
    body("email", "Email is not valid").notEmpty().withMessage("Email is required").if(body("email").notEmpty()).isEmail(),
    // .normalizeEmail(),
    body('subject').notEmpty().withMessage('Subject is Required'),
    body('comment').notEmpty().withMessage('Comment is Required'),
    // body('like_type').notEmpty().withMessage('Like is Required')
  ],
  validateRequest,
  contact
);

router.post(
  '/getServiceWithTitle',
  [
    body("service_title").notEmpty().withMessage("Service Title is required")
  ],
  validateRequest,
  allServiceWithTitle
)


module.exports = router;

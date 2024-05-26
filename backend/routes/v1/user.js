const express = require("express");
const { body, check } = require("express-validator");
const router = express.Router();
const { getProfile } = require("../../controllers/user.js");
const { validateRequest } = require("../../middleware/validateRequest.js");
const {
  editCredentials,
  editEmail,
  editEmailVerification,
  edit_email_resend_code,
  editPassword,
  edit_nick_name,
  editProfileS1,
  editProfileS2Get,
  editProfileS2Post,
  editProfileS3Get,
  editProfileS3Post,
  editProfileS4,
  editImage,
  deleteImage,
  spokenLanguages,
  userSpokenLanguages,
  editUserSpokenLanguages,
  deleteSpokenLanguage,
  refDisplayLanguages,
  userDisplayLanguage,
  userLevel,
  userCurrency,
  changeAvailability,
  announceService,
  
  faqs,
  notifications,
  contact,
  logout,
  getDeleteReasons,
  deleteAccount,
  
} = require("../../controllers/user.js");

router.get("/profile", getProfile);

router.post(
  '/edit_credentials',
  [
    body("email", "Email is not valid").notEmpty().withMessage("Email is required").if(body("email").notEmpty()).isEmail(),
    // .normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  editCredentials
  )

router.post(
  "/edit_email",
  [
    body("new_email").notEmpty().withMessage("New Email is required")
    .if(body("new_email").notEmpty()).isEmail(),
    // .normalizeEmail(),
  ],
  validateRequest,
  editEmail
);
router.post(
  "/edit_email_verification",
  [
    body("old_email").notEmpty().withMessage("Old Email is required"),
    body("new_email").notEmpty().withMessage("New Email is required"),
    body("verification_code").notEmpty().withMessage("Verification Code is required"),
  ],
  validateRequest,
  editEmailVerification
);

router.post(
  "/edit_email_resend_code",
  [
    body("new_email").notEmpty().withMessage("New Email is required"),
  ],
  validateRequest,
  edit_email_resend_code
);

router.post(
  "/edit_password",
  [
    body("new_password").notEmpty().withMessage("Password is Required")
  ],
  validateRequest,
  editPassword
);
router.post(
  "/edit_nick_name",
  [
    body("nick_name").notEmpty().withMessage("Nick Name is Required")
  ],
  validateRequest,
  edit_nick_name
);

router.post(
  "/edit_profile_s1",
  [
    body("first_name").notEmpty().withMessage("First Name is Required"),
    body("fname_privacy").notEmpty().withMessage("Fname Privacy is Required"),
    body("last_name").notEmpty().withMessage("Last Name is Required"),
    body("lname_privacy").notEmpty().withMessage("Lname Privacy is Required"),
    body("birth_year").notEmpty().withMessage("Birth Year is Required"),
    body("birth_year_privacy").notEmpty().withMessage("Birth Year Privacy is Required"),
    body("phone").notEmpty().withMessage("Phone is Required"),
    body("phone_privacy").notEmpty().withMessage("Phone Privacy is Required"),
  ],
  validateRequest,
  editProfileS1
);
router.get("/edit_profile_s2", validateRequest, editProfileS2Get);
router.post(
  "/edit_profile_s2",
  [
    body("fk_country_id").notEmpty().withMessage("fk_country_id is Required"),
    body("country_privacy").notEmpty().withMessage("Country Privacy is Required"),
    body("fk_state_id").notEmpty().withMessage("fk state_id is Required"),
    body("state_privacy").notEmpty().withMessage("State Privacy is Required"),
    body("address").notEmpty().withMessage("Address is Required"),
    body("address_privacy").notEmpty().withMessage("Address Privacy is Required"),
    body("postal_code").notEmpty().withMessage("Postal Code is Requird"),
    body("postal_code_privacy").notEmpty().withMessage("Postal Code Privacy is Required"),
    body("fk_time_zone_id").notEmpty().withMessage("fk_time_zone_id is Required"),
    body("time_zone_privacy").notEmpty().withMessage("Time Zone Privacy is Required"),
  ],
  validateRequest,
  editProfileS2Post
);
router.get("/edit_profile_s3", validateRequest, editProfileS3Get);
router.post(
  "/edit_profile_s3",
  [
    body("fk_interest_id").notEmpty().withMessage("fk_interest_id is Required")
  ],
  validateRequest,
  editProfileS3Post
);
router.post(
  "/edit_profile_s4",
  [
    body("description").notEmpty().withMessage("Description is Required"),
    body("description_privacy").notEmpty().withMessage("Description Privacy is Required"),
  ],
  validateRequest,
  editProfileS4
);

router.post(
  "/edit_image",
  [
    body("**.avatar").notEmpty().withMessage("Image is Required")
  ],
  validateRequest,
  editImage
);

router.delete("/delete_image", validateRequest, deleteImage);

router.get("/ref_spoken_languages", validateRequest, spokenLanguages);

router.get(
  '/user_spoken_languages', 
  validateRequest,
  userSpokenLanguages
);

router.post(
  "/edit_user_spoken_language",
  [
    body("spoken_language_id").notEmpty().withMessage("Spoken Language is Required"),
  ],
  validateRequest,
  editUserSpokenLanguages
);

router.post(
  '/delete_spoken_language',
  [
    body('spoken_language_id').notEmpty().withMessage('Language is required')
  ],
  validateRequest,
  deleteSpokenLanguage
);

router.get("/ref_display_languages", validateRequest, refDisplayLanguages);

router.post("/user_display_language", validateRequest, userDisplayLanguage);

router.get("/user_currency", validateRequest, userCurrency);
router.get("/user_level", validateRequest, userLevel);

router.post(
  "/change_availability",
  [
    body("fk_helper_availability_id").notEmpty().withMessage("fk_helper_availability is Required"),
  ],
  validateRequest,
  changeAvailability
);



router.get("/announce_service", validateRequest, announceService);




router.get( 
  '/faqs', 
  validateRequest, 
  faqs 
)

router.get(
  '/notifications',
  [
    body('show_all').notEmpty().withMessage('Show all is Required')
  ],
  validateRequest,
  notifications
)

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
)

router.get(
  '/logout',
  logout
)

router.get(
  '/get_delete_reasons',
  getDeleteReasons
)

router.post(
  '/delete_account',
  [
    body('fk_account_action_reason_id').notEmpty().withMessage('Reason is Required')
  ],
  validateRequest,
  deleteAccount

)

module.exports = router;
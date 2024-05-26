const express = require("express");
const router = express.Router();
const {
    updateProfileStep1,
    updateProfileStep2,
    updateProfileStep3,
    updateProfileStep4,
    updateProfileStep5,
    updateProfilePic,
    getCountries,
    getStates,
    getTimeZones,
    getInterests,
    updateAvailability,
    deleteProfileImage
} = require("../../controllers/profile.js");
const { validateRequest } = require("../../middleware/validateRequest.js");
const { body } = require("express-validator");

router.post(
  "/update-profile-step1",
  [
    body("first_name").notEmpty().withMessage("First Name is required"),
    body("last_name").notEmpty().withMessage("Last Name is required"),
    body("birth_year").notEmpty().withMessage("Birth Year is required"),
    body("gender").notEmpty().withMessage("Gender is required"),
    // body("country_code").notEmpty().withMessage("Country Code Year is required"),
    // body("phone").notEmpty().withMessage("Phone Number is required"),
  ],
  validateRequest,
  updateProfileStep1
);

router.post(
  "/update-profile-step2",
  [
    body("country_id").notEmpty().withMessage("Country is required"),
    body("state_id").notEmpty().withMessage("State is required"),
    // body("address").notEmpty().withMessage("Address is required"),
    // body("postal_code").notEmpty().withMessage("Postal Code is required"),
    body("time_zone_id").notEmpty().withMessage("Time Zone is required"),
  ],
  validateRequest,
  updateProfileStep2
);

router.post(
  "/update-profile-step3",
  // [
  //   body("user_interests").notEmpty().withMessage("Country is required"),
  // ],
  validateRequest,
  updateProfileStep3
);

router.post(
  "/update-profile-step4",
  // [
  //   body("description").notEmpty().withMessage("Description is required"),
  // ],
  validateRequest,
  updateProfileStep4
);

router.post(
  "/update-profile-step5",
  [
    body("avatar").notEmpty().withMessage("Image is required"),
  ],
  validateRequest,
  updateProfileStep5
);

// router.post(
//   "/update-profile-pic",
//   validateRequest,
//   updateProfilePic
// );

router.get(
  "/get-countries",
  validateRequest,
  getCountries
);

router.get(
  "/get-states",
  validateRequest,
  getStates
);

router.get(
  "/get-time-zones",
  validateRequest,
  getTimeZones
);

router.get(
  "/get-interests",
  validateRequest,
  getInterests
);

router.post(
  "/update-availability",
  [body("status").notEmpty().withMessage("Status is required")],
  validateRequest,
  updateAvailability
);


router.post(
  '/delete_profile_image',
  validateRequest,
  deleteProfileImage
)

module.exports = router;

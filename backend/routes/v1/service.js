const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { validateRequest } = require("../../middleware/validateRequest.js");
var multer  = require('multer');
const {
  getInterests,
  getRefVideoPreferences,
  announceService,
  myServices,
  deleteService,
  allServices,
  getService,
  allServiceWithTitle,
  advancedSearchGet,
  advancedSearchPost,
  allServicesWithSearchKeyword,
  saveReview,
  clickShareService
} = require("../../controllers/service.js");

router.get(
    "/get-interests",
    validateRequest,
    getInterests
);

router.get(
  "/video-preference",
  validateRequest,
  getRefVideoPreferences
);


router.post(
  "/announce_service",
  [
    body("title").notEmpty().withMessage("Title is Required"),
    body("fk_interest_id").notEmpty().withMessage("Category is Required"),
    body("description").notEmpty().withMessage("Description is Required"),
    body("rate").notEmpty().withMessage("Rate is Required"),
    body("fk_video_preference_id").notEmpty().withMessage("Video Prefernece is Required"),
    // body("updatedImagePaths").notEmpty().withMessage("Image is required"),
  ],
  validateRequest,
  announceService
);

router.get("/my_services", validateRequest, myServices);

router.post(
  "/delete_service",
  [
    body("service_id").notEmpty().withMessage("Srevice Id is Required")
  ],
  validateRequest,
  deleteService
);

router.get(
  "/all_service",
  validateRequest,
  allServices
);

router.post(
  '/get_Service',
  [
    body("service_id").notEmpty().withMessage("Service Id is required")
  ],
  validateRequest,
  getService
)

router.post(
  '/getServiceWithTitle',
  [
    body("service_title").notEmpty().withMessage("Service Title is required")
  ],
  validateRequest,
  allServiceWithTitle
)

router.get(
  '/advanced_search',
  validateRequest,
  advancedSearchGet
)

router.post(
  '/advanced_search',
  validateRequest,
  advancedSearchPost,
)

router.post(
  '/allServicesWithSearchKeyword',
  validateRequest,
  allServicesWithSearchKeyword

)

router.post(
  '/save-review',
  validateRequest,
  saveReview
)

router.get(
  '/click-share-Service',
  validateRequest,
  clickShareService
)

module.exports = router;
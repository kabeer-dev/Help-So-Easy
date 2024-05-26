const express = require("express");
const { validateRequest } = require("../../middleware/validateRequest.js");
const { body } = require("express-validator");
const router = express.Router();
const {
  getSmtp,
  saveSmtp,
  getStripe,
  saveStripe,
  getWebRtc,
  saveWebRtc,
  fetchAndSaveTwilioServers,
  getGeneralSettingsContent,
  saveGeneralSettingsContent,
  allServices,
  faqs,
  addFaq,
  DeleteFaq,
  EditFaq,
  Categories,
  AddFaqCategory,
  EditCategory,
  DeleteCategory,
  getEmailContents,
  updateEmailContent,
  getAllUsers,
  updateUserId
} = require("../../controllers/admin.js");

router.get("/get-smtp", getSmtp);
router.post("/save-smtp", saveSmtp);
router.get("/get-stripe", getStripe);
router.post("/save-stripe", saveStripe);
router.get("/get-web-rtc", getWebRtc);
router.post("/save-web-rtc", saveWebRtc);
router.get("/fetch-and-save-twilio-servers", fetchAndSaveTwilioServers);
router.get("/get-general-settings-content", getGeneralSettingsContent);
router.post("/save-general-settings-content", saveGeneralSettingsContent);

//services
router.get("/all_service", allServices);

module.exports = router;

//faqs

router.get(
  "/faqs",

  faqs
);

router.post(
  "/add_faq",
  [
    body("fk_faq_category_id").notEmpty().withMessage("Category is required"),
    body("question").notEmpty().withMessage("Question is required"),
    body("answer").notEmpty().withMessage("Answer is required"),
  ],
  validateRequest,
  addFaq
);

router.post(
  "/delete_faq",
  [body("faqId").notEmpty().withMessage("Faq Id is required")],
  validateRequest,
  DeleteFaq
);

router.post(
  "/edit_faq",
  [body("editFaqId").notEmpty().withMessage("Faq Id is required")],
  validateRequest,
  EditFaq
);

router.get("/Categories", validateRequest, Categories);

router.post(
  "/Add_faq_category",
  [body("name").notEmpty().withMessage("Category is required")],
  validateRequest,
  AddFaqCategory
);

router.post(
    '/edit_category',
    [
        body("categoryId").notEmpty().withMessage("Category Id is required"),
    ],
    validateRequest,
    EditCategory
)

router.post(
    '/delete_Category',
    [
        body("categoryId").notEmpty().withMessage("Category Id is required"),
    ],
    validateRequest,
    DeleteCategory
);

router.get(
    '/email_contents',
    validateRequest,
    getEmailContents
)



router.post(
    '/update_email_content',
    [
        body("id").notEmpty().withMessage("Id is required"),
        body("subject").notEmpty().withMessage("Subject is required"),
        body("content").notEmpty().withMessage("Content is required"),
    ],
    validateRequest,
    updateEmailContent
)

router.get(
  '/all_users',
  validateRequest,
  getAllUsers
)

router.post(
  '/update_user_id',
  validateRequest,
  updateUserId
)


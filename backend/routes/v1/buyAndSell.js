const express = require("express");
const router = express.Router();
const { getHistory, buyerHistory, helperHistory } = require("../../controllers/buyAndSell.js");
const { validateRequest } = require("../../middleware/validateRequest.js");

router.get("/get-history", validateRequest, getHistory);
router.get("/buyer-history", validateRequest, buyerHistory);
router.get("/helper-history", validateRequest, helperHistory);

module.exports = router;

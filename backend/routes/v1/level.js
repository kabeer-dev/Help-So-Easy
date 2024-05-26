const express = require("express");
const router = express.Router();
const { getLevels } = require("../../controllers/level.js");
const { validateRequest } = require("../../middleware/validateRequest.js");

router.get("/get-levels", validateRequest, getLevels);

module.exports = router;

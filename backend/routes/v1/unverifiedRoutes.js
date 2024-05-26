const express = require("express");
const router = express.Router();
const { updateStripeConnectAccount } = require("../../controllers/payment.js");

router.get("/payment-methods/receiving/update-stripe-connect-account/:paymentMethodId", updateStripeConnectAccount);

module.exports = router;

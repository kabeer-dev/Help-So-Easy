const express = require("express");
const router = express.Router();
const {
  deleteCard,
  getAllCards,
  getDefaultCard,
  getAllAccounts,
  addCard,
  authorizePayment,
  addStripeConnectAccount,
  deleteAccount,
  setDefaultPaymentMethod
} = require("../../controllers/payment.js");
const { validateRequest } = require("../../middleware/validateRequest.js");
const { body } = require("express-validator");

router.get("/get-all-cards", getAllCards);
router.get("/get-default-card", getDefaultCard);
router.get("/receiving/get-all-accounts", getAllAccounts);

router.delete(
  "/delete-card",
  [
    body("paymentMethodId", "Payment method id is required").notEmpty(),
  ],
  validateRequest,
  deleteCard
);

router.post(
  "/add-card",
  [
    body("tokenId", "Token id is required").notEmpty(),
  ],
  validateRequest,
  addCard
);

router.post(
  "/receiving/add-stripe-connect-account",
  [
    body("returnUrl", "Return url is required").notEmpty(),
  ],
  validateRequest,
  addStripeConnectAccount
);

router.delete(
  "/receiving/delete-account",
  [
    body("paymentMethodId", "Payment method id is required").notEmpty(),
  ],
  validateRequest,
  deleteAccount
);

router.post(
  "/set-default-payment-method",
  [
    body("paymentMethodId", "Payment method id is required").notEmpty(),
  ],
  validateRequest,
  setDefaultPaymentMethod
);

router.post(
  "/authorize",
  [
    body("callPrice", "Call price is required").notEmpty(),
    body("callPricePerMinute", "Call price per minute is required").notEmpty(),
    body("helperId", "Helper id is required").notEmpty(),
  ],
  validateRequest,
  authorizePayment
);


module.exports = router;
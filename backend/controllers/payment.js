const { Call, PaymentMethod, User, StripePlugin, EmailContent } = require("../models");
const { handleError, handleResponse } = require("../utils/responses.js");
const url = require("url");
const sendMail = require("../mail/sendMail");
// const stripeCredentials = await StripePlugin.findOne();
// const stripe = require("stripe")(
//   stripeCredentials.active_keys === "test"
//     ? stripeCredentials.test_secret_key
//     : stripeCredentials.live_secret_key
// );
let stripe;
(async () => {
  try {
    const stripeCredentials = await StripePlugin.findOne();
    stripe = require("stripe")(
      stripeCredentials.activeKeys === "test"
        ? stripeCredentials.testSecretKey
        : stripeCredentials.liveSecretKey
    );

    // Your controller functions using `stripe` can go here
  } catch (error) {
    console.error("Error during initialization:", error);
  }
})();

exports.deleteCard = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(
      req.body.paymentMethodId
    );

    const userId = paymentMethod.fk_user_id;

    // paymentMethod.destroy();
    paymentMethod.update({ status_cd: 1 });

    try {
      await stripe.customers.deleteSource(
        req.user.stripe_customer_id,
        paymentMethod.stripe_card_id
      );
    } catch (error) {
      //
    }

    const customer = await stripe.customers.retrieve(
      req.user.stripe_customer_id
    );

    await PaymentMethod.update(
      { is_default: 0 },
      { where: { fk_user_id: userId, type_send_receive_nm: "send" } }
    );
    await PaymentMethod.update(
      { is_default: 1 },
      {
        where: {
          stripe_card_id: customer.default_source,
        },
      }
    );

    EmailContent.findOne({
      where: {slug: '15_75_delete_sending_method'}
    }).then((email_content) => {
      const mainContent = email_content.content_longtext;
      const subject = email_content.subject;
      const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
      const bcc = email_content.bcc;
      sendMail(req.user.email, subject, content, bcc);
    })

    const payment_methods = await PaymentMethod.findAll({
      where: {
        fk_user_id: req.user.id,
        type_send_receive_nm: "send",
        status_cd: 0
      },
    });

    handleResponse(res, payment_methods, 200, "Card deleted successfully");
  } catch (error) {
    handleError(res, error);
  }
};

exports.getAllCards = async (req, res) => {
  try {
    const cards = await PaymentMethod.findAll({
      where: {
        fk_user_id: req.user.id,
        type_send_receive_nm: "send",
        status_cd: 0
      },
    });

    handleResponse(res, cards);
  } catch (error) {
    handleError(res, error);
  }
};

exports.getDefaultCard = async (req, res) => {
  try {
    const card = await PaymentMethod.findOne({
      where: {
        fk_user_id: req.user.id,
        type_send_receive_nm: "send",
        is_default: 1,
      },
    });

    handleResponse(res, card);
  } catch (error) {
    handleError(res, error);
  }
};

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await PaymentMethod.findAll({
      where: {
        fk_user_id: req.user.id,
        type_send_receive_nm: "receive",
        status_cd: 0
      },
    });

    handleResponse(res, accounts);
  } catch (error) {
    handleError(res, error);
  }
};

const generateUniqueString = () => {
  const prefix = 'hse';
  const randomNumber1 = Math.floor(Math.random() * 1000); // Generates a random number between 0 and 999
  const randomNumber2 = Math.floor(Math.random() * 1000); // Another random number between 0 and 999
  const randomNumber3 = Math.floor(Math.random() * 1000); // Another random number between 0 and 999
  const uniqueString = `${prefix}-${randomNumber1.toString().padStart(3, '0')}-${randomNumber2.toString().padStart(3, '0')}-${randomNumber3.toString().padStart(3, '0')}`;
  return uniqueString;
}

exports.addCard = async (req, res) => {
  try {
    const stripeResponse = await stripe.customers.createSource(
      req.user.stripe_customer_id,
      {
        source: req.body.tokenId,
      }
    );

    const customer = await stripe.customers.retrieve(
      req.user.stripe_customer_id
    );

    PaymentMethod.create({
      fk_user_id: req.user.id,
      is_default: customer.default_source === stripeResponse.id ? 1 : 0,
      type_send_receive_nm: "send",
      payment_gateway_nm: "stripe",
      payment_method_type_nm: stripeResponse.funding + "_card",
      stripe_card_response: JSON.stringify(stripeResponse),
      fingerprint: stripeResponse.fingerprint,
      stripe_card_id: stripeResponse.id,
      stripe_card_brand: stripeResponse.brand,
      stripe_card_country: stripeResponse.country,
      stripe_card_exp_month: stripeResponse.exp_month,
      stripe_card_exp_year: stripeResponse.exp_year,
      stripe_card_funding: stripeResponse.funding,
      stripe_card_last4: stripeResponse.last4,
      stripe_card_name: stripeResponse.name,
    })
      .then(async(card) => {

        const sameCards = await PaymentMethod.count({
          where: {
            type_send_receive_nm: 'send',
            fingerprint: card.fingerprint
          }
        });

        const sameBuyerCard = await PaymentMethod.count({
          where: {
            type_send_receive_nm: 'send',
            fingerprint: card.fingerprint,
            fk_user_id: req.user.id
          }
        });

        if(sameCards > 10 || sameBuyerCard > 1) {
          try {
            await stripe.customers.deleteSource(
              req.user.stripe_customer_id,
              card.stripe_card_id
            );
          } catch (error) {
            //
          }
          await card.destroy();
          res.status(201).json({message: 'This card already exists in our system. Please use a different card.'});
        }
        else {
          if(req.user.user_id === null || req.user.user_id === '') {
            const userId = generateUniqueString();
            console.log('unique user id:', userId);
            await req.user.update({
              user_id: userId
            });
          }
  
          EmailContent.findOne({
            where: {slug: '15_72_add_sending_method'}
          }).then((email_content) => {
            const mainContent = email_content.content_longtext;
            const subject = email_content.subject;
            const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
            const bcc = email_content.bcc;
            sendMail(req.user.email, subject, content, bcc);
          })
          handleResponse(res, card);
        }
        
      })
      .catch((err) => {
        handleError(res, err);
      });
  } catch (error) {
    handleError(res, error);
  }
};

exports.addStripeConnectAccount = async (req, res) => {
  try {
    const existingPaymentMethod = await PaymentMethod.findOne({
      where: {
        fk_user_id: req.user.id,
        is_default: 1,
        type_send_receive_nm: "receive",
      },
    });

    if (existingPaymentMethod)
      throw "Only one receiving account is allowed at a time. In order to add another, delete the first one.";

    const account = await stripe.accounts.create({
      type: "express",
      country: "US",
      capabilities: {
        transfers: { requested: true },
      },
    });

    const paymentMethod = await PaymentMethod.create({
      fk_user_id: req.user.id,
      is_default: account.payouts_enabled ? 1 : 0,
      type_send_receive_nm: "receive",
      payment_gateway_nm: "stripe",
      payment_method_type_nm: "bank_account",
      stripe_connect_account_response: JSON.stringify(account),
      stripe_connect_account_id: account.id,
      stripe_connect_account_status: account.payouts_enabled
        ? "active"
        : "inactive",
    });

    // // Update the user's data in the User table with the Stripe Connect account ID
    // if(account.payouts_enabled) {
    //   await User.update(
    //     {
    //       stripe_connect_account_id: account.id,
    //     },
    //     {
    //       where: {
    //         id: req.user.id,
    //       }
    //     }
    //   );
    // }

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "https://example.com/reauth",
      return_url: `${req.body.returnUrl}/${paymentMethod.id}`,
      type: "account_onboarding",
    });

    handleResponse(res, { accountLink: accountLink.url });
  } catch (error) {
    handleError(res, error);
  }
};

exports.updateStripeConnectAccount = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(
      req.params.paymentMethodId
    );

    if (!paymentMethod) return handleError(res, "Payment method not found");

    const account = await stripe.accounts.retrieve(
      paymentMethod.stripe_connect_account_id
    );

    if (!account) return handleError(res, "Stripe connect account not found");

    paymentMethod.stripe_connect_account_response = JSON.stringify(account);
    paymentMethod.fingerprint = account.external_accounts.data[0].fingerprint;
    paymentMethod.stripe_bank_last4 = account.external_accounts.data[0].last4;
    paymentMethod.payment_method_type_nm = account.external_accounts.data[0].object == 'card' ? 'debit_card' : account.external_accounts.data[0].object;
    paymentMethod.stripe_connect_account_status = account.payouts_enabled
      ? "active"
      : "inactive";
    paymentMethod.is_default = account.payouts_enabled ? 1 : 0;
    await paymentMethod.save();

    const sameAccounts = await PaymentMethod.count({
      where: {
        type_send_receive_nm: 'receive',
        fingerprint: paymentMethod.fingerprint
      }
    });

    if(sameAccounts > 10) {
      try {
        await stripe.accounts.del(paymentMethod.stripe_connect_account_id);
      } catch (error) {
        //
      }
      await paymentMethod.destroy();
      res.status(201).json({message: 'An account with similar details already exists in our system. Please try again later.'});
    }
    else {
      // Update the user's data in the User table with the Stripe Connect account ID
      if (account.payouts_enabled) {
        const user = await User.findByPk(paymentMethod.fk_user_id);
        await user.update(
          {
            stripe_connect_account_id: account.id,
          }
        )

        EmailContent.findOne({
          where: {slug: '15_72_add_receiving_method'}
        }).then((email_content) => {
          const mainContent = email_content.content_longtext;
          const subject = email_content.subject;
          const content = mainContent.replace('["username"]', user.first_name ? user.first_name : 'User' )
          const bcc = email_content.bcc;
          sendMail(user.email, subject, content, bcc);
        })

      }
      handleResponse(res);
    }

  } catch (error) {
    handleError(res, error);
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(
      req.body.paymentMethodId
    );

    const user_id = paymentMethod.fk_user_id;

    // paymentMethod.destroy();
    paymentMethod.update({ status_cd: 1, is_default: 0 });

    try {
      await stripe.accounts.del(paymentMethod.stripe_connect_account_id);
    } catch (error) {
      //
    }

    await User.update(
      {
        stripe_connect_account_id: null,
      },
      {
        where: {
          id: user_id,
        },
      }
    );

    EmailContent.findOne({
      where: {slug: '14_70_delete_receiving_method'}
    }).then((email_content) => {
      const mainContent = email_content.content_longtext;
      const subject = email_content.subject;
      const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
      const bcc = email_content.bcc;
      sendMail(req.user.email, subject, content, bcc);
    })

    handleResponse(res, null, 200, "Account deleted successfully");
  } catch (error) {
    handleError(res, error);
  }
};

exports.setDefaultPaymentMethod = async (req, res) => {
  try {
    const payment_method_id = req.body.paymentMethodId;
    const payment_method = await PaymentMethod.findByPk(payment_method_id);

    const user_id = payment_method.fk_user_id;

    await PaymentMethod.update(
      { is_default: 0 },
      {
        where: {
          fk_user_id: user_id,
          type_send_receive_nm: "send",
        },
      }
    );

    await payment_method.update({ is_default: 1 });

    const payment_methods = await PaymentMethod.findAll({
      where: {
        fk_user_id: user_id,
        type_send_receive_nm: "send",
      },
    });

    handleResponse(
      res,
      payment_methods,
      200,
      "Default payment method has been set successfully"
    );
  } catch (error) {
    handleError(res, error);
  }
};

exports.authorizePayment = async (req, res) => {
  try {
    let paymentIntent = null;
    const buyerPaymentMethod = await PaymentMethod.findOne({
      where: {
        fk_user_id: req.user.id,
        is_default: 1,
        type_send_receive_nm: "send",
      },
    });

    if (!buyerPaymentMethod) throw "Please add sending payment method";

    const helperPaymentMethod = await PaymentMethod.findOne({
      where: {
        fk_user_id: req.body.helperId,
        is_default: 1,
        type_send_receive_nm: "receive",
      },
    });

    if (!helperPaymentMethod)
      throw "Helper does not have a receiving payment method";

    const helperStripeConnectAccount = await stripe.accounts.retrieve(
      helperPaymentMethod.stripe_connect_account_id
    );

    if (!helperStripeConnectAccount.payouts_enabled)
      throw "Helper's receiving account is not active";

    const amountInCents = req.body.callPrice * 100;
    paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents.toFixed(),
      currency: "usd",
      payment_method_types: ["card"],
      capture_method: "manual",
      customer: req.user.stripe_customer_id,
      payment_method: buyerPaymentMethod.stripe_card_id,
    });

    Call.create({
      rate: req.body.callPricePerMinute,
      fk_buyer_id: req.user.id,
      fk_helper_id: req.body.helperId,
      fk_service_id: req.body.serviceId,
      fk_buyer_payment_method_id: buyerPaymentMethod.id,
      intent_id: paymentIntent.id,
      intent_hold: req.body.callPrice,
      // intent_helper_receive: ((req.body.callPrice - 0.8033) / 1.2667).toFixed(2), // Using help so easy formula: equation # 7: Y = W * 1.2667 + 0.8033
      intent_helper_receive: req.body.helperPrice.toFixed(2),
      intent_start: paymentIntent.created * 1000,
      intent_status: paymentIntent.status,
      intent_response: JSON.stringify(paymentIntent),
    })
      .then((call) => {
        handleResponse(res, call);
      })
      .catch((err) => {
        handleError(res, err);
      });
  } catch (error) {
    handleError(res, error);
  }
};
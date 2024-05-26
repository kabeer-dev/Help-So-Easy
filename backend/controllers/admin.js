const { UserBindingInstance } = require("twilio/lib/rest/chat/v2/service/user/userBinding.js");
const {
  SmtpPlugin,
  StripePlugin,
  WebRtcPlugin,
  Service,
  User,
  ServiceImage,
  RefInterest,
  RefFaqCategory,
  Faq,
  Setting,
  EmailContent,
  RefCountry
} = require("../models");
const { handleError, handleResponse } = require("../utils/responses.js");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const { Op } = require("sequelize");

// Fetch SMTP
exports.getSmtp = async (req, res) => {
  try {
    const smtp = await SmtpPlugin.findOne({
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order to get the latest one
    });

    // Respond with the created instance
    res.status(201).send({ smtp: smtp });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// Save SMTP
exports.saveSmtp = async (req, res) => {
  try {
    // Get the saved SMTP plugin
    const savedSmtpPlugin = await SmtpPlugin.findOne({
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order to get the latest one
    });

    const { smtpHost, port, smtpProtocol, security, smtpUser, emailFrom } =
      req.body;

    if (savedSmtpPlugin) {
      // Update SMTP plugin
      await savedSmtpPlugin.update({
        smtpHost,
        port,
        smtpProtocol,
        security,
        smtpUser,
        emailFrom,
      });
    } else {
      // Create a new SMTP plugin
      await SmtpPlugin.create({
        smtpHost,
        port,
        smtpProtocol,
        security,
        smtpUser,
        emailFrom,
      });
    }

    // Respond with the created instance
    res.status(201).send("SMTP credentials saved successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
    // res.status(500).send("Error: " + error);
  }
};

// Fetch Stripe
exports.getStripe = async (req, res) => {
  try {
    const stripe = await StripePlugin.findOne({
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order to get the latest one
    });

    // Respond with the created instance
    res.status(201).send({ stripe: stripe });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// Save Stripe
exports.saveStripe = async (req, res) => {
  try {
    // Get the saved stripe plugin
    const savedStripePlugin = await StripePlugin.findOne({
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order to get the latest one
    });

    const {
      activeKeys,
      testPublicKey,
      testSecretKey,
      livePublicKey,
      liveSecretKey,
    } = req.body;

    if (savedStripePlugin) {
      // Update stripe plugin
      await savedStripePlugin.update({
        activeKeys,
        testPublicKey,
        testSecretKey,
        livePublicKey,
        liveSecretKey,
      });
    } else {
      // Create a new stripe plugin
      await StripePlugin.create({
        activeKeys,
        testPublicKey,
        testSecretKey,
        livePublicKey,
        liveSecretKey,
      });
    }

    // Respond with the created instance
    res.status(201).send("Stripe credentials saved successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
    // res.status(500).send("Error: " + error);
  }
};

// Fetch Web RTC
exports.getWebRtc = async (req, res) => {
  try {
    // Express Server
    const expressServer = await WebRtcPlugin.findOne({
      where: {
        server: "express",
      },
    });

    // Twilio Server
    const twilioServer = await WebRtcPlugin.findOne({
      where: {
        server: "twilio",
      },
    });

    // Xirsys Server
    const xirsysServer = await WebRtcPlugin.findOne({
      where: {
        server: "xirsys",
      },
    });

    const activeServer = await WebRtcPlugin.findOne({
      where: {
        is_active: 1,
      },
    });

    // Respond with the created instance
    res.status(201).send({
      expressServer: expressServer,
      twilioServer: twilioServer,
      xirsysServer: xirsysServer,
      activeServer: activeServer.server,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

// Save Web RTC
exports.saveWebRtc = async (req, res) => {
  try {
    // Express Server
    const expressServer = await WebRtcPlugin.findOne({
      where: {
        server: "express",
      },
    });

    // Twilio Server
    const twilioServer = await WebRtcPlugin.findOne({
      where: {
        server: "twilio",
      },
    });

    // Xirsys Server
    const xirsysServer = await WebRtcPlugin.findOne({
      where: {
        server: "xirsys",
      },
    });

    const {
      activeServer,
      expressStun,
      expressUsername,
      expressPassword,
      expressTurn1,
      expressTurn2,
      expressTurn3,
      expressTurn4,
      expressTurn5,
      expressTurn6,
      twilioStun,
      twilioUsername,
      twilioPassword,
      twilioTurn1,
      twilioTurn2,
      twilioTurn3,
      twilioTurn4,
      twilioTurn5,
      twilioTurn6,
      xirsysStun,
      xirsysUsername,
      xirsysPassword,
      xirsysTurn1,
      xirsysTurn2,
      xirsysTurn3,
      xirsysTurn4,
      xirsysTurn5,
      xirsysTurn6,
    } = req.body;

    console.log("active server", activeServer);

    // Update Express Server
    await expressServer.update({
      isActive: activeServer === "express" ? 1 : 0,
      stunUrl: expressStun,
      username: expressUsername,
      password: expressPassword,
      turnUrl1: expressTurn1,
      turnUrl2: expressTurn2,
      turnUrl3: expressTurn3,
      turnUrl4: expressTurn4,
      turnUrl5: expressTurn5,
      turnUrl6: expressTurn6,
    });

    // Update Twilio Server
    await twilioServer.update({
      isActive: activeServer === "twilio" ? 1 : 0,
      stunUrl: twilioStun,
      username: twilioUsername,
      password: twilioPassword,
      turnUrl1: twilioTurn1,
      turnUrl2: twilioTurn2,
      turnUrl3: twilioTurn3,
      turnUrl4: twilioTurn4,
      turnUrl5: twilioTurn5,
      turnUrl6: twilioTurn6,
    });

    // Update Xirsys Server
    await xirsysServer.update({
      isActive: activeServer === "xirsys" ? 1 : 0,
      stunUrl: xirsysStun,
      username: xirsysUsername,
      password: xirsysPassword,
      turnUrl1: xirsysTurn1,
      turnUrl2: xirsysTurn2,
      turnUrl3: xirsysTurn3,
      turnUrl4: xirsysTurn4,
      turnUrl5: xirsysTurn5,
      turnUrl6: xirsysTurn6,
    });

    // Respond with the created instance
    res.status(201).send("Web RTC credentials saved successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
    // res.status(500).send("Error: " + error);
  }
};

exports.saveTwilioServer = async (
  stunUrl,
  username,
  password,
  turnUrl1,
  turnUrl2,
  turnUrl3,
  turnUrl4 = null,
  turnUrl5 = null,
  turnUrl6 = null
) => {
  await WebRtcPlugin.update(
    {
      stunUrl: stunUrl,
      username: username,
      password: password,
      turnUrl1: turnUrl1,
      turnUrl2: turnUrl2,
      turnUrl3: turnUrl3,
      turnUrl4: turnUrl4,
      turnUrl5: turnUrl5,
      turnUrl6: turnUrl6,
    },
    {
      where: {
        server: "twilio",
      },
    }
  );
};

exports.fetchAndSaveTwilioServers = async (req, res) => {
  try {
    const token = await client.tokens.create();
    const iceServers = token.iceServers;
    const stunUrl = iceServers[0].url;
    const username = iceServers[1].username;
    const password = iceServers[1].credential;
    const turnUrl1 = iceServers[1].url;
    const turnUrl2 = iceServers[2].url;
    const turnUrl3 = iceServers[3].url;
    await WebRtcPlugin.update(
      {
        stunUrl: stunUrl,
        username: username,
        password: password,
        turnUrl1: turnUrl1,
        turnUrl2: turnUrl2,
        turnUrl3: turnUrl3,
      },
      {
        where: {
          server: "twilio",
        },
      }
    );
    res.status(201).send("Twilio Servers Updated Successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

exports.getGeneralSettingsContent = async (req, res) => {
  const keys = [
    "1_1_customer_content",
    "1_1_helper_content",
    "7_43_content",
    "7_55_content",
    "11_61_title",
    "11_61_content",
    "12_62_content",
    "24_111_title_1",
    "24_111_title_2",
    "24_111_title_3",
    "24_111_title_4",
    "24_111_title_5",
    "24_111_title_6",
    "24_111_title_7",
    "24_111_title_8",
  ];
  try {
    const settingsContent = await Setting.findAll({
      where: {
        key: {
          [Op.in]: keys,
        },
      },
    });
    const data = settingsContent.reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

exports.saveGeneralSettingsContent = async (req, res) => {
  try {
    const formData = req.body;

    // Assuming `GeneralSettings` is your Sequelize model for the table
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];

        // Update or create a row in the database
        await Setting.upsert({
          key,
          value,
        });
      }
    }
    res.status(201).send("General settings have been updated successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

//services
exports.allServices = (req, res) => {
  Service.findAll({
    include: [
      {
        model: User,
      },
      {
        model: ServiceImage,
      },
      {
        model: RefInterest,
        attributes: ["name"],
      },
    ],
  }).then((all_services) => {
    handleResponse(res, { all_services: all_services });
  });
};

//faqs

exports.faqs = (req, res) => {
  Faq.findAll({
    include: [
      {
        model: RefFaqCategory,
        // required: false,   //require:false gives the categories that even have no queation and answer
        attributes: ["name"],
      },
    ],
  }).then((ref_faq_categories) => {
    RefFaqCategory.findAll().then((ref_categories) => {
      handleResponse(res, {
        ref_faq_categories: ref_faq_categories,
        ref_categories: ref_categories,
      });
    });
  });
};

exports.addFaq = (req, res) => {
  const body = req.body;
  if (body.id !== "") {
    Faq.update(
      {
        fk_faq_category_id: body.fk_faq_category_id,
        question: body.question,
        answer: body.answer,
      },
      {
        where: { id: body.id },
      }
    ).then(handleResponse(res, { message: "Faq Update Successfully" }));
  } else {
    Faq.create({
      fk_faq_category_id: body.fk_faq_category_id,
      question: body.question,
      answer: body.answer,
    }).then(handleResponse(res, { message: "Faq Add Successfully" }));
  }
};

exports.DeleteFaq = (req, res) => {
  const body = req.body;
  Faq.destroy({
    where: { id: body.faqId },
  }).then(handleResponse(res, { message: "Faq Delete Successfully" }));
};

exports.EditFaq = (req, res) => {
  const body = req.body;
  Faq.findOne({
    where: { id: body.editFaqId },
  }).then((edit_faq) => {
    handleResponse(res, { editFaq: edit_faq });
  });
};

exports.Categories = (req, res) => {
  RefFaqCategory.findAll().then((ref_categories) => {
    handleResponse(res, { ref_categories: ref_categories });
  });
};

exports.AddFaqCategory = (req, res) => {
  const body = req.body;

  if (body.id !== "" && body.id !== undefined) {
    console.log(body.id);
    RefFaqCategory.update(
      {
        name: body.name,
      },
      {
        where: { id: body.id },
      }
    ).then(handleResponse(res, { message: "Category Update Successfully" }));
  } else {
    RefFaqCategory.create({
      name: body.name,
    }).then(handleResponse(res, { message: "Category Add Successfully" }));
  }
};

exports.EditCategory = (req, res) => {
  const body = req.body;
  RefFaqCategory.findOne({
    where: { id: body.categoryId },
  }).then((edit_category) => {
    handleResponse(res, {edit_category: edit_category})
  })
}

exports.DeleteCategory = (req, res) => {
  const body = req.body;
  RefFaqCategory.destroy({
    where: {id: body.categoryId}
  }).then(handleResponse(res, {message: 'Category Delete Successfully'}))
}


exports.getEmailContents = (req, res) => {
  EmailContent.findAll().then((email_contents) => {
    handleResponse(res, {email_contents: email_contents})
  })
}

exports.updateEmailContent = (req, res) => {
  const body = req.body;
  EmailContent.update({
    subject : body.subject,
    content_longtext : body.content,
    bcc : body.bcc
  },
  {
    where: {id: body.id}
  }).then(
    EmailContent.findOne({
      where: {id: body.id}
    }).then((email_content) => {
      handleResponse(res, {email_content: email_content})
    })
  )
}

exports.getAllUsers = (req, res) => {
  User.findAll({
    where: {is_admin: 0}, include: [{ model: RefCountry, attributes: ['name'] }]
  }).then((users) => {
    handleResponse(res, {users: users})
  })
}

exports.updateUserId = (req, res) => {
  const body = req.body;
  User.update({
    user_id: body.user_id
  },{
    where: {id: body.id}
  }).then(() => {
    handleResponse(res, {message: 'User Updated'})
  })
}



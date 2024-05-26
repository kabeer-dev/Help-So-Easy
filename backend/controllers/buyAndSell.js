const { PaymentMethod, Call, Service, User } = require("../models");
const url = require("url");
const { sequelize } = require("../models/index");
const { Op } = require("sequelize");

// Levels
exports.getHistory = async (req, res) => {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // January is 0 in JavaScript
    const lastMonth = (currentMonth - 1 + 12) % 12 || 12;

    const totalSpendings = await Call.findAll({
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("intent_captured")),
          "totalSpendings",
        ],
      ],
      where: {
        fk_buyer_id: req.user.id,
        intent_status: "succeeded",
      },
      raw: true,
    });
    const totalSpendingsValue = totalSpendings[0].totalSpendings || 0;

    const totalEarnings = await Call.findAll({
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("trans_helper_receive")),
          "totalEarnings",
        ],
      ],
      where: {
        fk_helper_id: req.user.id,
        intent_status: "succeeded",
      },
      raw: true,
    });
    const totalEarningsValue = totalEarnings[0].totalEarnings || 0;

    const currentMonthSpendings = await Call.findAll({
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("intent_captured")),
          "currentMonthSpendings",
        ],
      ],
      where: {
        fk_buyer_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            currentMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
      raw: true,
    });
    const currentMonthSpendingsValue =
      currentMonthSpendings[0].currentMonthSpendings || 0;

    const lastMonthSpendings = await Call.findAll({
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("intent_captured")),
          "lastMonthSpendings",
        ],
      ],
      where: {
        fk_buyer_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            lastMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
      raw: true,
    });
    const lastMonthSpendingsValue =
      lastMonthSpendings[0].lastMonthSpendings || 0;

    const currentMonthEarnings = await Call.findAll({
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("trans_helper_receive")),
          "currentMonthEarnings",
        ],
      ],
      where: {
        fk_helper_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            currentMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
      raw: true,
    });
    const currentMonthEarningsValue =
      currentMonthEarnings[0].currentMonthEarnings || 0;

    const lastMonthEarnings = await Call.findAll({
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("trans_helper_receive")),
          "lastMonthEarnings",
        ],
      ],
      where: {
        fk_helper_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            lastMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
      raw: true,
    });
    const lastMonthEarningsValue = lastMonthEarnings[0].lastMonthEarnings || 0;

    const totalCallsMade = await Call.count({
      where: {
        fk_buyer_id: req.user.id,
        intent_status: "succeeded",
      },
    });

    const totalCallsAnswered = await Call.count({
      where: {
        fk_helper_id: req.user.id,
        intent_status: "succeeded",
      },
    });

    const currentMonthCallsMade = await Call.count({
      where: {
        fk_buyer_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            currentMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
    });

    const lastMonthCallsMade = await Call.count({
      where: {
        fk_buyer_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            lastMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
    });

    const currentMonthCallsAnswered = await Call.count({
      where: {
        fk_helper_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            currentMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
    });

    const lastMonthCallsAnswered = await Call.count({
      where: {
        fk_helper_id: req.user.id,
        intent_status: "succeeded",
        [Op.and]: [
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            lastMonth
          ),
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            sequelize.literal("YEAR(CURDATE())")
          ),
        ],
      },
    });

    const history = {
      totalSpendings: totalSpendingsValue,
      totalEarnings: totalEarningsValue,
      currentMonthSpendings: currentMonthSpendingsValue,
      lastMonthSpendings: lastMonthSpendingsValue,
      currentMonthEarnings: currentMonthEarningsValue,
      lastMonthEarnings: lastMonthEarningsValue,
      totalCallsMade: totalCallsMade,
      totalCallsAnswered: totalCallsAnswered,
      currentMonthCallsMade: currentMonthCallsMade,
      lastMonthCallsMade: lastMonthCallsMade,
      currentMonthCallsAnswered: currentMonthCallsAnswered,
      lastMonthCallsAnswered: lastMonthCallsAnswered,
    };
    res.status(201).send({ history: history });
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

// Buyer History
exports.buyerHistory = async (req, res) => {
  try {
    const buyerCalls = await Call.findAll({
      where: {
        fk_buyer_id: req.user.id,
        intent_status: "succeeded",
      },
      include: [
        {
          model: Service,
        },
        {
          model: User,
          as: "buyer",
        },
        {
          model: User,
          as: "helper",
        },
        {
          model: PaymentMethod,
          as: "buyerPaymentMethod",
          attributes: ['stripe_card_last4', 'stripe_bank_last4']
        },
        {
          model: PaymentMethod,
          as: "helperPaymentMethod",
          attributes: ['stripe_card_last4', 'stripe_bank_last4']
        },
      ],
    });
    res.status(201).send({ buyerCalls: buyerCalls });
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

// Helper History
exports.helperHistory = async (req, res) => {
  try {
    const helperCalls = await Call.findAll({
      where: {
        fk_helper_id: req.user.id,
        intent_status: "succeeded",
      },
      include: [
        {
          model: Service,
        },
        {
          model: User,
          as: "buyer",
        },
        {
          model: User,
          as: "helper",
        },
        {
          model: PaymentMethod,
          as: "buyerPaymentMethod",
          attributes: ['stripe_card_last4', 'stripe_bank_last4']
        },
        {
          model: PaymentMethod,
          as: "helperPaymentMethod",
          attributes: ['stripe_card_last4', 'stripe_bank_last4']
        },
      ],
    });
    res.status(201).send({ helperCalls: helperCalls });
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

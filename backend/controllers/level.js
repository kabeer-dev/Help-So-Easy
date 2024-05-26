const { RefBuyerLevel, Call } = require("../models");
const url = require("url");
const { Op } = require("sequelize");

// Levels
exports.getLevels = async (req, res) => {
  try {
    const levels = await RefBuyerLevel.findAll();
    const userCalls = await Call.count({
      where: {
        fk_buyer_id: req.user.id,
        intent_status: 'succeeded'
      },
    });
    const userLevel = await RefBuyerLevel.findOne({
      where: {
        max_calls_made: {
          [Op.gte]: userCalls, // Find records where max_calls_made is less than or equal to userCalls
        },
      },
      order: [['max_calls_made', 'ASC']], // Order by max_calls_made in ascending order
    });
    res
      .status(201)
      .send({ levels: levels, userCalls: userCalls, userLevel: userLevel.id });
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

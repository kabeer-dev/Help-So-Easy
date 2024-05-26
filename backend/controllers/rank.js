const { Service } = require("../models");

// Handle Points
exports.handlePoints = async (helperId, addOrRemove, points) => {
  try {
    const services = await Service.findAll({
      where: {
        fk_helper_id: helperId,
      },
    });

    services.forEach(async (service) => {
      const rankingPoints = service.ranking_points;
      let updatedPoints = rankingPoints;
      if (addOrRemove === "add") {
        updatedPoints = updatedPoints + points;
      } else if (addOrRemove === "remove") {
        updatedPoints = updatedPoints - points;
        if (updatedPoints < 0) {
          updatedPoints = 0;
        }
      }
      await service.update({ ranking_points: updatedPoints });
    });
  } catch (error) {
    console.log('Error saving ranking points: ' + error);
  }
};

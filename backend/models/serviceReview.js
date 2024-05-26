"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes, commonFields) => {
  class ServiceReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (belongs to)
      ServiceReview.belongsTo(models.User, {
        foreignKey: 'fk_buyer_id',
      });
    }
  }
  ServiceReview.init(
    {
      fk_service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fk_buyer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fk_helper_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      ...commonFields, // Include the common fields
    },
    {
      sequelize,
      modelName: "ServiceReview",
      tableName: "service_reviews",
    }
  );
  return ServiceReview;
};

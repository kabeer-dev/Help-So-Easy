'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class ServiceRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (belongs to)
      ServiceRate.belongsTo(models.Service, {
        foreignKey: 'fk_service_id',

      })
    }
  }
  ServiceRate.init({
    status: DataTypes.STRING,
    fk_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate: DataTypes.FLOAT,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'ServiceRate',
    tableName: 'service_rates'
  });
  return ServiceRate;
};
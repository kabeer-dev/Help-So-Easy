'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class ServiceStatusLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (belongs to)
      ServiceStatusLog.belongsTo(models.Service, {
        foreignKey: 'fk_service_id',
      })
    }
  }
  ServiceStatusLog.init({
    fk_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_status: DataTypes.STRING,
    action_reason: DataTypes.STRING,
    additional_note: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'ServiceStatusLog',
    tableName: 'service_status_logs'
  });
  return ServiceStatusLog;
};
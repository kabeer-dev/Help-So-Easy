'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class FirewallLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FirewallLog.init({
    ip: DataTypes.STRING,
    level: DataTypes.STRING,
    middleware: DataTypes.STRING,
    fk_user_id: DataTypes.INTEGER,
    url: DataTypes.TEXT,
    referrer: DataTypes.STRING,
    request: DataTypes.TEXT,
    ...commonFields, // Include the common fields
    deleted_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'FirewallLog',
    tableName: 'firewall_logs'
  });
  return FirewallLog;
};
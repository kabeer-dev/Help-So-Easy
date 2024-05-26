'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class FirewallIps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FirewallIps.init({
    ip: DataTypes.STRING,
    fk_log_id: DataTypes.INTEGER,
    is_blocked: DataTypes.BOOLEAN,
    total_attempts: DataTypes.INTEGER,
    block_time: DataTypes.DATE,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'FirewallIps',
    tableName: 'firewall_ips'
  });
  return FirewallIps;
};
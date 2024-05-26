'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class AuthenticationLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //one to many (belongs To)
      AuthenticationLog.belongsTo(models.User,{
        foreignKey: 'fk_user_id',
      });
    }
  }
  AuthenticationLog.init({
    fk_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ip_address: DataTypes.STRING,
    user_agent: DataTypes.STRING,
    login_time: DataTypes.DATE,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'AuthenticationLog',
    tableName: 'authentication_logs'
  });
  return AuthenticationLog;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class UserAccountStatusLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (belongs to)
      UserAccountStatusLog.belongsTo(models.User,{
        foreignKey: 'fk_user_id',
      });
    }
  }
  UserAccountStatusLog.init({
    fk_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    account_status: DataTypes.STRING,
    action_reason: DataTypes.STRING,
    additional_note: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'UserAccountStatusLog',
    tableName: 'user_account_status_logs'
  });
  return UserAccountStatusLog;
};
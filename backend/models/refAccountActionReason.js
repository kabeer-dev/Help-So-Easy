'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefAccountActionReason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to mnay (has many)
      RefAccountActionReason.hasMany(models.RefCancelAccountActionReason, {
        foreignKey: 'fk_account_action_reason_id',
      });
      RefAccountActionReason.hasMany(models.User, {
        foreignKey: 'fk_account_action_reason_id',
      });
      RefAccountActionReason.hasMany(models.Service, {
        foreignKey: 'fk_suspend_start_reason_id',
      })
    }
  }
  RefAccountActionReason.init({
    reason: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefAccountActionReason',
    tableName: 'ref_account_action_reasons'
  });
  return RefAccountActionReason;
};
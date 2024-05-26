'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefCancelAccountActionReason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to mnay (belogs to)
      RefCancelAccountActionReason.belongsTo(models.RefAccountActionReason, {
        foreignKey: 'fk_account_action_reason_id',
      });
    }
  }
  RefCancelAccountActionReason.init({
    fk_account_action_reason_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reason: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefCancelAccountActionReason',
    tableName: 'ref_cancel_account_action_reasons'
  });
  return RefCancelAccountActionReason;
};
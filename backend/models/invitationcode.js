'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class InvitationCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InvitationCode.init({
    invitation_code: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    ...commonFields
  }, {
    sequelize,
    modelName: 'InvitationCode',
    tableName: 'invitation_codes'
  });
  return InvitationCode;
};
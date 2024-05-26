'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class WaitingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WaitingList.init({
    // first_name: DataTypes.STRING,
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true
    },
    country: DataTypes.STRING,
    comment: DataTypes.STRING,
    reason: DataTypes.STRING,
    ...commonFields
  }, {
    sequelize,
    modelName: 'WaitingList',
    tableName: 'waiting_lists'
  });
  return WaitingList;
};
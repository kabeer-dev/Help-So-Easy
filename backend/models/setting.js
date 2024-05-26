'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setting.init({
    key: DataTypes.STRING,
    value: DataTypes.TEXT,
    ...commonFields, // Include the common fields
  },{
    sequelize,
    modelName: 'Setting',
    tableName: 'settings'
  });
  return Setting;
};
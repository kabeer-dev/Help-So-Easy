'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    like_type: DataTypes.STRING,
    email: DataTypes.STRING,
    subject: DataTypes.STRING,
    comment: DataTypes.STRING,
    ...commonFields
  }, {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts'
  });
  return Contact;
};
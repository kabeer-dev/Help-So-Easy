'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class EmailContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmailContent.init({
    slug: DataTypes.STRING,
    subject: DataTypes.STRING,
    content_longtext: DataTypes.TEXT('long'),
    bcc: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'EmailContent',
    tableName: 'email_contents'
  });
  return EmailContent;
};
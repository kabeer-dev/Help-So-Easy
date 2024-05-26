'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class PageContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PageContent.init({
    slug: DataTypes.STRING,
    content_longtext: DataTypes.TEXT('long'),
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'PageContent',
    tableName: 'page_contents'
  });
  return PageContent;
};
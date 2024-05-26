'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefDisplayLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to one (has one)
      RefDisplayLanguage.hasOne(models.User, {
        foreignKey: 'fk_display_language_id'
      });

      //one to many (has many)
      RefDisplayLanguage.hasMany(models.SearchResult, {
        foreignKey: 'fk_buyer_display_language_id'
      });
    }
  }
  RefDisplayLanguage.init({
    name: DataTypes.STRING,
    flag: DataTypes.STRING,
    is_default: DataTypes.BOOLEAN,
    sort: DataTypes.INTEGER,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefDisplayLanguage',
    tableName: 'ref_display_languages'
  });
  return RefDisplayLanguage;
};
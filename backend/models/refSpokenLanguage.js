'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefSpokenLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // many to many (belongs to many)
      RefSpokenLanguage.belongsToMany(models.User, {
        through: 'UsersSpokenLanguages',
        foreignKey: 'fk_language_id'
      });

      //many to many (belons to many)
      RefSpokenLanguage.belongsToMany(models.SearchResult, {
        through: 'SearchResultsHelperSpokenLanguage',
        foreignKey: 'fk_spoken_language_id'
      });
      RefSpokenLanguage.belongsToMany(models.SearchResult, {
        through: 'SearchResultsBuyerSpokenLanguage',
        foreignKey: 'fk_spoken_language_id'
      });
    }
  }
  RefSpokenLanguage.init({
    name: DataTypes.STRING,
    flag: DataTypes.STRING,
    is_default: { 
      type:DataTypes.BOOLEAN,
      allowNull: false,
    },
    sort: DataTypes.INTEGER,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefSpokenLanguage',
    tableName: 'ref_spoken_languages'
  });
  return RefSpokenLanguage;
};
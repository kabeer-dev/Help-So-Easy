'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefCountry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefCountry.hasMany(models.User,{
        foreignKey: 'fk_country_id'
      });
      RefCountry.hasMany(models.RefState, {
        foreignKey: 'fk_country_id'
      });
      RefCountry.hasMany(models.SearchResult,{
        foreignKey: 'fk_buyer_country_id',
        as: 'buyerSearchResults'
      });
      RefCountry.hasMany(models.SearchResult,{
        foreignKey: 'fk_helper_country_id',
        as: 'helperSearchResults'
      });
    }
  }
  RefCountry.init({
    name: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefCountry',
    tableName: 'ref_countries',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    }
  });
  return RefCountry;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefCurrency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefCurrency.hasMany(models.User, {
        foreignKey: 'fk_currency_id',
      });
      RefCurrency.hasMany(models.SearchResult,{
        foreignKey: 'fk_buyer_currency_id'
      });
    }
  }
  RefCurrency.init({
    status_nm: DataTypes.STRING,
    is_default: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    currency_code: DataTypes.STRING,
    symbol: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefCurrency',
    tableName: 'ref_currencies'
  });
  return RefCurrency;
};
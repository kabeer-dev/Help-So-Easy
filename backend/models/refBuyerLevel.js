'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefBuyerLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefBuyerLevel.hasMany(models.User, {
        foreignKey: 'fk_buyer_level_id'
      });
      //one to one (has one)
      RefBuyerLevel.hasOne(models.SearchResult, {
        foreignKey: 'fk_buyer_level_id'
      });
    }
  }
  RefBuyerLevel.init({
    is_default: DataTypes.BOOLEAN,
    level_name: DataTypes.STRING,
    max_calls_made: DataTypes.INTEGER,
    allowed_duration: DataTypes.FLOAT,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefBuyerLevel',
    tableName: 'ref_buyer_levels'
  });
  return RefBuyerLevel;
};
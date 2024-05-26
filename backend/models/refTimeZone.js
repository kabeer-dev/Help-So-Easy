'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefTimeZone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefTimeZone.hasMany(models.User, {
        foreignKey: 'fk_time_zone_id'
      });
      RefTimeZone.hasMany(models.SearchResult, {
        foreignKey: 'fk_helper_time_zone_id',
        as: 'helperSearchResults'
      });
      RefTimeZone.hasMany(models.SearchResult, {
        foreignKey: 'fk_buyer_time_zone_id',
        as: 'buyerSearchResults'
      });
    }
  }
  RefTimeZone.init({
    name: DataTypes.STRING,
    offset: DataTypes.FLOAT,
    description: DataTypes.STRING,
    is_default: DataTypes.BOOLEAN,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefTimeZone',
    tableName: 'ref_time_zones',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    }
  });
  return RefTimeZone;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefHelperAvailability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefHelperAvailability.hasMany(models.User, {
        foreignKey: 'fk_helper_availability_id'
      });
      RefHelperAvailability.hasMany(models.SearchResult, {
        foreignKey: 'fk_helper_availability_id'
      });
    }
  }
  RefHelperAvailability.init({
    is_default: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefHelperAvailability',
    tableName: 'ref_helper_availabilities'
  });
  return RefHelperAvailability;
};
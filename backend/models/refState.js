'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefState.hasMany(models.User, {
        foreignKey: 'fk_state_id'
      });
      RefState.hasMany(models.SearchResult, {
        foreignKey: 'fk_helper_state_id',
        as: 'helperSearchResults'
      });
      RefState.hasMany(models.SearchResult, {
        foreignKey: 'fk_buyer_state_id',
        as: 'byperSearchResults'
      });
      // one to many (belongs to)
      RefState.belongsTo(models.RefCountry, {
        foreignKey: 'fk_country_id'
      });
    }
  }
  RefState.init({
    fk_country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefState',
    tableName: 'ref_states',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    }
  });
  return RefState;
};
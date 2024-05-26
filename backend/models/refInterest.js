'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefInterest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefInterest.hasMany(models.Service, {
        foreignKey: 'fk_interest_id',
      });
      RefInterest.hasMany(models.SearchResult, {
        foreignKey: 'fk_service_interest_id'
      });

      //many to many (belongs to many)
      RefInterest.belongsToMany(models.User, {
        through: 'UserInterest',
        foreignKey: 'fk_interest_id'
      });
      RefInterest.belongsToMany(models.SearchResult, {
        through: 'SearchResultsBuyerInterest',
        foreignKey: 'fk_interest_id',
      });
    }
  }
  RefInterest.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    sort: DataTypes.INTEGER,
    description: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefInterest',
    tableName: 'ref_interests',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    }
  });
  return RefInterest;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      Search.hasMany(models.Call, {
        foreignKey: 'fk_serach_result_id'
      });
      Search.hasMany(models.SearchResult, {
        foreignKey: 'fk_search_id'
      });

      //one to many (belongs to many)
      Search.belongsTo(models.User, {
        foreignKey: 'fk_buyer_id'
      });
      
    }
  }
  Search.init({
    is_login: DataTypes.BOOLEAN,
    fk_buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_from_landing_page: DataTypes.BOOLEAN,
    keywords: DataTypes.STRING,
    filters: DataTypes.JSON,
    total_results_count: DataTypes.INTEGER,
    viewed_results_count: DataTypes.INTEGER,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'Search',
    tableName: 'searches'
  });
  return Search;
};
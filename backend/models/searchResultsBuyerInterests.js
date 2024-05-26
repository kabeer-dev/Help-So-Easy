'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SearchResultsBuyerInterests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SearchResultsBuyerInterests.init({
    fk_search_result_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_interest_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'SearchResultsBuyerInterests',
    tableName: 'search_results_buyer_interests'
  });
  return SearchResultsBuyerInterests;
};
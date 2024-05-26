'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class SearchResultsBuyerSpokenLanguages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SearchResultsBuyerSpokenLanguages.init({
    fk_search_result_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_spoken_language_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'SearchResultsBuyerSpokenLanguages',
    tableName: 'search_results_buyer_spoken_languages'
  });
  return SearchResultsBuyerSpokenLanguages;
};
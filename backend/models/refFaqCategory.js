'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefFaqCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      RefFaqCategory.hasMany(models.Faq, {
        foreignKey: 'fk_faq_category_id',
      })
    }
  }
  RefFaqCategory.init({
    name: DataTypes.STRING,
    sort: DataTypes.INTEGER,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefFaqCategory',
    tableName: 'ref_faq_categories',
    // defaultScope: {
    //   attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    // }
  });
  return RefFaqCategory;
};
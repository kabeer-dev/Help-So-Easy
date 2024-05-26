'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (belongs to)
      Faq.belongsTo(models.RefFaqCategory,{
        foreignKey: 'fk_faq_category_id',
      });
    }
  }
  Faq.init({
    fk_faq_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT('medium'),
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'Faq',
    tableName: 'faqs',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    }
  });
  return Faq;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class ServiceImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (belongs to)
      ServiceImage.belongsTo(models.Service, {
        foreignKey: 'fk_service_id',
 
      })
    }
  }
  ServiceImage.init({
    fk_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'ServiceImage',
    tableName: 'service_images'
  });
  return ServiceImage;
};
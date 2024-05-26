'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class RefVideoPreference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to mnay (has many)
      RefVideoPreference.hasMany(models.Service, {
        foreignKey: 'fk_video_preference_id',
      })
    }
  }
  RefVideoPreference.init({
    description: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'RefVideoPreference',
    tableName: 'ref_video_preferences',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    }
  });
  return RefVideoPreference;
};
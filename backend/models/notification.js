'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (belongs to)
      Notification.belongsTo(models.User,{
        foreignKey: 'fk_user_id',
      })
    }
  }
  Notification.init({
    fk_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    is_read: DataTypes.BOOLEAN,
    is_hidden: DataTypes.BOOLEAN,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'Notification',
    tableName: 'notifications'
  });
  return Notification;
};
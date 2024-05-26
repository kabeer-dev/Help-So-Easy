'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class PremiumNickname extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //one to one (belongs to one)
      // PremiumNickname.belongsTo(models.User, {
      //   foreignKey: 'fk_user_id'
      // });
    }
  }
  PremiumNickname.init({
    nickname: DataTypes.STRING,
    level: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    is_bought: DataTypes.BOOLEAN,
    fk_user_id: {
      type: DataTypes.INTEGER,
      allowNull: 'false'
    },
    bought_date: DataTypes.DATE,
    remark: DataTypes.STRING,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'PremiumNickname',
    tableName: 'premium_nicknames'
  });
  return PremiumNickname;
};
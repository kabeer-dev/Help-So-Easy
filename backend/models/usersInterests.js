'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class UsersInterests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  UsersInterests.init({
    fk_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_interest_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'UsersInterests',
    tableName: 'users_interests',
    // defaultScope: {
    //   attributes: { exclude: ['UserId'] } // Exclude the fields
    // }
  });
  return UsersInterests;
};
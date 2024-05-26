'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      User.hasMany(models.PaymentMethod, {
        foreignKey: 'fk_user_id',
      });
      User.hasMany(models.Call,{
        foreignKey: 'fk_buyer_id',

      });
      User.hasMany(models.Notification, {
        foreignKey: 'fk_user_id',
      });
      User.hasMany(models.AuthenticationLog, {
        foreignKey: 'fk_user_id',
      });
      User.hasMany(models.UserAccountStatusLog,{
        foreignKey: 'fk_user_id',
      });
      User.hasMany(models.Service, {
        foreignKey: 'fk_helper_id',
      });
      User.hasMany(models.Search, {
        foreignKey: 'fk_buyer_id'
      });
      
      // one to many (belongs to)
      User.belongsTo(models.RefAccountActionReason, {
        foreignKey: 'fk_account_action_reason_id',
      });
      User.belongsTo(models.RefCurrency, {
        foreignKey: 'fk_currency_id'
      });
      User.belongsTo(models.RefCountry,{
        foreignKey: 'fk_country_id'
      });
      User.belongsTo(models.RefState, {
        foreignKey: 'fk_state_id'
      });
      User.belongsTo(models.RefHelperAvailability, {
        foreignKey: 'fk_helper_availability_id'
      });
      User.belongsTo(models.RefTimeZone, {
        foreignKey: 'fk_time_zone_id'
      });
      User.belongsTo(models.RefBuyerLevel, {
        foreignKey: 'fk_buyer_level_id'
      });

      //one to one (belongs to one)
      User.belongsTo(models.RefDisplayLanguage, {
        foreignKey: 'fk_display_language_id'
      });
      //many to mnay (belong to many)
      User.belongsToMany(models.RefInterest, {
        through: 'UsersInterest',
        foreignKey: 'fk_user_id'
      });
      User.belongsToMany(models.RefSpokenLanguage,{
        through: 'UsersSpokenLanguages',
        foreignKey: 'fk_user_id'
      });
    }
  }
  User.init({    
    stripe_customer_id: DataTypes.STRING,
    status_nm: {
      type: DataTypes.ENUM,
      values: ['Active', 'Waiting', 'Blocked', 'Deleted'],
    },
    is_test: DataTypes.BOOLEAN,
    is_admin: DataTypes.BOOLEAN,
    internal_remarks: DataTypes.STRING,
    fk_account_action_reason_id: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    account_action_start: DataTypes.DATE,
    account_action_end_plan: DataTypes.DATE,
    fk_cancel_account_action_reason_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    cancel_account_action_end_actual: DataTypes.DATE,
    user_cancel_reason_other: {
      type: DataTypes.STRING(1000)
    },
    total_attempts: DataTypes.INTEGER,
    block_time: DataTypes.DATE,
    verified_at: DataTypes.DATE,
    verification_code: DataTypes.BIGINT,
    verification_code_sent_time: DataTypes.DATE,
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    avatar:  DataTypes.STRING,
    user_id: {
      unique: true,
      // defaultValue: "hse-234-345-788",
      type: DataTypes.STRING,
    },
    nick_name: {
      // unique: true,
      defaultValue: "Default Nickname",
      type: DataTypes.STRING,
    },
    is_premium_nickname: DataTypes.BOOLEAN, 
    fk_premium_nickname_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    premium_nickname_bought_time: DataTypes.DATE,
    premium_nickname_paid_price: DataTypes.FLOAT,
    fk_buyer_level_id: {
      defaultValue: 1,
      type: DataTypes.INTEGER,
       allowNull: false,
    },
    first_name: {
      // allowNull: false,
      // defaultValue: "Default",
      type: DataTypes.STRING
    },
    first_name_privacy: DataTypes.BOOLEAN,
    last_name: {
      // allowNull: false,
      // defaultValue: "Name",
      type: DataTypes.STRING
    },
    last_name_privacy: DataTypes.BOOLEAN,
    birth_year: DataTypes.INTEGER,
    birth_year_privacy: DataTypes.BOOLEAN,
    gender: DataTypes.STRING,
    gender_privacy: DataTypes.BOOLEAN,
    country_code: DataTypes.STRING,
    phone: DataTypes.STRING,
    phone_privacy: DataTypes.BOOLEAN,
    fk_country_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    country_privacy: DataTypes.BOOLEAN,
    fk_state_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    state_privacy: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    address_privacy: DataTypes.BOOLEAN,
    postal_code: DataTypes.STRING,
    postal_code_privacy: DataTypes.BOOLEAN,
    fk_time_zone_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    time_zone_privacy: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    description_privacy: DataTypes.BOOLEAN,
    fk_display_language_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    stripe_connect_account_id: DataTypes.STRING,
    stripe_customer_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    stripe_connect_account_status_cd: DataTypes.INTEGER,
    fk_currency_id: {
      defaultValue: 1,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_helper_availability_id: {
      defaultValue: 1,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_last_service_viewed_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    fk_last_service_called_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    }, 
    last_buy_time: DataTypes.DATE, 
    last_sell_time: DataTypes.DATE, 
    calls_received_count: DataTypes.INTEGER, 
    calls_made_count: DataTypes.INTEGER, 
    calls_received_duration: DataTypes.FLOAT,
    calls_made_duration: DataTypes.FLOAT,
    total_spent:  DataTypes.FLOAT,
    total_earned: DataTypes.FLOAT,
    // cam_permission: DataTypes.BOOLEAN,
    // mic_permission: DataTypes.BOOLEAN,
    // storage_permission: DataTypes.BOOLEAN,
    // geo_permission: DataTypes.BOOLEAN,
    // cookie_permission: DataTypes.BOOLEAN,
    ...commonFields, // Include the common fields
  },{
    sequelize,
    modelName: 'User',
    tableName: 'users',
    // defaultScope: {
    //   attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude the fields
    // }
  });


  return User;
};

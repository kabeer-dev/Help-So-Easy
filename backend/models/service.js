'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many (has many)
      Service.hasMany(models.ServiceImage, {
        foreignKey: 'fk_service_id',

      });
      Service.hasMany(models.ServiceReview, {
        foreignKey: 'fk_service_id',

      });
      Service.hasMany(models.ServiceRate, {
        foreignKey: 'fk_service_id',
     
      });
      Service.hasMany(models.ServiceStatusLog, {
        foreignKey: 'fk_service_id',
    
      });
      Service.hasMany(models.Call, {
        foreignKey: 'fk_service_id',
     
      });
      Service.hasMany(models.SearchResult, {
        foreignKey: 'fk_service_id'
      });
      //one to many (belongs to)
      Service.belongsTo(models.RefVideoPreference, {
        foreignKey: 'fk_video_preference_id',

      });
      Service.belongsTo(models.RefAccountActionReason, {
        foreignKey: 'fk_suspend_start_reason_id',
  
      });
      Service.belongsTo(models.User, {
        foreignKey: 'fk_helper_id',
        
      });
      Service.belongsTo(models.RefInterest, {
        foreignKey: 'fk_interest_id',
  
      });
    }
  }
  Service.init({
    status_nm: {
      type: DataTypes.ENUM,
      values: ['Active', 'NonActive', 'Deleted'],
    },
    ranking_points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    fk_helper_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_interest_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_suspend_start_reason_id: {
      type: DataTypes.INTEGER,
    },
    suspend_start: DataTypes.DATE,
    suspend_start_plan: DataTypes.DATE,
    fk_suspend_end_reason_id: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    suspend_end_actual: DataTypes.DATE,
    fk_terminate_reason_id: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    terminate_date: DataTypes.DATE,
    title: DataTypes.STRING,
    url_title: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    fk_video_preference_id: {
      defaultValue: 1,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: DataTypes.STRING,
    shared_count: DataTypes.INTEGER,
    latest_avg_rating: DataTypes.FLOAT,
    latest_avg_call_length: DataTypes.FLOAT,
    calls_count: DataTypes.INTEGER,
    last_call_time: DataTypes.DATE,
    overall_avg_rating: DataTypes.FLOAT,
    total_call_duration: DataTypes.FLOAT,
    ratings_count: DataTypes.INTEGER,
    total_earned: DataTypes.FLOAT,
    occasional_update_time: DataTypes.DATE,
    time_since_last_call_occasional_update: DataTypes.FLOAT,
    general_score_occasional_update: DataTypes.FLOAT,
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'Service',
    tableName: 'services'
  });
  return Service;
};
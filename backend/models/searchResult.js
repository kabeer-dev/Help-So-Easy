'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class SearchResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to one (belongs to)
      SearchResult.belongsTo(models.RefBuyerLevel, {
        foreignKey: 'fk_buyer_level_id'
      });

      //one to many (belongs to)
      SearchResult.belongsTo(models.Search, {
        foreignKey: 'fk_search_id'
      });
      SearchResult.belongsTo(models.RefDisplayLanguage, {
        foreignKey: 'fk_buyer_display_language_id'
      });
      SearchResult.belongsTo(models.RefTimeZone, {
        foreignKey: 'fk_helper_time_zone_id',
        as: 'helperTimeZone'
      });
      SearchResult.belongsTo(models.RefTimeZone, {
        foreignKey: 'fk_buyer_time_zone_id',
        as: 'BuyerTimeZone'
      });
      SearchResult.belongsTo(models.RefHelperAvailability, {
        foreignKey: 'fk_buyer_availability_id',
      });
      SearchResult.belongsTo(models.RefState, {
        foreignKey: 'fk_helper_state_id',
        as: 'helperState'
      });
      SearchResult.belongsTo(models.RefState, {
        foreignKey: 'fk_Buyer_state_id',
        as: 'buyerState'
      });
      SearchResult.belongsTo(models.RefCountry, {
        foreignKey: 'fk_buyer_country_id',
        as: 'buyerCountry'
      });
      SearchResult.belongsTo(models.RefCountry, {
        foreignKey: 'fk_helper_country_id',
        as: 'helperCountry'
      });
      SearchResult.belongsTo(models.RefCurrency,{
        foreignKey: 'fk_buyer_currency_id'
      });
      SearchResult.belongsTo(models.RefInterest, {
        foreignKey: 'fk_service_interest_id'
      });
      SearchResult.belongsTo(models.Service, {
        foreignKey: 'fk_service_id'
      });

      //many to many (belongs to many)
      SearchResult.belongsToMany(models.RefSpokenLanguage, {
        through: 'SearchResultsHelperSpokenLanguage',
        foreignKey: 'fk_search_result_id',
        as: 'searchResultsHelperSpokenLanguage'
      });
      SearchResult.belongsToMany(models.RefSpokenLanguage, {
        through: 'SearchResultsBuyerSpokenLanguage',
        foreignKey: 'fk_search_result_id',
        as: 'searchResultsBuyerSpokenLanguage'
      });
      SearchResult.belongsToMany(models.RefInterest, {
        through: 'SearchResultsBuyerInterest',
        foreignKey: 'fk_search_result_id',
      });

    }
  }
  SearchResult.init({
    fk_search_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_nm: {
      type: DataTypes.STRING
    },
    result_rank: {
      type: DataTypes.INTEGER
    },
    result_score: {
      type: DataTypes.FLOAT
    },
    result_batch_number: {
      type: DataTypes.INTEGER
    },
    landing_page_section_cd: {
      type: DataTypes.INTEGER
    },
    fk_call_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    is_shared: {
      type: DataTypes.BOOLEAN,
    },
    fk_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_title: {
      type: DataTypes.STRING,
    },
    fk_service_interest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_description: {
      type: DataTypes.TEXT,
    },
    service_rate: {
      type: DataTypes.FLOAT,
    },
    fk_service_video_preference_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    service_shared_count: {
      type: DataTypes.INTEGER,
    },
    service_latest_avg_rating: {
      type: DataTypes.FLOAT,
    },
    service_latest_avg_call_length: {
      type: DataTypes.FLOAT,
    },
    service_calls_count: {
      type: DataTypes.INTEGER,
    },
    service_last_call_time: {
      type: DataTypes.DATE,
    },
    service_overall_avg_rating: {
      type: DataTypes.FLOAT,
    },
    service_total_call_duration: {
      type: DataTypes.FLOAT,
    },
    service_ratings_count: {
      type: DataTypes.INTEGER,
    },
    service_total_earned: {
      type: DataTypes.FLOAT,
    },
    service_images_viewed_count: {
      type: DataTypes.INTEGER,
    },
    service_occasional_update_time: {
      type: DataTypes.DATE,
    },
    service_time_since_last_call_accasional_update: {
      type: DataTypes.FLOAT,
    },
    service_time_since_last_call_realtime: {
      type: DataTypes.FLOAT,
    },
    service_general_score_accasional_update: {
      type: DataTypes.FLOAT,
    },
    service_general_score_realtime: {
      type: DataTypes.FLOAT,
    },
    fk_helper_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    helper_has_image: {
      type: DataTypes.BOOLEAN,
    },
    helper_nickname: {
      type: DataTypes.STRING,
    },
    helper_first_name: {
      type: DataTypes.STRING,
    },
    helper_last_name: {
      type: DataTypes.STRING,
    },
    helper_age: {
      type: DataTypes.INTEGER,
    },
    fk_helper_country_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    fk_helper_state_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    helper_address: {
      type: DataTypes.STRING,
    },
    helper_postal_code: {
      type: DataTypes.STRING,
    },
    fk_helper_time_zone_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    helper_local_time: {
      type: DataTypes.DATE,
    },
    helper_description: {
      type: DataTypes.STRING,
    },
    helper_is_online: {
      type: DataTypes.BOOLEAN,
    },
    buyer_nick_name: {
      type: DataTypes.STRING,
    },
    buyer_first_name: {
      type: DataTypes.STRING,
    },
    buyer_fname_privacy: {
      type: DataTypes.BOOLEAN,
    },
    buyer_last_name: {
      type: DataTypes.STRING,
    },
    buyer_lname_privacy: {
      type: DataTypes.BOOLEAN,
    },
    buyer_birth_year: {
      type: DataTypes.DATE,
    },
    buyer_birth_year_privacy: {
      type: DataTypes.BOOLEAN,
    },
    buyer_phone: {
      type: DataTypes.STRING,
    },
    buyer_phone_privacy: {
      type: DataTypes.BOOLEAN,
    },
    fk_buyer_country_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    buyer_country_privacy: {
      type: DataTypes.BOOLEAN,
    },
    fk_buyer_state_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    buyer_state_privacy: {
      type: DataTypes.BOOLEAN,
    },
    buyer_address: {
      type: DataTypes.STRING,
    },
    buyer_address_privacy: {
      type: DataTypes.BOOLEAN,
    },
    buyer_postal_code: {
      type: DataTypes.STRING,
    },
    buyer_postal_code_privacy: {
      type: DataTypes.BOOLEAN,
    },
    fk_buyer_time_zone_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    buyer_time_zone_privacy: {
      type: DataTypes.BOOLEAN,
    },
     buyer_description: {
      type: DataTypes.TEXT,
    },
    buyer_description_privacy: {
      type: DataTypes.BOOLEAN,
    },
    fk_buyer_level_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    fk_buyer_display_language_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    fk_buyer_currency_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    buyer_has_avatar: {
      type: DataTypes.BOOLEAN,
    },
     fk_buyer_availability_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    buyer_services_count: {
      type: DataTypes.INTEGER,
    },
    buyer_calls_received_count: {
      type: DataTypes.INTEGER,
    },
    buyer_calls_made_count: {
      type: DataTypes.INTEGER,
    },
    buyer_calls_received_duration: {
      type: DataTypes.FLOAT,
    },
    buyer_calls_made_duration: {
      type: DataTypes.FLOAT,
    },
    buyer_total_spent: {
      type: DataTypes.FLOAT,
    },
    buyer_total_earned: {
      type: DataTypes.FLOAT,
    },
    buyer_local_time: {
      type: DataTypes.DATE,
    },
    buyer_verified_at: {
      type: DataTypes.DATE,
    },
    buyer_created_at: {
      type: DataTypes.DATE,
    },
    buyer_updated_at: {
      type: DataTypes.DATE,
    },
    ...commonFields, // Include the common fields
  }, {
    sequelize,
    modelName: 'SearchResult',
    tableName: 'search_results'
  });
  return SearchResult;
};
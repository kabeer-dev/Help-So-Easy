'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('search_results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_search_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'searches',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status_nm: {
        type: Sequelize.STRING
      },
      result_rank: {
        type: Sequelize.INTEGER
      },
      result_score: {
        type: Sequelize.FLOAT
      },
      result_batch_number: {
        type: Sequelize.INTEGER
      },
      landing_page_section_cd: {
        type: Sequelize.INTEGER
      },
      fk_call_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      is_shared: {
        type: Sequelize.BOOLEAN,
      },
      fk_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'services',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      service_title: {
        type: Sequelize.STRING,
      },
      fk_service_interest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ref_interests',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      service_description: {
        type: Sequelize.TEXT,
      },
      service_rate: {
        type: Sequelize.FLOAT,
      },
      fk_service_video_preference_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      service_shared_count: {
        type: Sequelize.INTEGER,
      },
      service_latest_avg_rating: {
        type: Sequelize.FLOAT,
      },
      service_latest_avg_call_length: {
        type: Sequelize.FLOAT,
      },
      service_calls_count: {
        type: Sequelize.INTEGER,
      },
      service_last_call_time: {
        type: Sequelize.DATE,
      },
      service_overall_avg_rating: {
        type: Sequelize.FLOAT,
      },
      service_total_call_duration: {
        type: Sequelize.FLOAT,
      },
      service_ratings_count: {
        type: Sequelize.INTEGER,
      },
      service_total_earned: {
        type: Sequelize.FLOAT,
      },
      service_images_viewed_count: {
        type: Sequelize.INTEGER,
      },
      service_occasional_update_time: {
        type: Sequelize.DATE,
      },
      service_time_since_last_call_accasional_update: {
        type: Sequelize.FLOAT,
      },
      service_time_since_last_call_realtime: {
        type: Sequelize.FLOAT,
      },
      service_general_score_accasional_update: {
        type: Sequelize.FLOAT,
      },
      service_general_score_realtime: {
        type: Sequelize.FLOAT,
      },
      fk_helper_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      helper_has_image: {
        type: Sequelize.BOOLEAN,
      },
      helper_nickname: {
        type: Sequelize.STRING,
      },
      helper_first_name: {
        type: Sequelize.STRING,
      },
      helper_last_name: {
        type: Sequelize.STRING,
      },
      helper_age: {
        type: Sequelize.INTEGER,
      },
      fk_helper_country_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_countries',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_helper_state_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_states',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      helper_address: {
        type: Sequelize.STRING,
      },
      helper_postal_code: {
        type: Sequelize.STRING,
      },
      fk_helper_time_zone_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_time_zones',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      helper_local_time: {
        type: Sequelize.DATE,
      },
      helper_description: {
        type: Sequelize.STRING,
      },
      helper_is_online: {
        type: Sequelize.BOOLEAN,
      },
      buyer_nick_name: {
        type: Sequelize.STRING,
      },
      buyer_first_name: {
        type: Sequelize.STRING,
      },
      buyer_fname_privacy: {
        type: Sequelize.BOOLEAN,
      },
      buyer_last_name: {
        type: Sequelize.STRING,
      },
      buyer_lname_privacy: {
        type: Sequelize.BOOLEAN,
      },
      buyer_birth_year: {
        type: Sequelize.DATE,
      },
      buyer_birth_year_privacy: {
        type: Sequelize.BOOLEAN,
      },
      buyer_phone: {
        type: Sequelize.STRING,
      },
      buyer_phone_privacy: {
        type: Sequelize.BOOLEAN,
      },
      fk_buyer_country_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_countries',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      buyer_country_privacy: {
        type: Sequelize.BOOLEAN,
      },
      fk_buyer_state_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_states',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        
      },
      buyer_state_privacy: {
        type: Sequelize.BOOLEAN,
      },
      buyer_address: {
        type: Sequelize.STRING,
      },
      buyer_address_privacy: {
        type: Sequelize.BOOLEAN,
      },
      buyer_postal_code: {
        type: Sequelize.STRING,
      },
      buyer_postal_code_privacy: {
        type: Sequelize.BOOLEAN,
      },
      fk_buyer_time_zone_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_time_zones',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      buyer_time_zone_privacy: {
        type: Sequelize.BOOLEAN,
      },
       buyer_description: {
        type: Sequelize.TEXT,
      },
      buyer_description_privacy: {
        type: Sequelize.BOOLEAN,
      },
      fk_buyer_level_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_buyer_levels',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_buyer_display_language_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_display_languages',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_buyer_currency_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_currencies',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      buyer_has_avatar: {
        type: Sequelize.BOOLEAN,
      },
      fk_buyer_availability_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'ref_helper_availabilities',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      buyer_services_count: {
        type: Sequelize.INTEGER,
      },
      buyer_calls_received_count: {
        type: Sequelize.INTEGER,
      },
      buyer_calls_made_count: {
        type: Sequelize.INTEGER,
      },
      buyer_calls_received_duration: {
        type: Sequelize.FLOAT,
      },
      buyer_calls_made_duration: {
        type: Sequelize.FLOAT,
      },
      buyer_total_spent: {
        type: Sequelize.FLOAT,
      },
      buyer_total_earned: {
        type: Sequelize.FLOAT,
      },
      buyer_local_time: {
        type: Sequelize.DATE,
      },
      buyer_verified_at: {
        type: Sequelize.DATE,
      },
      buyer_created_at: {
        type: Sequelize.DATE,
      },
      buyer_updated_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('search_results');
  }
};
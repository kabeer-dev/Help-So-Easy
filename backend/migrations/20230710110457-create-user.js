'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stripe_customer_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status_nm: {
        type: Sequelize.ENUM("Active", "Waiting", "Blocked", "Deleted" ),
        defaultValue: "Active"
      },
      is_test: {
        type: Sequelize.BOOLEAN
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
      },
      internal_remarks: {
        type: Sequelize.TEXT
      },

      fk_account_action_reason_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ref_account_action_reasons',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      account_action_start: {
        type: Sequelize.DATE
      },
      account_action_end_plan: {
        type: Sequelize.DATE
      },

      fk_cancel_account_action_reason_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      cancel_account_action_end_actual: {
        type: Sequelize.DATE,
      },
      user_cancel_reason_other: {
        type: Sequelize.STRING(1000),
      },
      total_attempts: {
        type: Sequelize.INTEGER
      },
      block_time: {
        type: Sequelize.DATE
      },
      verified_at: {
        type: Sequelize.DATE
      },
      verification_code: {
        type: Sequelize.BIGINT
      },
      verification_code_sent_time: {
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      user_id: {
        unique: true,
        type: Sequelize.STRING,
      },
      nick_name: {
        // unique: true,
        defaultValue: "Default Nickname",
        type: Sequelize.STRING,
      },
      is_premium_nickname: {
        type: Sequelize.BOOLEAN,
      },
      
      fk_premium_nickname_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      premium_nickname_bought_time: {
        type: Sequelize.DATE,
      },
      premium_nickname_paid_price: {
        type: Sequelize.FLOAT,
      },

      fk_buyer_level_id: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
         allowNull: false,
         references: {
          model: 'ref_buyer_levels',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
         
      },
      first_name: {
        // allowNull: false,
        // defaultValue: "Default",
        type: Sequelize.STRING
      },
      first_name_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      last_name: {
        // allowNull: false,
        // defaultValue: "Name",
        type: Sequelize.STRING
      },
      last_name_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      birth_year: {
        type: Sequelize.INTEGER
      },
      birth_year_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      gender: {
        type: Sequelize.STRING
      },
      gender_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      country_code: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      phone_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },

      fk_country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ref_countries',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      country_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },

      fk_state_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ref_states',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      state_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      address: {
        type: Sequelize.STRING,
      },
      address_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      postal_code_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },

      fk_time_zone_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ref_time_zones',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      time_zone_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      description: {
        type: Sequelize.TEXT,
      },
      description_privacy: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },

      fk_display_language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ref_display_languages',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      stripe_connect_account_id: {
        type: Sequelize.STRING,
      },
      stripe_customer_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stripe_connect_account_status_cd: {
        type: Sequelize.INTEGER
      },

      fk_currency_id: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ref_currencies',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      fk_helper_availability_id: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ref_helper_availabilities',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      fk_last_service_viewed_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },

      fk_last_service_called_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      }, 
      last_buy_time: {
        type: Sequelize.DATE,
      }, 
      last_sell_time: {
        type: Sequelize.DATE,
      }, 
      calls_received_count: {
        type: Sequelize.INTEGER,
      }, 
      calls_made_count: {
        type: Sequelize.INTEGER,
      }, 
      calls_received_duration: {
        type: Sequelize.FLOAT,
      },
      calls_made_duration: {
        type: Sequelize.FLOAT,
      },
      total_spent: {
        type: Sequelize.FLOAT,
      },
      total_earned: {
        type: Sequelize.FLOAT,
      },
      // cam_permission: {
      //   type: Sequelize.BOOLEAN,
      // },
      // mic_permission: {
      //   type: Sequelize.BOOLEAN,
      // },
      // storage_permission: {
      //   type: Sequelize.BOOLEAN,
      // },
      // geo_permission: {
      //   type: Sequelize.BOOLEAN,
      // },
      // cookie_permission: {
      //   type: Sequelize.BOOLEAN,
      // },
      
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

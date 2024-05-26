'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status_nm: {
        type: Sequelize.ENUM("Active", "NonActive", "Deleted" ),
        defaultValue: "Active"
      },
      ranking_points: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      fk_helper_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_interest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ref_interests',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_suspend_start_reason_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ref_account_action_reasons',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      suspend_start: {
        type: Sequelize.DATE
      },
      suspend_start_plan: {
        type: Sequelize.DATE
      },
      fk_suspend_end_reason_id: {
        type: Sequelize.INTEGER,
        // allowNull: false
      },
      suspend_end_actual: {
        type: Sequelize.DATE,
      },
      fk_terminate_reason_id: {
        type: Sequelize.INTEGER,
        // allowNull: false
      },
      terminate_date: {
        type: Sequelize.DATE,
      },
      title: {
        type: Sequelize.STRING,
      },
      url_title: {
        type: Sequelize.STRING,
      },
      rate: {
        type: Sequelize.FLOAT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      fk_video_preference_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ref_video_preferences',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      url: {
        type: Sequelize.STRING,
      },
      shared_count: {
        type: Sequelize.INTEGER,
      },
      latest_avg_rating: {
        type: Sequelize.FLOAT,
      },
      latest_avg_call_length: {
        type: Sequelize.FLOAT,
      },
      calls_count: {
        type: Sequelize.INTEGER,
      },
      last_call_time: {
        type: Sequelize.DATE,
      },
      overall_avg_rating: {
        type: Sequelize.FLOAT,
      },
      total_call_duration: {
        type: Sequelize.FLOAT,
      },
      ratings_count: {
        type: Sequelize.INTEGER,
      },
      total_earned: {
        type: Sequelize.FLOAT,
      },
      occasional_update_time: {
        type: Sequelize.DATE,
      },
      time_since_last_call_occasional_update: {
        type: Sequelize.FLOAT,
      },
      general_score_occasional_update: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('services');
  }
};
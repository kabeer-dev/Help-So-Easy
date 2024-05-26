'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('searches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_login: {
        type: Sequelize.BOOLEAN
      },
      fk_buyer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      is_from_landing_page: {
        type: Sequelize.BOOLEAN
      },
      keywords: {
        type: Sequelize.STRING
      },
      filters: {
        type: Sequelize.JSON
      },
      total_results_count: {
        type: Sequelize.INTEGER
      },
      viewed_results_count: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('searches');
  }
};
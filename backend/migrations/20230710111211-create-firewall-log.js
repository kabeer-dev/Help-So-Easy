'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('firewall_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ip: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      middleware: {
        type: Sequelize.STRING
      },
      fk_user_id: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.TEXT
      },
      referrer: {
        type: Sequelize.STRING
      },
      request: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('firewall_logs');
  }
};
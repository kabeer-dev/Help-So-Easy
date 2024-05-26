"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("smtp_plugin", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      smtp_host: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      port: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      smtp_protocol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      security: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      smtp_user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_from: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("smtp_plugin");
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stripe_plugin", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      active_keys: {
        type: Sequelize.ENUM("test", "live"),
        allowNull: false,
      },
      test_public_key: {
        type: Sequelize.STRING,
      },
      test_secret_key: {
        type: Sequelize.STRING,
      },
      live_public_key: {
        type: Sequelize.STRING,
      },
      live_secret_key: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("stripe_plugin");
  },
};

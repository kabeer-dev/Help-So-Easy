"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("web_rtc_plugin", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      server: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
        comment: "0 => no, 1 => yes"
      },
      stun_url: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      turn_url_1: {
        type: Sequelize.STRING,
      },
      turn_url_2: {
        type: Sequelize.STRING,
      },
      turn_url_3: {
        type: Sequelize.STRING,
      },
      turn_url_4: {
        type: Sequelize.STRING,
      },
      turn_url_5: {
        type: Sequelize.STRING,
      },
      turn_url_6: {
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
    await queryInterface.dropTable("web_rtc_plugin");
  },
};

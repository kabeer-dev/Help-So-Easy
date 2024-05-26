'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("waiting_lists", {
      id: {
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true,
        type: Sequelize.INTEGER

      },
      // first_name: {
      //   type: Sequelize.STRING
      // },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      country: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("waiting_lists")
  }
};

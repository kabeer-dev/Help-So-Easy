'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ref_helper_availabilities', [
      {
        is_default: 1,
        description: 'I can be called and show my current status',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        is_default: 0,
        description: 'I can be called but show me offline',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        is_default: 0,
        description: 'I dont receive call and show me offline',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_helper_availabilities', null, {})
  }
};

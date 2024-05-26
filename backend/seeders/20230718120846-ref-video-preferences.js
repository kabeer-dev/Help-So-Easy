'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ref_video_preferences', [
      {
        description: 'I prefer to show my face by video chat',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'I prefer not to show my face or chat by audio only',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_video_preferences', null, {})
  }
};

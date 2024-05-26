'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ref_account_action_reasons', [
      {
        reason: 'I have another profile an d dont need this one.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        reason: 'Nobody visit my profile.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        reason: 'I am worried about the safety of my data.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        reason: 'ABC reasons are having.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        reason: 'Other',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_account_action_reasons', null, [])
  }
};

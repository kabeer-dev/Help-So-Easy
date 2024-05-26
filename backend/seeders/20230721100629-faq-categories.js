'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ref_faq_categories', [
      {
        name: 'General',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Buyers',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Helper',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_faq_categories', null, {})
  }
};

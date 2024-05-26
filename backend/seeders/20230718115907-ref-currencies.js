'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ref_currencies', [
      {
        status_nm: 1,
        is_default: 1,
        name: 'Dollar',
        currency_code: 'USD',
        symbol: '$',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_currencies', null, {})
  }
};

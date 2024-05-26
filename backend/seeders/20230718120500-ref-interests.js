'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ref_interests', [
      {
        name: 'TBD 1',
        image: 'image',
        sort: 1,
        description: 'This is the First Interest',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'TBD 2',
        image: 'image',
        sort: 2,
        description: 'This is the Second Interest',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('ref_interest', null, {})
  }
};

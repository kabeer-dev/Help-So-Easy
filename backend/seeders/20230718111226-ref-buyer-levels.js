'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('ref_buyer_levels', [
      {
        is_default: 1,
        level_name: 'Level 1',
        max_calls_made: 9,
        allowed_duration: 5.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        is_default: 0,
        level_name: 'Level 2',
        max_calls_made: 19,
        allowed_duration: 20.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        is_default: 0,
        level_name: 'Level 3',
        max_calls_made: 2000000,
        allowed_duration: 60.00,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ref_buyer_levels', null, {})
  }
};

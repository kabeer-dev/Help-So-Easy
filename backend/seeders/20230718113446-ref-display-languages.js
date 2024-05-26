'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ref_display_languages', [
      {
        name: 'English',
        flag: 'en',
        is_default: 1,
        sort: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      // {
      //   name: 'French',
      //   flag: 'fr',
      //   is_default: 0,
      //   sort: 2,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: 'Germany',
      //   flag: 'gr',
      //   is_default: 0,
      //   sort: 3,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: 'Italian',
      //   flag: 'itl',
      //   is_default: 0,
      //   sort: 4,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: 'Korean',
      //   flag: 'kr',
      //   is_default: 0,
      //   sort: 5,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: 'Norwegian',
      //   flag: 'nwg',
      //   is_default: 0,
      //   sort: 6,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: ' Polish',
      //   flag: 'pl',
      //   is_default: 0,
      //   sort: 7,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: 'Bengali',
      //   flag: 'bn',
      //   is_default: 0,
      //   sort: 8,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // }
    ])
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_display_languages', null, {})
  }
};

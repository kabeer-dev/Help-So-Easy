'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('smtp_plugin', [
      {
      smtp_host: 'mail.privateemail.com',
      port: 465,
      smtp_protocol: 'TLS',
      security: 'rd$6Y*o8Ud5ER2',
      smtp_user: 'no_reply@helpsoeasy.com',
      email_from : 'no_reply@helpsoeasy.com',
      created_at: new Date(),
      updated_at: new Date()
    }
      ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('smtp_plugin', null, {})
  }
};

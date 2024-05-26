'use strict';
var bcrypt = require("bcrypt");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

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

    const customer1 = await stripe.customers.create({
      email: 'tester1@example.com',
      name: 'Tester 1',
    });

    const customer2 = await stripe.customers.create({
      email: 'tester2@example.com',
      name: 'Tester 2',
    });

    const customer3 = await stripe.customers.create({
      email: 'tester3@example.com',
      name: 'Tester 3',
    });

    await queryInterface.bulkInsert('users', [
      {
        stripe_customer_id: customer1.id,
        is_admin: 1,
        first_name: 'Admin',
        last_name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync("123456", 8),
        nick_name: 'admin',
        verified_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        stripe_customer_id: customer2.id,
        is_admin: 0,
        first_name: 'Tester',
        last_name: '2',
        email: 'tester2@example.com',
        password: bcrypt.hashSync("123456", 8),
        nick_name: 'Tester 2',
        verified_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        stripe_customer_id: customer3.id,
        is_admin: 0,
        first_name: 'Tester',
        last_name: '3',
        email: 'tester3@example.com',
        password: bcrypt.hashSync("123456", 8),
        nick_name: 'Tester 3',
        verified_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
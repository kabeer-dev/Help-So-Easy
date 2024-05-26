"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payment_methods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      fk_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      status_cd: {
        comment: "Not in use for now",
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
      is_test: {
        comment: "0 => not test, 1 => is test",
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
      is_default: {
        comment: "0 => no, 1 => yes",
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
      type_send_receive_nm: {
        allowNull: false,
        type: Sequelize.ENUM("send", "receive"),
      },
      payment_gateway_nm: {
        defaultValue: "stripe",
        type: Sequelize.ENUM("stripe", "paypal"),
      },
      payment_method_type_nm: {
        allowNull: false,
        type: Sequelize.ENUM("credit_card", "debit_card", "bank_account"),
      },
      stripe_card_response: {
        type: Sequelize.JSON,
      },
      fingerprint: {
        type: Sequelize.STRING,
      },
      stripe_card_id: {
        type: Sequelize.STRING,
      },
      stripe_card_brand: {
        type: Sequelize.STRING,
      },
      stripe_card_country: {
        type: Sequelize.STRING,
      },
      stripe_card_exp_month: {
        type: Sequelize.INTEGER,
      },
      stripe_card_exp_year: {
        type: Sequelize.INTEGER,
      },
      stripe_card_funding: {
        type: Sequelize.STRING,
      },
      stripe_card_last4: {
        type: Sequelize.CHAR(4),
      },
      stripe_card_name: {
        type: Sequelize.STRING,
      },
      stripe_bank_response: {
        type: Sequelize.JSON,
      },
      stripe_bank_id: {
        type: Sequelize.STRING,
      },
      stripe_bank_account_holder_name: {
        type: Sequelize.STRING,
      },
      stripe_bank_account_holder_type: {
        type: Sequelize.STRING,
      },
      stripe_bank_name: {
        type: Sequelize.STRING,
      },
      stripe_bank_country: {
        type: Sequelize.STRING,
      },
      stripe_bank_currency: {
        type: Sequelize.STRING,
      },
      stripe_bank_last4: {
        type: Sequelize.CHAR(4),
      },
      stripe_bank_status: {
        type: Sequelize.STRING,
      },
      stripe_connect_account_response: {
        type: Sequelize.JSON,
      },
      stripe_connect_account_id: {
        type: Sequelize.STRING,
      },
      stripe_connect_account_status: {
        type: Sequelize.ENUM("active", "inactive"),
      },
      paypal_type_cd: {
        type: Sequelize.INTEGER,
      },
      paypal_email: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("payment_methods");
  },
};

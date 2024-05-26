"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("calls", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      overall_status_cd: {
        type: Sequelize.INTEGER,
      },

      fk_serach_result_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },

      fk_buyer_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },

      fk_helper_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },

      fk_service_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      rate: {
        type: Sequelize.FLOAT,
      },

      fk_buyer_payment_method_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      intent_start: {
        type: Sequelize.DATE,
      },
      intent_status: {
        type: Sequelize.STRING,
      },
      intent_id: {
        type: Sequelize.STRING,
      },
      intent_response: {
        type: Sequelize.JSON,
      },
      intent_secret: {
        type: Sequelize.STRING,
      },
      intent_duration: {
        type: Sequelize.FLOAT,
      },
      intent_helper_receive: {
        type: Sequelize.FLOAT,
      },
      intent_platform_fee: {
        type: Sequelize.FLOAT,
      },
      intent_federal_tax: {
        type: Sequelize.FLOAT,
      },
      intent_provincial_tax: {
        type: Sequelize.FLOAT,
      },
      intent_captured_excl_finance_fee: {
        type: Sequelize.FLOAT,
      },
      intent_captured: {
        type: Sequelize.FLOAT,
      },
      intent_finance_fee: {
        type: Sequelize.FLOAT,
      },
      intent_platform_receive_total: {
        type: Sequelize.FLOAT,
      },
      intent_hold: {
        type: Sequelize.FLOAT,
      },
      call_start: {
        type: Sequelize.DATE,
      },
      call_end: {
        type: Sequelize.DATE,
      },

      fk_call_end_reason_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      trans_status: {
        type: Sequelize.INTEGER,
      },
      trans_id: {
        type: Sequelize.STRING,
      },
      trans_response: {
        type: Sequelize.JSON,
      },
      trans_duration: {
        type: Sequelize.FLOAT,
      },
      trans_helper_receive: {
        type: Sequelize.FLOAT,
      },
      trans_platform_fee_calculated: {
        type: Sequelize.FLOAT,
      },
      trans_platform_fee_actual: {
        type: Sequelize.FLOAT,
      },
      trans_federal_tax: {
        type: Sequelize.FLOAT,
      },
      trans_provincial_tax: {
        type: Sequelize.FLOAT,
      },
      trans_captured_excl_finance_fee: {
        type: Sequelize.FLOAT,
      },
      trans_captured: {
        type: Sequelize.FLOAT,
      },
      trans_finance_fee_calculated: {
        type: Sequelize.FLOAT,
      },
      trans_finance_fee_actual: {
        type: Sequelize.FLOAT,
      },
      trans_platform_receive_total: {
        type: Sequelize.FLOAT,
      },
      trans_return_to_buyer: {
        type: Sequelize.FLOAT,
      },

      fk_trans_helper_payment_method_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },

      fk_trans_platform_payment_method_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      trans_helper_invoice_number: {
        type: Sequelize.BIGINT,
      },
      trans_buyer_invoice_number: {
        type: Sequelize.BIGINT,
      },
      internal_remarks: {
        type: Sequelize.TEXT,
      },
      mic_duration: {
        type: Sequelize.FLOAT,
      },
      cam_duration: {
        type: Sequelize.FLOAT,
      },
      chart_count: {
        type: Sequelize.INTEGER,
      },
      shared_files_count: {
        type: Sequelize.INTEGER,
      },
      review_rating: {
        type: Sequelize.INTEGER,
      },
      review_comment: {
        type: Sequelize.TEXT,
      },
      device: {
        type: Sequelize.TEXT,
      },
      device_type: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("calls");
  },
};

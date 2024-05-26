"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes, commonFields) => {
  class Call extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Call.belongsTo(models.User, {
        foreignKey: "fk_buyer_id",
        as: "buyer",
      });
      Call.belongsTo(models.User, {
        foreignKey: "fk_helper_id",
        as: "helper",
      });
      Call.belongsTo(models.PaymentMethod, {
        foreignKey: "fk_buyer_payment_method_id",
        as: "buyerPaymentMethod",
      });
      Call.belongsTo(models.PaymentMethod, {
        foreignKey: "fk_trans_helper_payment_method_id",
        as: "helperPaymentMethod",
      });
      Call.belongsTo(models.Service, {
        foreignKey: "fk_service_id",
      });
    }
  }
  Call.init(
    {
      overall_status_cd: {
        type: DataTypes.INTEGER,
      },
      fk_serach_result_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      fk_buyer_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      fk_helper_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      fk_service_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      rate: {
        type: DataTypes.FLOAT,
      },
      fk_buyer_payment_method_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      intent_start: {
        type: DataTypes.DATE,
      },
      intent_status: {
        type: DataTypes.STRING,
      },
      intent_id: {
        type: DataTypes.STRING,
      },
      intent_response: {
        type: DataTypes.JSON,
      },
      intent_secret: {
        type: DataTypes.STRING,
      },
      intent_duration: {
        type: DataTypes.FLOAT,
      },
      intent_helper_receive: {
        type: DataTypes.FLOAT,
      },
      intent_platform_fee: {
        type: DataTypes.FLOAT,
      },
      intent_federal_tax: {
        type: DataTypes.FLOAT,
      },
      intent_provincial_tax: {
        type: DataTypes.FLOAT,
      },
      intent_captured_excl_finance_fee: {
        type: DataTypes.FLOAT,
      },
      intent_captured: {
        type: DataTypes.FLOAT,
      },
      intent_finance_fee: {
        type: DataTypes.FLOAT,
      },
      intent_platform_receive_total: {
        type: DataTypes.FLOAT,
      },
      intent_hold: {
        type: DataTypes.FLOAT,
      },
      call_start: {
        type: DataTypes.DATE,
      },
      call_end: {
        type: DataTypes.DATE,
      },

      fk_call_end_reason_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      trans_status: {
        type: DataTypes.INTEGER,
      },
      trans_id: {
        type: DataTypes.STRING,
      },
      trans_response: {
        type: DataTypes.JSON,
      },
      trans_duration: {
        type: DataTypes.FLOAT,
      },
      trans_helper_receive: {
        type: DataTypes.FLOAT,
      },
      trans_platform_fee_calculated: {
        type: DataTypes.FLOAT,
      },
      trans_platform_fee_actual: {
        type: DataTypes.FLOAT,
      },
      trans_federal_tax: {
        type: DataTypes.FLOAT,
      },
      trans_provincial_tax: {
        type: DataTypes.FLOAT,
      },
      trans_captured_excl_finance_fee: {
        type: DataTypes.FLOAT,
      },
      trans_captured: {
        type: DataTypes.FLOAT,
      },
      trans_finance_fee_calculated: {
        type: DataTypes.FLOAT,
      },
      trans_finance_fee_actual: {
        type: DataTypes.FLOAT,
      },
      trans_platform_receive_total: {
        type: DataTypes.FLOAT,
      },
      trans_return_to_buyer: {
        type: DataTypes.FLOAT,
      },

      fk_trans_helper_payment_method_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },

      fk_trans_platform_payment_method_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      trans_helper_invoice_number: {
        type: DataTypes.BIGINT,
      },
      trans_buyer_invoice_number: {
        type: DataTypes.BIGINT,
      },
      internal_remarks: {
        type: DataTypes.TEXT,
      },
      mic_duration: {
        type: DataTypes.FLOAT,
      },
      cam_duration: {
        type: DataTypes.FLOAT,
      },
      chart_count: {
        type: DataTypes.INTEGER,
      },
      shared_files_count: {
        type: DataTypes.INTEGER,
      },
      review_rating: {
        type: DataTypes.INTEGER,
      },
      review_comment: {
        type: DataTypes.TEXT,
      },
      device: {
        type: DataTypes.TEXT,
      },
      device_type: {
        type: DataTypes.TEXT,
      },
      ...commonFields, // Include the common fields
    },
    {
      sequelize,
      modelName: "Call",
      tableName: "calls",
    }
  );
  return Call;
};

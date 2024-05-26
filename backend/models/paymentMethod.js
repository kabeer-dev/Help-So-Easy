"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes, commonFields) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentMethod.belongsTo(models.User, {
        foreignKey: "fk_user_id",
        as: "user",
      });
    }
  }
  PaymentMethod.init(
    {
      fk_user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      status_cd: {
        type: DataTypes.TINYINT,
      },
      is_test: {
        type: DataTypes.TINYINT,
      },
      is_default: {
        type: DataTypes.TINYINT,
      },
      type_send_receive_nm: {
        allowNull: false,
        type: DataTypes.ENUM("send", "receive"),
      },
      payment_gateway_nm: {
        defaultValue: "stripe",
        type: DataTypes.ENUM("stripe", "paypal"),
      },
      payment_method_type_nm: {
        allowNull: false,
        type: DataTypes.ENUM("credit_card", "debit_card", "bank_account"),
      },
      stripe_card_response: {
        type: DataTypes.JSON,
      },
      fingerprint: {
        type: DataTypes.STRING,
      },
      stripe_card_id: {
        type: DataTypes.STRING,
      },
      stripe_card_brand: {
        type: DataTypes.STRING,
      },
      stripe_card_country: {
        type: DataTypes.STRING,
      },
      stripe_card_exp_month: {
        type: DataTypes.INTEGER,
      },
      stripe_card_exp_year: {
        type: DataTypes.INTEGER,
      },
      stripe_card_funding: {
        type: DataTypes.STRING,
      },
      stripe_card_last4: {
        type: DataTypes.CHAR(4),
      },
      stripe_card_name: {
        type: DataTypes.STRING,
      },
      stripe_bank_response: {
        type: DataTypes.JSON,
      },
      stripe_bank_id: {
        type: DataTypes.STRING,
      },
      stripe_bank_account_holder_name: {
        type: DataTypes.STRING,
      },
      stripe_bank_account_holder_type: {
        type: DataTypes.STRING,
      },
      stripe_bank_name: {
        type: DataTypes.STRING,
      },
      stripe_bank_country: {
        type: DataTypes.STRING,
      },
      stripe_bank_currency: {
        type: DataTypes.STRING,
      },
      stripe_bank_last4: {
        type: DataTypes.CHAR(4),
      },
      stripe_bank_status: {
        type: DataTypes.STRING,
      },
      stripe_connect_account_response: {
        type: DataTypes.JSON,
      },
      stripe_connect_account_id: {
        type: DataTypes.STRING,
      },
      stripe_connect_account_status: {
        type: DataTypes.ENUM("active", "inactive"),
      },
      paypal_type_cd: {
        type: DataTypes.INTEGER,
      },
      paypal_email: {
        type: DataTypes.STRING,
      },
      ...commonFields, // Include the common fields
    },
    {
      sequelize,
      modelName: "PaymentMethod",
      tableName: "payment_methods",
    }
  );
  return PaymentMethod;
};

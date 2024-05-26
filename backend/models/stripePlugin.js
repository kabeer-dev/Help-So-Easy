'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class StripePlugin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
  }
  StripePlugin.init({    
    activeKeys: {
      type: DataTypes.ENUM('test', 'live'),
      field: "active_keys"
    },
    testPublicKey: {
      type: DataTypes.STRING,
      field: "test_public_key"
    },
    testSecretKey: {
      type: DataTypes.STRING,
      field: "test_secret_key"
    },
    livePublicKey: {
      type: DataTypes.STRING,
      field: "live_public_key"
    },
    liveSecretKey: {
      type: DataTypes.STRING,
      field: "live_secret_key"
    },
    ...commonFields, // Include the common fields
  },{
    sequelize,
    modelName: 'StripePlugin',
    tableName: 'stripe_plugin'
  });


  return StripePlugin;
};
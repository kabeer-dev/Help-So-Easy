'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class WebRtcPlugin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
  }
  WebRtcPlugin.init({    
    server: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.TINYINT,
      field: "is_active",
      defaultValue: 0
    },
    stunUrl: {
      type: DataTypes.STRING,
      field: "stun_url"
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
      },
    turnUrl1: {
      type: DataTypes.STRING,
      field: "turn_url_1"
    },
    turnUrl2: {
        type: DataTypes.STRING,
        field: "turn_url_2"
      },
      turnUrl3: {
        type: DataTypes.STRING,
        field: "turn_url_3"
      },
      turnUrl4: {
        type: DataTypes.STRING,
        field: "turn_url_4"
      },
      turnUrl5: {
        type: DataTypes.STRING,
        field: "turn_url_5"
      },
      turnUrl6: {
        type: DataTypes.STRING,
        field: "turn_url_6"
      },
    ...commonFields, // Include the common fields
  },{
    sequelize,
    modelName: 'WebRtcPlugin',
    tableName: 'web_rtc_plugin'
  });


  return WebRtcPlugin;
};
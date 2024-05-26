'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class SmtpPlugin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
  }
  SmtpPlugin.init({    
    smtpHost: {
      type: DataTypes.STRING,
      field: "smtp_host"
    },
    port: {
      type: DataTypes.INTEGER
    },
    smtpProtocol: {
      type: DataTypes.STRING,
      field: "smtp_protocol"
    },
    security: {
      type: DataTypes.STRING
    },
    smtpUser: {
      type: DataTypes.STRING,
      field: "smtp_user"
    },

    emailFrom: {
      type: DataTypes.STRING,
      field: "email_from"
    },
    ...commonFields, // Include the common fields
  },{
    sequelize,
    modelName: 'SmtpPlugin',
    tableName: 'smtp_plugin'
  });


  return SmtpPlugin;
};
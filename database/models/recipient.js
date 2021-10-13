'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipient.belongsTo(models.Bank, {foreignKey: 'bankId'});
    }
  };
  Recipient.init({
    name: DataTypes.STRING,
    cpfCnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    agency: DataTypes.STRING,
    agencyDigit: DataTypes.STRING,
    account: DataTypes.STRING,
    accountDigit: DataTypes.STRING,
    accountType: DataTypes.STRING,
    validated: DataTypes.BOOLEAN,
    bankId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipient',
  });
  return Recipient;
};
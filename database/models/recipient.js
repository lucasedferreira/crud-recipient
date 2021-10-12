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
      Recipient.belongsTo(models.Bank, {foreignKey: 'bank_id', as: 'bank'});
    }
  };
  Recipient.init({
    name: DataTypes.STRING,
    cpf_cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    agency: DataTypes.STRING,
    agency_digit: DataTypes.STRING,
    account: DataTypes.STRING,
    account_digit: DataTypes.STRING,
    account_type: DataTypes.STRING,
    validated: DataTypes.BOOLEAN,
    bank_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipient',
  });
  return Recipient;
};
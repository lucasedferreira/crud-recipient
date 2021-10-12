'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bank.hasMany(models.Recipient, {as: 'recipients'});
    }
  };
  Bank.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bank',
  });
  return Bank;
};
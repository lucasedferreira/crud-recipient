'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recipients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cpf_cnpj: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      bank: {
        type: Sequelize.STRING
      },
      agency: {
        type: Sequelize.STRING
      },
      agency_digit: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      account_digit: {
        type: Sequelize.STRING
      },
      account_type: {
        type: Sequelize.STRING
      },
      validated: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipients');
  }
};
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
      cpfCnpj: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      agency: {
        type: Sequelize.STRING
      },
      agencyDigit: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      accountDigit: {
        type: Sequelize.STRING
      },
      accountType: {
        type: Sequelize.STRING
      },
      validated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      bankId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Banks',
          key: 'id'
        }
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
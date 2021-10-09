const Sequelize = require('sequelize');
const database = require('../../../config/database');

const Recipient = database.define('recipient', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bank: {
        type: Sequelize.STRING,
        allowNull: false
    },
    agency: {
        type: Sequelize.STRING,
        allowNull: false
    },
    agency_digit: {
        type: Sequelize.STRING,
        allowNull: true
    },
    account: {
        type: Sequelize.STRING,
        allowNull: false
    },
    account_digit: {
        type: Sequelize.STRING,
        allowNull: true
    },
    account_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    validated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Recipient;
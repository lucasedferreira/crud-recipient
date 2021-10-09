const Sequelize = require('sequelize');
const sequelize = new Sequelize('transfeera', 'root', 'changeme', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'changeme',
    database : 'transfeera'
});

connection.connect();

module.exports = connection;
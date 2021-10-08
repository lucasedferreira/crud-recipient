require('dotenv').config({path: '.env.testing'});
console.log(process.env.DB_NAME);
module.exports = {
    databaseOptions: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    createDatabase: false,
    truncateDatabase: true
};
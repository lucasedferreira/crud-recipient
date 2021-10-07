const mysql = require('../../../config/database');

let recipientRepository = {};

recipientRepository.create = (recipient) => {
    mysql.query('INSERT INTO recipients SET ?', recipient, (error, results, fields) => {
        if (error) throw error;
    });
}

module.exports = recipientRepository;
const mysql = require('../../../config/database');

const table = 'recipients';
let recipientRepository = {};

recipientRepository.create = (recipient) => {
    mysql.query(`INSERT INTO ${table} SET ?`, recipient, (error, results, fields) => {
        if (error) throw error;
    });
}

recipientRepository.delete = (recipientID) => {
    let recipients = [];
    mysql.query(`DELETE FROM ${table} WHERE id = ?`, recipientID, (error, results, fields) => {
        if (error) throw error;
        recipients = results;
    });
    return recipients;
}

recipientRepository.get = (recipients) => {
    mysql.query(`SELECT * FROM ${table}`, (err, rows) => {
        recipients(rows);
    });
}

module.exports = recipientRepository;
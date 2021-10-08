const mysql = require('../../../config/database');

const table = 'recipients';
let recipientRepository = {};

recipientRepository.create = (recipient) => {
    return new Promise((resolve, reject) => {
        try {
            mysql.query(`INSERT INTO ${table} SET ?`, recipient, (error, results, fields) => {
                if (error) throw error;
                resolve();
            });
        }catch {
            reject();
        }
    });
}

recipientRepository.update = (recipientID, recipient) => {
    let fieldsValuesForSQL = [];
    for (const [field, value] of Object.entries(recipient)) {
        fieldsValuesForSQL.push(`${field} = '${value}'`);
    }

    mysql.query(`UPDATE ${table} SET ${fieldsValuesForSQL.join(', ')} WHERE id = ?`, recipientID, (error, results, fields) => {
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
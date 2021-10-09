const model = require('./Model');

let recipientRepository = {};

recipientRepository.create = async (recipient) => {
    return await model.create(recipient);
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

recipientRepository.get = async () => {
    return await model.findAll();
}

module.exports = recipientRepository;
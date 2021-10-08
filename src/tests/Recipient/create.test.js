const mysql = require('../../config/database');
const RecipientService = require('../../app/Domains/Recipient/Service');

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@example.com',
    cpf_cnpj: '084.510.119-69',
    agency: '0742',
    agency_digit: '',
    account: '1235999',
    account_digit: '8',
    account_type: 'CONTA_FACIL',
    bank: '001'
}

describe('Creating Recipients', () => {
    it('Create a recipient successfully', done => {
        RecipientService.create(dummyRecipient).then(() => {
            global.db.query("SELECT * FROM recipients ORDER BY id DESC LIMIT 1", (err, results) => {
                let lastRecipient = JSON.parse(JSON.stringify(results[0]));
                expect(lastRecipient).toStrictEqual({
                    id: 1,
                    name: 'Jeon Jung-kook',
                    email: 'jungkook@example.com',
                    cpf_cnpj: '08451011969',
                    agency: '0742',
                    agency_digit: '',
                    account: '1235999',
                    account_digit: '8',
                    account_type: 'CONTA_FACIL',
                    bank: '001',
                    validated: 0
                });
            });
            done();
        });


        // getLastRecipient(recipient => {
            
        // });
    });
});

const getLastRecipient = (recipient) => {
    mysql.query('SELECT * FROM recipients ORDER BY id DESC LIMIT 1', (err, results) => {
        let lastRecipient = results[0];
        recipient(lastRecipient);
    });
}
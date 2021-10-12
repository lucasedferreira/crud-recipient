const RecipientParser = require('../../../../src/app/Domains/Recipient/Parser');

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@example.com',
    cpf_cnpj: '084.510.119-69',
    agency: '0742',
    agency_digit: '',
    account: '1235999',
    account_digit: '8',
    account_type: 'CONTA_POUPANCA',
    bank_id: 1,
    unnecessaryField: 'bangtan sonyodan'
}

describe('Recipient Parser', () => {
    it('Parser to create', () => {
        let recipient = dummyRecipient;
        const parsedRecipient = RecipientParser.parseRecipient(recipient);

        expect(parsedRecipient).toStrictEqual({
            name: 'Jeon Jung-kook',
            email: 'jungkook@example.com',
            cpf_cnpj: '08451011969',
            agency: '0742',
            agency_digit: '',
            account: '1235999',
            account_digit: '8',
            account_type: 'CONTA_POUPANCA',
            bank_id: 1
        });
    });
});
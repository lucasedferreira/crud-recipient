const RecipientParser = require('../../../../src/app/Domains/Recipient/Parser');

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@example.com',
    cpfCnpj: '084.510.119-69',
    agency: '0742',
    agencyDigit: '',
    account: '1235999',
    accountDigit: '8',
    accountType: 'CONTA_POUPANCA',
    bankId: 1,
    unnecessaryField: 'bangtan sonyodan'
}

describe('Recipient Parser', () => {
    it('Parser to create', () => {
        let recipient = dummyRecipient;
        const parsedRecipient = RecipientParser.parseRecipient(recipient);

        expect(parsedRecipient).toStrictEqual({
            name: 'Jeon Jung-kook',
            email: 'jungkook@example.com',
            cpfCnpj: '08451011969',
            agency: '0742',
            agencyDigit: '',
            account: '1235999',
            accountDigit: '8',
            accountType: 'CONTA_POUPANCA',
            bankId: 1
        });
    });
});
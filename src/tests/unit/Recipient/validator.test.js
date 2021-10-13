const RecipientValidator = require('../../../app/Domains/Recipient/Validator');

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@example.com',
    cpfCnpj: '08451011969',
    agency: '0742',
    agencyDigit: '',
    account: '1235999',
    accountDigit: '8',
    accountType: 'CONTA_POUPANCA',
    bankId: 1
}

describe('Recipient Validator', () => {
    it('All set', () => {
        RecipientValidator.checkRecipient(dummyRecipient);
    });

    it('Name is not set', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        delete recipient.name;

        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            expect(e.message).toBe('Name is required.');
        }
    });

    it('Invalid CPF', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.cpfCnpj = '11111111111';

        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            expect(e.message).toBe('CPF is not valid.');
        }
    });

    it('Banco do Brasil Account is invalid', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.account = '123456789';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Account is not valid.');
    });

    it('General Account is invalid', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.account = '1234567891011';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Account is not valid.');
    });

    it('Account Type is not allowed in general bank', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.bankId = 2;
        recipient.accountType = 'CONTA_FACIL';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Account type is not allowed.');
    });
});
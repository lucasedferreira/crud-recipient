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

    it('Email is not set', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        delete recipient.email;

        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            expect(e.message).toBe('Email is required.');
        }
    });

    it('Bank is not set', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        delete recipient.bankId;

        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            expect(e.message).toBe('BankId is required.');
        }
    });

    it('CPF and CNPJ are not set', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        delete recipient.cpfCnpj;

        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            expect(e.message).toBe('CpfCnpj is required.');
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

    it('Invalid CNPJ', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.cpfCnpj = '1122334455667';

        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            expect(e.message).toBe('CNPJ is not valid.');
        }
    });

    it('Agency is not set', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        delete recipient.agency;

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Agency and digit is required.');
    });

    it('Agency is invalid', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.agency = '<jimin3';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Agency is not valid.');
    });

    it('Agency Digit is invalid', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.agencyDigit = '<jhope3';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Agency digit is not valid.');
    });

    it('Account is not set', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        delete recipient.account;

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Account and digit is required.');
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

    it('Banco do Brasil Account Digit is invalid', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.accountDigit = '<V3';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Account digit is not valid.');
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

    it('General Account Digit is invalid', () => {
        let recipient = JSON.parse(JSON.stringify(dummyRecipient));
        recipient.accountDigit = '<jin3';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Account digit is not valid.');
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
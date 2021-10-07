const RecipientValidator = require('./src/app/Domains/Recipient/Validator');
const RecipientParser = require('./src/app/Domains/Recipient/Parser');

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@example.com',
    cpf_cnpj: '084.510.119-69',
    agency: '0742',
    agency_digit: '',
    account: '1235999',
    account_digit: '8',
    account_type: 'CONTA_POUPANCA',
    bank: '001'
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
        recipient.bank = '756';
        recipient.account_type = 'CONTA_FACIL';

        let errorMessage = '';
        try {
            RecipientValidator.checkRecipient(recipient);
        }catch (e) {
            errorMessage = e.message;
        }
        expect(errorMessage).toBe('Account type is not allowed.');
    });
});

describe('Recipient Parser', () => {
    it('Parser to create', () => {
        let recipient = dummyRecipient;
        recipient.unnecessaryField = 'fool';

        const parsedRecipient = RecipientParser.parserCreate(recipient);

        expect(parsedRecipient).toStrictEqual({
            name: 'Jeon Jung-kook',
            email: 'jungkook@example.com',
            cpf_cnpj: '08451011969',
            agency: '0742',
            agency_digit: '',
            account: '1235999',
            account_digit: '8',
            account_type: 'CONTA_POUPANCA',
            bank: '001'
        });
    })
})
const RecipientService = require('../../../app/Domains/Recipient/Service');

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@transfeera.com.br',
    cpf_cnpj: '084.510.119-69',
    agency: '0742',
    agency_digit: '',
    account: '1235999',
    account_digit: '8',
    account_type: 'CONTA_FACIL',
    bank: '001'
}

describe('Creating Recipients', () => {
    it('Create a recipient successfully', async () => {
        let createdRecipient = await RecipientService.create(dummyRecipient);

        expect(createdRecipient.id).toBeTruthy();
        expect(createdRecipient.name).toEqual('Jeon Jung-kook');
        expect(createdRecipient.email).toEqual('jungkook@transfeera.com.br');
        expect(createdRecipient.cpf_cnpj).toEqual('08451011969');
        expect(createdRecipient.agency).toEqual('0742');
        expect(createdRecipient.agency_digit).toEqual('');
        expect(createdRecipient.account).toEqual('1235999');
        expect(createdRecipient.account_digit).toEqual('8');
        expect(createdRecipient.account_type).toEqual('CONTA_FACIL');
        expect(createdRecipient.bank).toEqual('001');
    });
});
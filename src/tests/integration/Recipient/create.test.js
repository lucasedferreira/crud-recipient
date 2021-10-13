const app = require('../../../app');
const request = require('supertest');

const recipientsSetup = require('./setup');
beforeAll(recipientsSetup.createDefaultBanks);

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@transfeera.com.br',
    cpf_cnpj: '08451011969',
    agency: '0742',
    agency_digit: '',
    account: '1235999',
    account_digit: '8',
    account_type: 'CONTA_FACIL',
    bank_id: 1
}

describe('Creating Recipients', () => {
    it('Create a recipient successfully', async () => {
        const response = await request(app)
            .post("/recipient")
            .send(dummyRecipient)
            .expect(201);

        let createdRecipient = response.body;
        expect(createdRecipient.id).toBeTruthy();
        expect(createdRecipient.name).toEqual('Jeon Jung-kook');
        expect(createdRecipient.email).toEqual('jungkook@transfeera.com.br');
        expect(createdRecipient.cpf_cnpj).toEqual('08451011969');
        expect(createdRecipient.agency).toEqual('0742');
        expect(createdRecipient.agency_digit).toEqual('');
        expect(createdRecipient.account).toEqual('1235999');
        expect(createdRecipient.account_digit).toEqual('8');
        expect(createdRecipient.account_type).toEqual('CONTA_FACIL');
        expect(createdRecipient.bank_id).toEqual(1);
    });
});
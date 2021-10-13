const app = require('../../../app');
const request = require('supertest');

const recipientsSetup = require('./setup');
beforeAll(recipientsSetup.createDefaultBanks);

const dummyRecipient = {
    name: 'Jeon Jung-kook',
    email: 'jungkook@transfeera.com.br',
    cpfCnpj: '08451011969',
    agency: '0742',
    agencyDigit: '',
    account: '1235999',
    accountDigit: '8',
    accountType: 'CONTA_FACIL',
    bankId: 1
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
        expect(createdRecipient.cpfCnpj).toEqual('08451011969');
        expect(createdRecipient.agency).toEqual('0742');
        expect(createdRecipient.agencyDigit).toEqual('');
        expect(createdRecipient.account).toEqual('1235999');
        expect(createdRecipient.accountDigit).toEqual('8');
        expect(createdRecipient.accountType).toEqual('CONTA_FACIL');
        expect(createdRecipient.bankId).toEqual(1);
    });
});
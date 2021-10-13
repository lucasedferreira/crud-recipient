const app = require('../../../app');
const request = require('supertest');

const recipientsSetup = require('./setup');
beforeAll(recipientsSetup.createManyRandomRecipients);

describe('Consulting a specific recipient', () => {
    it('Get successfully', async () => {
        const response = await request(app)
            .get("/recipient/1")
            .expect(200);

        let recipient = response.body;
        expect(recipient.id).toBeTruthy();
        expect(recipient.name).toEqual('Kim Nam-joon');
        expect(recipient.email).toEqual('rapmonster@transfeera.com.br');
        expect(recipient.cpf_cnpj).toEqual('08451011969');
        expect(recipient.agency).toEqual('3317');
        expect(recipient.agency_digit).toEqual('7');
        expect(recipient.account).toEqual('114455');
        expect(recipient.account_digit).toEqual('6');
        expect(recipient.account_type).toEqual('CONTA_CORRENTE');
        expect(recipient.bank_id).toEqual(2);
    });
});
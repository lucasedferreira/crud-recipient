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
        expect(recipient.cpfCnpj).toEqual('08451011969');
        expect(recipient.agency).toEqual('3317');
        expect(recipient.agencyDigit).toEqual('7');
        expect(recipient.account).toEqual('114455');
        expect(recipient.accountDigit).toEqual('6');
        expect(recipient.accountType).toEqual('CONTA_CORRENTE');
        expect(recipient.bankId).toEqual(2);
    });
});
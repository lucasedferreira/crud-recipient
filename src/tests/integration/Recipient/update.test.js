const app = require('../../../app');
const request = require('supertest');

const RecipientModel = require('../../../../database/models').Recipient;

const recipientsSetup = require('./setup');
beforeAll(recipientsSetup.createManyRandomRecipients);

describe('Updating Recipients', () => {
    it('Update a recipient successfully', async () => {
        const response = await request(app)
            .put("/recipient/1")
            .send({
                name: "Kim Nam-joon",
                email: "rapmonster@transfeera.com.br",
                cpfCnpj: "08451011969",
                agency: "1234",
                agencyDigit: "7",
                account: "225566",
                accountDigit: "7",
                accountType: "CONTA_CORRENTE",
                bankId: 2
            })
            .expect(201);

        let updatedRecipient = await RecipientModel.findByPk(1);
        expect(updatedRecipient.id).toEqual(1);
        expect(updatedRecipient.name).toEqual('Kim Nam-joon');
        expect(updatedRecipient.email).toEqual('rapmonster@transfeera.com.br');
        expect(updatedRecipient.cpfCnpj).toEqual('08451011969');
        expect(updatedRecipient.agency).toEqual('1234');
        expect(updatedRecipient.agencyDigit).toEqual('7');
        expect(updatedRecipient.account).toEqual('225566');
        expect(updatedRecipient.accountDigit).toEqual('7');
        expect(updatedRecipient.accountType).toEqual('CONTA_CORRENTE');
        expect(updatedRecipient.bankId).toEqual(2);
    });
});
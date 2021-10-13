const app = require('../../../app');
const request = require('supertest');

const RecipientModel = require('../../../../database/models').Recipient;

const recipientsSetup = require('./setup');
beforeAll(recipientsSetup.createManyRandomRecipients);

describe('Deleting Recipients', () => {
    it('Delete a recipient successfully', async () => {
        const response = await request(app)
            .delete("/recipient/1")
            .expect(200);

        let recipientInDatabase = await RecipientModel.findByPk(1);
        expect(recipientInDatabase).toBeNull();
    });
});
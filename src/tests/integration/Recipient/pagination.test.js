const app = require('../../../app');

const recipientsSetup = require('./setup');
const supertest = require('supertest');

beforeAll(recipientsSetup.createManyRandomRecipients);

describe('Recipient list pagination', () => {
    it('Get 20 recipients', async () => {
        const response = await supertest(app)
            .post("/recipients/0/20")
            .expect(200);

        expect(response.body.rows.length).toEqual(20);
    });

    it('Get recipients filtering by 08451011969', async () => {
        const response = await supertest(app)
            .post("/recipients/0/20")
            .send({searchFor: '08451011969'});

        expect(response.body.count).toEqual(1);
    });
});
const app = require('../../../app');
const supertest = require('supertest');

const recipientsSetup = require('./setup');
beforeAll(recipientsSetup.createManyRandomRecipients);

describe('Recipient list pagination', () => {
    it('Get 20 recipients', async () => {
        const response = await supertest(app)
            .post("/recipients/0/20")
            .expect(200);

        expect(response.body.rows.length).toEqual(20);
    });

    it('Get recipients second page', async () => {
        const response = await supertest(app)
            .post("/recipients/20/40")
            .expect(200);

        expect(response.body.rows.length).toEqual(10);
    });

    it('Get recipients filtering by CPF', async () => {
        const response = await supertest(app)
            .post("/recipients/0/20")
            .send({searchFor: '08451011969'});

        expect(response.body.count).toEqual(1);
    });

    it('Get recipients filtering by Name', async () => {
        const response = await supertest(app)
            .post("/recipients/0/20")
            .send({searchFor: 'Kim Nam-joon'});

        expect(response.body.count).toEqual(1);
    });
});
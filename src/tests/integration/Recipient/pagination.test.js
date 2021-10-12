const RecipientRepository = require('../../../app/Domains/Recipient/Repository');

describe('Recipient list pagination', () => {
    it('Get 20 recipients', async () => {
        let recipients = await RecipientRepository.getPaginated(0, 20);
        expect(recipients.count).toEqual(0);
    });

    it('Get recipients filtering by 08451011969', async () => {
        let recipients = await RecipientRepository.getPaginated(0, 10, '08451011969');
        expect(recipients.count).toEqual(0);
    });
});
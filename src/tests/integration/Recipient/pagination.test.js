// const RecipientRepository = require('../../../app/Domains/Recipient/Repository');

// jest.mock('../../app/Domains/Recipient/Model', () => {
//     return require('../../../__mocks__/recipient');
// });

// describe('Recipient list pagination', () => {
//     it('Get 20 recipients', async () => {
//         let recipients = await RecipientRepository.getPaginated(0, 20);
//         expect(recipients.count).toEqual(20);
//     });

//     it('Get recipients filtering by 08451011969', async () => {
//         let recipients = await RecipientRepository.getPaginated(0, 10, '08451011969');
//         expect(recipients.count).toEqual(1);
//     });
// });
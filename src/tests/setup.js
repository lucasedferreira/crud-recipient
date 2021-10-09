require('dotenv').config({path: '.env.testing'});

// (async () => {
//     const database = require('../../src/config/database');

//     try {
//         await database.sync();
//     } catch (error) {
//         console.log(error);
//     }
// })();

// const database = require('../../src/config/database');
// beforeAll(async() => {
//     try {
//         await database.sync();
//     } catch (error) {
//         console.log(error);
//     }
// });

// afterAll(() => {
//     database.drop();
// });
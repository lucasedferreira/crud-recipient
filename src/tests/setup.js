const models = require('../../database/models');

beforeAll(async () => {
    await models.sequelize.sync({ force: true });
});

afterAll(async () => {
    await models.sequelize.close();
});
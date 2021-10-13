const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const { cpf } = require('cpf-cnpj-validator');

const RecipientMock = dbMock.define('recipient', {
    name: 'Jeon Jung-kook',
    email: 'jungkook@example.com',
    cpf_cnpj: '08451011969',
    agency: '0742',
    agency_digit: '',
    account: '1235999',
    account_digit: '8',
    account_type: 'CONTA_CORRENTE',
    bank_id: 1,
    validated: true
});

RecipientMock.$queryInterface.$useHandler((query, queryOptions, done) => {
    if (query === 'findAndCountAll') {
        const result = [];
        const limit = queryOptions[0].limit ?? 10;
        for (let x = 0; x < limit; x++) {
            result.push(RecipientMock.build({
                id: x,
                nome: `recipient ${x}`,
                email: `recipient${x}@transfeera.com.br`,
                cpf_cnpj: cpf.generate(),
                agency: x+1000,
                agency_digit: `7`,
                account: x+15000,
                account_digit: `8`,
                account_type: `CONTA_FACIL`,
                bank_id: 1,
                validated: false,
                createdAt: '2021-10-09 13:28:30',
                updatedAt: '2021-10-09 13:28:30'
            }));
        }

        return {
            "count": limit,
            "rows": result
        };
    }
});

module.exports = RecipientMock;
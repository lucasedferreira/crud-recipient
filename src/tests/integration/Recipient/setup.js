const faker = require('faker');
const { cpf, cnpj } = require('cpf-cnpj-validator');
require('randexp').sugar();

const RecipientModel = require('../../../../database/models').Recipient;
const BankModel = require('../../../../database/models').Bank;

let recipientsSetup = {};

recipientsSetup.createManyRandomRecipients = async () => {
    recipientsSetup.createDefaultBanks();

    let fakeRecipients = [{
        name: "Kim Nam-joon",
        email: "rapmonster@transfeera.com.br",
        cpf_cnpj: "08451011969",
        agency: "3317",
        agency_digit: "7",
        account: "114455",
        account_digit: "6",
        account_type: "CONTA_CORRENTE",
        bank_id: 2
    }];
    for(let x = 1; x < 30; x++) {
        fakeRecipients.push({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            cpf_cnpj: faker.datatype.boolean ? cpf.generate() : cnpj.generate(),
            agency: /^(?:^0*)[1-9][0-9]{0,3}$/.gen().slice(-4),
            agency_digit: "7",
            account: /^(?:^0*)[1-9][0-9]{0,10}$/.gen().slice(-11),
            account_digit: "4",
            account_type: "CONTA_CORRENTE",
            bank_id: 2
        });
    }
    await RecipientModel.bulkCreate(fakeRecipients);
}

recipientsSetup.createDefaultBanks = async () => {
    let banks = [
        { code: "001", name: "Banco do Brasil" },
        { code: "756", name: "Sicoob" },
        { code: '033', name: 'Santander' },
        { code: '237', name: 'Bradesco' }
    ];
    await BankModel.bulkCreate(banks);
}

module.exports = recipientsSetup;
const model = require('./Model');
const { Op } = require('sequelize');

let recipientRepository = {};

recipientRepository.create = async (recipient) => {
    return await model.create(recipient);
}

recipientRepository.update = (recipientID, recipient) => {
    model.update(
        recipient,
        { where: { id: recipientID } }
    );
}

recipientRepository.delete = (recipientID) => {
    model.destroy({where: { id: recipientID}});
}

recipientRepository.getPaginated = async (offset = 0, limit = 10, searchFor = '') => {
    let where = {};
    if(searchFor) {
        where = {
            [Op.or]: [
                { name: { [Op.like]: `%${searchFor}%` } },
                { cpf_cnpj: { [Op.like]: `%${searchFor}%` } },
                { agency: { [Op.like]: `%${searchFor}%` } },
                { account: { [Op.like]: `%${searchFor}%` } }
            ]
        }
    }

    return await model.findAndCountAll({
        offset: offset,
        limit: limit,
        where: where
    });
}

recipientRepository.getByID = async (recipientID) => {
    return await model.findByPk(recipientID);
}

module.exports = recipientRepository;
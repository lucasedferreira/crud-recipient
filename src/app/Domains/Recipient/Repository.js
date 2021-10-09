const model = require('./Model');

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

recipientRepository.get = async () => {
    return await model.findAll();
}

recipientRepository.getByID = async (recipientID) => {
    return await model.findByPk(recipientID);
}

module.exports = recipientRepository;
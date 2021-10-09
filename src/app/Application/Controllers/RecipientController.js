const RecipientService = require('../../Domains/Recipient/Service');
const RecipientRepository = require('../../Domains/Recipient/Repository');

let recipientController = {};

recipientController.create = async (req, res, next) => {
    let recipient = req.body;
    let createdRecipient = await RecipientService.create(recipient);
    res.status(201).send(createdRecipient);
};

recipientController.update = (req, res, next) => {
    let recipientID = req.params.id;
    let recipient = req.body;
    RecipientService.update(recipientID, recipient);
    res.status(201).send(`Recipient Updated.`);
};

recipientController.delete = (req, res, next) => {
    let recipientID = req.params.id;
    RecipientRepository.delete(recipientID);
    res.status(200).send(`Recipient Deleted.`);
};

recipientController.get = async (req, res, next) => {
    let recipients = await RecipientRepository.get();
    res.status(200).send(recipients);
};

recipientController.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
};

module.exports = recipientController;
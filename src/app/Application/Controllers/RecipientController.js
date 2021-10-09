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
    res.status(201).send('Updated Recipient.');
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

recipientController.getById = async (req, res, next) => {
    let recipientID = req.params.id;
    let recipient = await RecipientRepository.getByID(recipientID);
    res.status(200).send(recipient);
};

module.exports = recipientController;
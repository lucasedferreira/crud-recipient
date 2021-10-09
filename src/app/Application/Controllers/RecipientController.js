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

recipientController.getPaginated = async (req, res, next) => {
    let searchFor = req.body.searchFor;

    let offset = parseInt(req.params.offset);
    let limit = parseInt(req.params.limit);

    let recipients = await RecipientRepository.getPaginated(searchFor, offset, limit);
    res.status(200).send(recipients);
};

recipientController.getById = async (req, res, next) => {
    let recipientID = req.params.id;
    let recipient = await RecipientRepository.getByID(recipientID);
    res.status(200).send(recipient);
};

module.exports = recipientController;
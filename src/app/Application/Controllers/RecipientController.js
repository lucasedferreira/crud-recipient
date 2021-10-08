const RecipientService = require('../../Domains/Recipient/Service');
const RecipientRepository = require('../../Domains/Recipient/Repository');

let recipientController = {};

recipientController.create = (req, res, next) => {
    let recipient = req.body;
    RecipientService.create(recipient);
    res.status(201).send('Recipient Created.');
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

recipientController.get = (req, res, next) => {
    RecipientRepository.get(recipients => {
        res.status(200).send(recipients);
    });
};

recipientController.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
};

module.exports = recipientController;
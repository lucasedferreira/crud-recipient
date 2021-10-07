const RecipientService = require('../../Domains/Recipient/Service');
const RecipientRepository = require('../../Domains/Recipient/Repository');

let recipientController = {};

recipientController.create = (req, res, next) => {
    let recipient = req.body;
    RecipientService.create(recipient);
    res.status(201).send('Rota POST!');
};

recipientController.update = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

recipientController.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

recipientController.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
};

recipientController.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
};

module.exports = recipientController;
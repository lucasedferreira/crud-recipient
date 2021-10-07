const RecipientController = require('../Application/Controllers/RecipientController');
const RecipientValidator = require('../Domains/Recipient/Validator');

module.exports = (app) => {
    app.post('/recipient', RecipientValidator.checkRecipient);
    app.post('/recipient', RecipientController.create);

    app.put('/recipient/:id', RecipientController.update);
    app.delete('/recipient/:id', RecipientController.delete);
    app.get('/recipients', RecipientController.get);
    app.get('/recipient/:id', RecipientController.getById);
}
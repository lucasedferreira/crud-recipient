const RecipientController = require('../Application/Controllers/RecipientController');
const RecipientMiddleware = require('../Application/Middlewares/RecipientMiddleware');

module.exports = (app) => {
    app.post('/recipient', RecipientMiddleware.validator);
    app.post('/recipient', RecipientController.create);

    app.put('/recipient/:id', RecipientMiddleware.validator);
    app.put('/recipient/:id', RecipientController.update);

    app.delete('/recipient/:id', RecipientController.delete);

    app.post('/recipients/:offset/:limit', RecipientController.getPaginated);

    app.get('/recipient/:id', RecipientController.getById);
}
const recipientValidator = require('../../Domains/Recipient/Validator');

let recipientMiddleware = {};

recipientMiddleware.validator = (req, res, next) => {
    let recipient = req.body;
    
    try {
        recipientValidator.checkRecipient(recipient);
        next();
    }catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = recipientMiddleware;
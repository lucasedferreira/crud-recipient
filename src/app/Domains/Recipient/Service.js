const parser = require('./Parser');
const repository = require('./Repository');

let recipientService = {};

recipientService.create = async (recipient) => {
    let parsedRecipient = parser.parseRecipient(recipient);
    return await repository.create(parsedRecipient);
}

recipientService.update = (recipientID, recipient) => {
    let parsedRecipient = parser.parseRecipient(recipient);
    repository.update(recipientID, parsedRecipient);
}

module.exports = recipientService;
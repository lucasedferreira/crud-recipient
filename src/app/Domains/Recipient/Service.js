const parser = require('./Parser');
const repository = require('./Repository');

let recipientService = {};

recipientService.create = (recipient) => {
    let parsedRecipient = parser.parserCreate(recipient);
    repository.create(parsedRecipient);
}

module.exports = recipientService;
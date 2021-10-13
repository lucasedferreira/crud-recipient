let recipientParser = {};

recipientParser.parseRecipient = (recipient) => {
    return {
        name: recipient.name,
        email: recipient.email,
        cpfCnpj: recipient.cpfCnpj.replace(/\D/g, ""),
        bankId: recipient.bankId,
        agency: recipient.agency,
        agencyDigit: recipient.agencyDigit,
        account: recipient.account,
        accountDigit: recipient.accountDigit,
        accountType: recipient.accountType
    }
}

module.exports = recipientParser;
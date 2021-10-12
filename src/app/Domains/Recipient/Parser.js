let recipientParser = {};

recipientParser.parseRecipient = (recipient) => {
    return {
        name: recipient.name,
        email: recipient.email,
        cpf_cnpj: recipient.cpf_cnpj.replace(/\D/g, ""),
        bank_id: recipient.bank_id,
        agency: recipient.agency,
        agency_digit: recipient.agency_digit,
        account: recipient.account,
        account_digit: recipient.account_digit,
        account_type: recipient.account_type
    }
}

module.exports = recipientParser;
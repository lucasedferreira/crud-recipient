let recipientValidator = {};

recipientValidator.checkRecipient = (recipient) => {
    validateRecipientInfo(recipient);
    validateAgency(recipient);
    validateAccount(recipient);
}

const validateRecipientInfo = (recipient) => {
    ['name', 'email', 'bank'].forEach(field => {
        if(!recipient[field]) {
            let fieldName = field.charAt(0).toUpperCase() + field.slice(1);
            throw new Error(`${fieldName} is required.`);
        }
    });
}

const validateAgency = (recipient) => {
    const scheme = {
        maxLength: 4,
        required: true,
        pattern: /^(?:^0*)[1-9][0-9]{0,3}$/,
        digit: {
            required: false,
            pattern: /^[xX0-9]{0,1}$/
        }
    }
    validateByScheme(scheme, {info: recipient.agency, digit: recipient.agency_digit}, 'Agency');
}

const validateAccount = (recipient) => {
    const scheme = {
        bancoDoBrasil: {
            maxLength: 8,
            required: true,
            pattern: /^(?:^0*)[1-9][0-9]{0,7}$/,
            digit: {
                required: true,
                pattern: /^[xX0-9]{0,1}$/
            },
            accountTypesAllowed: ["CONTA_CORRENTE", "CONTA_POUPANCA", "CONTA_FACIL"]
        },
        general: {
            maxLength: 11,
            required: true,
            pattern: /^(?:^0*)[1-9][0-9]{0,10}$/,
            digit: {
                required: true,
                pattern: /^[0-9]{0,1}$/
            },
            accountTypesAllowed: ["CONTA_CORRENTE", "CONTA_POUPANCA"]
        }
    }[(recipient.bank === '001' ? 'bancoDoBrasil' : 'general')]

    validateByScheme(scheme, {info: recipient.account, digit: recipient.account_digit}, 'Account');

    if(!scheme.accountTypesAllowed.includes(recipient.account_type))
        throw new Error('Account type is not allowed.');
}

const validateByScheme = (scheme, data, inputName) => {
    if((!data.info && scheme.required) || (!data.digit && scheme.digit.required))
        throw new Error(`${inputName} and digit is required.`);

    let infoIsInPattern = scheme.pattern.test(data.info);
    let infoIsValid = infoIsInPattern && data.info.length <= scheme.maxLength;
    if(!infoIsValid)
        throw new Error(`${inputName} is not valid.`);

    let digitIsInPattern = scheme.digit.pattern.test(data.digit);
    if(!digitIsInPattern)
        throw new Error(`${inputName} digit is not valid.`);
}

module.exports = recipientValidator;
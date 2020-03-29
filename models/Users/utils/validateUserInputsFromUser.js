const Joi = require('@hapi/joi');

const validateUserInputsFromUser = (user) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(2).max(50),
        email: Joi.string().email({ minDomainSegments: 2 } ),
        photo: Joi.string(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
        confirmPassword: Joi.ref("password"),
        passwordChangeDate: Joi.date(),
        role: Joi.string().pattern(/^admin$|^guide$|^lead-guide$|^user$/),
        passwordResetToken: Joi.string(),
        passwordResetExpiresAt: Joi.date()
    });

    return schema.validate(user);
};

module.exports = validateUserInputsFromUser;
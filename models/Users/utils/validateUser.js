const Joi = require('@hapi/joi');

const validateUser = (user) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().email({ minDomainSegments: 2 } ).required(),
        photo: Joi.string(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
        confirmPassword: Joi.ref("password"),
        passwordChangeDate: Joi.date(),
        role: Joi.string().pattern(/^admin$|^guide$|^lead-guide$|^user$/)
    });

    return schema.validate(user);
};

module.exports = validateUser;
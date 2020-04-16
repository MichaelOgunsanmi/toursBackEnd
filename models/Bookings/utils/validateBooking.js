const Joi = require('@hapi/joi');
const JoiObjectId = require('joi-objectid')(Joi);

const validateBooking = (review) => {
    const schema = Joi.object().keys({
        tour: JoiObjectId().required(),
        user: JoiObjectId().required(),
        price: Joi.number().required(),
        paid: Joi.boolean()
    });

    return schema.validate(review);
};

module.exports = validateBooking;

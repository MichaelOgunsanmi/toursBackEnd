const Joi = require('@hapi/joi');
const JoiObjectId = require('joi-objectid')(Joi);

const validateReview = (review) => {
    const schema = Joi.object().keys({
        review: Joi.string().min(2).max(255).required(),
        ratings: Joi.number().min(1).max(5),
        tour: JoiObjectId().required(),
        user: JoiObjectId().required(),
    });

    return schema.validate(review);
};

module.exports = validateReview;

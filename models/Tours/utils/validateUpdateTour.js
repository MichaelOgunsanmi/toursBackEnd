const Joi = require('@hapi/joi');

const validateUpdateTour = (tour) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(2).max(50),
        duration: Joi.number().min(0),
        maxGroupSize: Joi.number().min(0),
        difficulty: Joi.string().min(2),
        price: Joi.number().min(0),
        priceDiscount: Joi.number(),
        ratingsAverage: Joi.number().min(1).max(5),
        ratingsQuantity: Joi.number().min(0),
        summary: Joi.string().min(2),
        description: Joi.string().min(2),
        imageCover: Joi.string().min(2),
        images: Joi.array().items(Joi.string()),
        createdAt: Joi.date(),
        startDates: Joi.array().items(Joi.date())
    });

    return schema.validate(tour);
};

module.exports = validateUpdateTour;

const Joi = require('@hapi/joi');

const validateTour = (tour) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(2).max(50).required(),
        duration: Joi.number().min(0).required(),
        maxGroupSize: Joi.number().min(0).required(),
        difficulty: Joi.string().min(2).required(),
        price: Joi.number().min(0).required(),
        priceDiscount: Joi.number(),
        ratingsAverage: Joi.number().min(1).max(5),
        ratingsQuantity: Joi.number().min(0),
        summary: Joi.string().min(2).required(),
        description: Joi.string().min(2),
        imageCover: Joi.string().min(2).required(),
        images: Joi.array().items(Joi.string()),
        createdAt: Joi.date(),
        startDates: Joi.array().items(Joi.date()),
        startLocation: Joi.object().keys({
            type: Joi.string(),
            coordinates: Joi.array().items(Joi.number()),
            address: Joi.string(),
            description: Joi.string()
        }),
        locations: Joi.array().items(Joi.object().keys({
                type: Joi.string(),
                coordinates: Joi.array().items(Joi.number()),
                address: Joi.string(),
                description: Joi.string(),
                day: Joi.number()
            })
        ),
        guides: Joi.array()
    });

    return schema.validate(tour);
};


module.exports = validateTour;



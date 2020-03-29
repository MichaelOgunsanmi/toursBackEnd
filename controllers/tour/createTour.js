const {Tour, validateTour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const createTour = asyncWrapper( async (req, res) => {
    const {error} = validateTour(req.body);

    if (error) return res.status(400).json({
        status: 400,
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error
    });

    const findTour = await Tour.findOne({name: req.body.name});

    if (findTour) return res.status(400).json({
        status: 400,
        message: 'Tour already created'
    });

    const newTour = new Tour(req.body);

    const createdTour = await newTour.save();

    res.status(201).json({
        status: 201,
        data: {
            tour: createdTour
        }
    });
});

module.exports = createTour;
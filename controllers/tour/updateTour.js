const {Tour, validateTourInputsFromUser} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const updateTour = asyncWrapper(async (req, res, next) => {
    const {error} = validateTourInputsFromUser(req.body);

    if (error) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error
    });

    const doesUpdateNameExists = await Tour.find({name: req.body.name});

    if (doesUpdateNameExists.length > 0) return next({
        statusCode: 400,
        status: 'fail',
        message: "Name already exist"
    });


    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});

module.exports = updateTour;
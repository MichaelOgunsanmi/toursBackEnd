const {Tour, validateUpdateTour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const updateTour = asyncWrapper(async (req, res) => {
    const {error} = validateUpdateTour(req.body);

    if (error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });

    const doesUpdateNameExists = await Tour.find({name: req.body.name});

    if (doesUpdateNameExists.length > 0) return res.status(400).json({
        status: 400,
        message: "Name already exist"
    });


    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: 200,
        data: {
            tour
        }
    });
});

module.exports = updateTour;
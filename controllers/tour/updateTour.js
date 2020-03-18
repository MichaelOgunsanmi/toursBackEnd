const {Tour, validateUpdateTour} = require('../../models/Tours');


const updateTour = async (req, res) => {
    const {error} = validateUpdateTour(req.body);

    if (error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });

    const findTour = await Tour.findById(req.params.id);

    if (!findTour) return res.status(400).json({
        status: 400,
        message: "Tour doesn't exist"
    });

    const doesUpdateNameExists = await Tour.find({name: req.body.name});

    if (doesUpdateNameExists.length > 0) return res.status(400).json({
        status: 400,
        message: "Name already exist"
    });

    try{
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
    } catch(error){
        res.status(500).json({
            status: 500,
            message: error
        })
    }
};

module.exports = updateTour;
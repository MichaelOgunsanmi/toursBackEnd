const {Tour, validateTour} = require('../../models/Tours');

const createTour = async (req, res) => {
    const {error} = validateTour(req.body);

    if (error) return res.status(400).json({
        status: 400,
        message: error
    });

    const findTour = await Tour.findOne({name: req.body.name});

    if (findTour) return res.status(400).json({
        status: 400,
        message: 'Tour already created'
    });

    const newTour = new Tour(req.body);

    try {
        const createdTour = await newTour.save();

        res.status(201).json({
            status: 201,
            data: {
                tour: createdTour
            }
        });
    } catch (err) {
        for (const field in err.errors) {
            console.log(err.errors[field].message);

            res.status(500).json({
                status: 500,
                message: err.errors[field].message
            });
        }
    }

};

module.exports = createTour;
const {Tour} = require('../../models/Tours');
const {EARTHRADIUSINMILES, EARTHRADIUSINKILOMETERS} = require('../../utils');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getToursWithin = asyncWrapper( async (req, res, next) => {
    const {radius, latitudeLongitude, unit} = req.params;

    const [latitude, longitude] = latitudeLongitude.split(',');

    if (!longitude || !latitude) return next({
        statusCode: 400,
        status: 'fail',
        message: "Please provide latitude and longitude in the format latitude, longitude"
    });

    const radiusInRadians = unit === 'mi' ? radius / EARTHRADIUSINMILES : radius / EARTHRADIUSINKILOMETERS;

    const tours = await Tour.find({
        startLocation:
            {
                $geoWithin: { $centerSphere: [ [ longitude, latitude ], radiusInRadians ] }
            }
    });

    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

module.exports = getToursWithin;
const {Tour} = require('../../models/Tours');
const {CONVERTTOKILOMETERS, CONVERTTOMILES} = require('../../utils');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getToursDistances = asyncWrapper( async (req, res, next) => {
    const {latitudeLongitude, unit} = req.params;

    const [latitude, longitude] = latitudeLongitude.split(',');

    if (!longitude || !latitude) return next({
        statusCode: 400,
        status: 'fail',
        message: "Please provide latitude and longitude in the format latitude, longitude"
    });

    const distanceMultiplier = unit === 'mi' ? CONVERTTOMILES : CONVERTTOKILOMETERS;

    const tours = await Tour.aggregate([
        {
            $geoNear: {
                near : {
                    type: 'Point',
                    coordinates: [longitude * 1, latitude * 1]
                },
                distanceField: 'distance',
                distanceMultiplier
            }
        },
        {
            $project : {
                distance: 1,
                name: 1
            }
        }
    ]);

    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

module.exports = getToursDistances;
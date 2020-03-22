const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const getTourStats = asyncWrapper( async (req, res) => {
    const tourStats = await Tour.aggregate([
        {
            $match: { ratingsAverage: { $gte: 4.5 }}
        },
        {
            $group: {
                _id: { $toUpper: '$difficulty'},
                numTours: {$sum: 1},
                numRatings: {$sum: '$ratingsQuantity'},
                averageRating: {$avg: '$ratingsAverage'},
                averagePrice: {$avg: '$price'},
                minimumPrice: {$min: '$price'},
                maximumPrice: {$max: '$price'}
            }
        },
        {
            $sort: { averagePrice: 1}
        }
    ]);

    res.status(200).json({
        status: 200,
        results: tourStats.length,
        data: {
            tourStats
        }
    });
});

module.exports = getTourStats;
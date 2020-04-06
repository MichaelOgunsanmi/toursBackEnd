const {Tour} = require('../../Tours');
const computeRatingsAverage = async function (tourId) {
    const Review = this;

    const ratingsStatistics = await Review.aggregate([
        {
            $match : {tour: tourId}
        },
        {
            $group : {
                _id : '$tour',
                ratingsQuantity: { $sum: 1},
                ratingsAverage: { $avg: '$rating' }
            }
        }
    ]);

    await Tour.findByIdAndUpdate(tourId, {
        ratingsQuantity: ratingsStatistics[0].ratingsQuantity,
        ratingsAverage: ratingsStatistics[0].ratingsAverage
    })
};

module.exports = computeRatingsAverage;
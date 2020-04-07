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

    let ratingsQuantity = 0;
    let ratingsAverage = 4.5;

    if (ratingsStatistics.length > 0){
        ratingsQuantity = ratingsStatistics[0].ratingsQuantity;
        ratingsAverage = ratingsStatistics[0].ratingsAverage
    }

    await Tour.findByIdAndUpdate(tourId, {
        ratingsQuantity,
        ratingsAverage
    })

};

module.exports = computeRatingsAverage;

const computeRatingsAveragePostSave = async function () {
    const Review = this.review.constructor;
    const tourId = this.review.tour;

    await Review.computeRatingsAverage(tourId);
};

module.exports = computeRatingsAveragePostSave;
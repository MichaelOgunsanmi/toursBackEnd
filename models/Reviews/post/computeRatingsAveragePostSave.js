
const computeRatingsAveragePostSave = async function () {
    const Review = this.constructor;
    const tourId = this.tour;

    await Review.computeRatingsAverage(tourId);
};

module.exports = computeRatingsAveragePostSave;
const computeRatingsAveragePostSave = function () {
    const Review = this.constructor;
    const tourId = this.tour;

    Review.computeRatingsAverage(tourId);
};

module.exports = computeRatingsAveragePostSave;
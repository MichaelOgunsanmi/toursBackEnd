
const filterForTop5RatedTours = (req, res, next) => {
    req.queryParams = {};
    req.sortBy = '-ratingsAverage price';
    req.select = 'name price ratingsAverage summary difficulty';
    req.skip = '';
    req.limit =  5;

    next();
};

module.exports = filterForTop5RatedTours;
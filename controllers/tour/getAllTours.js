const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllTours = asyncWrapper( async (req, res, next) => {
    if (req.query.page && req.skip >= await Tour.countDocuments()) return next({
            statusCode: 404,
            status: 'fail',
            message:'This page does not exist'
        });


    const tours = await Tour
        .find(req.queryParams)
        .sort(req.sortBy)
        .select(req.select)
        .skip(req.skip)
        .limit(req.limit);

    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

module.exports = getAllTours;
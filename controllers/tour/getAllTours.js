const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllTours = asyncWrapper( async (req, res) => {
    console.log( req.query, req.queryParams, req.sortBy, req.select);

    if (req.query.page && req.skip >= await Tour.countDocuments()) {
        throw {
            statusCode: 404,
            status: 'success',
            message:'This page does not exist'
        };
    }

    const tours = await Tour
        .find(req.queryParams)
        .sort(req.sortBy)
        .select(req.select)
        .skip(req.skip)
        .limit(req.limit);

    res.status(200).json({
        status: 200,
        results: tours.length,
        data: {
            tours
        }
    });
});

module.exports = getAllTours;
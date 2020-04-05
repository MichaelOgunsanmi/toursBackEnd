const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllUsers = asyncWrapper( async (req, res, next) => {
    if (req.query.page && req.skip >= await User.countDocuments()) return next({
        statusCode: 404,
        status: 'fail',
        message:'This page does not exist'
    });


    const users = await User
        .find(req.queryParams)
        .sort(req.sortBy)
        .select(req.select)
        .skip(req.skip)
        .limit(req.limit);

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
});

module.exports = getAllUsers;
const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');
const {filterObject} = require('../../utils');


const updateUser = asyncWrapper( async (req, res, next) => {
    if (req.body.password || req.body.confirmPassword) return next({
        statusCode: 400,
        status: 'fail',
        message: `Invalid route for password update. Use the ${req.protocol}://${req.get('host')}/api/v1/users/updateMyPassword route instead`
    });

    const emailHasBeenTaken = await User.findByEmail(req.body.email);

    if (emailHasBeenTaken) return next({
        statusCode: 400,
        status: "fail",
        message: "Email already in use"
    });

    const filteredBody = filterObject(req.body, 'name', 'email');
    if (req.file) filteredBody.photo = req.file.filename;

    const user = await User.findByIdAndUpdate(req.user._id, filteredBody, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});

module.exports = updateUser;
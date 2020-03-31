const {User} = require('../../models/Users');
const {setJWTCookie} = require('../../cookies');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const updatePassword = asyncWrapper( async (req, res, next) => {
    if (!req.body.oldPassword || !req.body.password || !req.body.confirmPassword) return next({
        statusCode: 400,
        status: 'fail',
        message: 'Invalid details provided'
    });

    const user = await User.findByCredentials(req.user.email, req.body.oldPassword);

    if (!user) {
        return next({
            statusCode: 400,
            status: 'fail',
            message: 'Invalid Password. Check the old password field.'
        })
    }

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;

    await user.save();

    const token = user.generateAuthToken();

    setJWTCookie(token, res);

    res.status(200).json({
        status: 'success',
        token
    });
});

module.exports = updatePassword;
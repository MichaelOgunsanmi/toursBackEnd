const crypto = require('crypto');

const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const resetPassword = asyncWrapper( async (req, res, next) => {
    const passwordResetToken =
        crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex');

    const user = await User.findOne(
        {
            passwordResetToken,
            passwordResetExpiresAt: { $gt: Date.now() }
        });

    if (!user) {
        return next({
            statusCode: 400,
            status: 'fail',
            message: 'Invalid reset token.'
        })
    }

    if (!req.body.password || !req.body.confirmPassword) return next({
        statusCode: 400,
        status: 'fail',
        message: 'Invalid details provided'
    });

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpiresAt = undefined;

    await user.save();

    const token = user.generateAuthToken();

    res.status(200).json({
        status: 'success',
        token
    });
});

module.exports = resetPassword;
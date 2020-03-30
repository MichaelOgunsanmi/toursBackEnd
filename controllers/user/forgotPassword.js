const {sendForgotPasswordEmail} = require('../../emails');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const forgotPassword = asyncWrapper( async (req, res, next) => {
    const passwordResetToken = req.user.generatePasswordResetToken();

    await req.user.save({validateBeforeSave: false});

    const passwordResetUrl = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${passwordResetToken}`;

    try {
        await sendForgotPasswordEmail(req.user, passwordResetUrl);

        res.status(200).json({
            status: 'success',
            message: 'Token sent to email'
        });
    } catch (e) {
        req.user.passwordResetToken = undefined;
        req.user.passwordResetExpiresAt = undefined;

        await req.user.save({validateBeforeSave: false});

        next({
            statusCode: 500,
            status: 'fail',
            message: 'There was an error sending the email. Try again later.'
        })
    }
});

module.exports = forgotPassword;
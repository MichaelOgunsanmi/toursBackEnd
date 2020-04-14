const emailConfiguration = require('./emailConfiguration');

const sendForgotPasswordEmail = async (user, passwordResetUrl) => {
    const title = 'Password Reset';
    const template = 'forgotPasswordEmail';

    await emailConfiguration(title, template, user, passwordResetUrl);
};


module.exports = sendForgotPasswordEmail;
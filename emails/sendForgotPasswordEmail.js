const emailConfiguration = require('./emailConfiguration');

const sendForgotPasswordEmail = async (user, passwordResetUrl) => {
    const title = 'PASSWORD RESET';
    const template = 'forgotPasswordEmail';

    await emailConfiguration(title, template, user, passwordResetUrl);

    // const text = `
    //     Hi ${user.name},
    //     \n
    //     You recently requested for a password reset. Click on the link below to reset you password.
    //     \n
    //     ${passwordResetUrl}
    //     \n
    //     Kindly ignore this mail if you didn't request for a password reset.
    // `;

};


module.exports = sendForgotPasswordEmail;
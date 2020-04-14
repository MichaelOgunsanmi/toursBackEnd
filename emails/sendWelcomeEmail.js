const emailConfiguration = require('./emailConfiguration');

const sendForgotPasswordEmail = async (user, url) => {
    const title = 'Welcome to the Tours Family!';
    const template = 'welcomeEmail';

    await emailConfiguration(title, template, user, url);

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
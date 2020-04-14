const emailConfiguration = require('./emailConfiguration');

const sendForgotPasswordEmail = async (user, url) => {
    const title = 'Welcome to the Tours Family!';
    const template = 'welcomeEmail';

    await emailConfiguration(title, template, user, url);
};


module.exports = sendForgotPasswordEmail;
const transporter = require('./transporter');
const createEmailHtmlAndTextFromPugTemplate = require('./createEmailHtmlAndTextFromPugTemplate');
const createEmailOptions = require('./createEmailOptions');


const sendForgotPasswordEmail = async (user, passwordResetUrl) => {
    const subject = `PASSWORD RESET | ${user.name.toUpperCase()}`;

    const text = `
        Hi ${user.name},
        \n
        You recently requested for a password reset. Click on the link below to reset you password.
        \n
        ${passwordResetUrl}
        \n
        Kindly ignore this mail if you didn't request for a password reset.
    `;

    const {html, text} = createEmailHtmlAndTextFromPugTemplate();

    const mailOptions = createEmailOptions(user.email, subject, html, text);

    await transporter.sendMail(mailOptions)
};


module.exports = sendForgotPasswordEmail;
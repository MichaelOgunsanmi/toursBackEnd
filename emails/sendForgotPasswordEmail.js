const transporter = require('./transporter');


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

    await transporter.sendMail({
        from: 'Michael Ogunsanmi <ogunsanmimichael@gs.com>',
        to: user.email,
        subject,
        text
    })
};


module.exports = sendForgotPasswordEmail;
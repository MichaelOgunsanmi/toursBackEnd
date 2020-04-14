
const createEmailOptions = (to, subject, html, text) => {
    return {
        from: `Michael Ogunsanmi <${process.env.EMAIL_FROM}>`,
        to,
        subject,
        html,
        text
    }
};


module.exports = createEmailOptions;
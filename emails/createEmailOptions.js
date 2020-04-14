
const createEmailOptions = (to, subject, html, text) => {
    return {
        from: `ogunsanmimichael@gs.com`,
        to,
        subject,
        html,
        text,
    }
};


module.exports = createEmailOptions;
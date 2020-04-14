const transporter = require('./transporter');
const createEmailHtmlAndTextFromPugTemplate = require('./createEmailHtmlAndTextFromPugTemplate');
const createEmailOptions = require('./createEmailOptions');


const emailConfiguration = async (title, template, user, url) => {
    const subject = `${title.toUpperCase()} | ${user.name.toUpperCase()}`;

    const {html, text} = createEmailHtmlAndTextFromPugTemplate(template, {
        subject,
        url,
        firstName: user.name.split(' ')[0]
    });

    const mailOptions = createEmailOptions(user.email, subject, html, text);

    await transporter.sendMail(mailOptions)
};


module.exports = emailConfiguration;
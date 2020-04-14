const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const transporter = require('./transporter');
const createEmailHtmlAndTextFromPugTemplate = require('./createEmailHtmlAndTextFromPugTemplate');
const createEmailOptions = require('./createEmailOptions');


const emailConfiguration = async (title, template, user, url) => {
    const subject = `${title} | ${user.name.toUpperCase()}`;

    const {html, text} = createEmailHtmlAndTextFromPugTemplate(template, {
        subject,
        url,
        firstName: user.name.split(' ')[0]
    });

    const mailOptions = createEmailOptions(user.email, subject, html, text);

    if (process.env.NODE_ENV === 'production') {
        await sgMail.send(mailOptions);
    }else{
        await transporter.sendMail(mailOptions)
    }
};


module.exports = emailConfiguration;
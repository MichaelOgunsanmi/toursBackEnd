const path = require('path');
const pug = require('pug');
const htmlToText = require('html-to-text');


const createEmailHTMLAndTextFromPugTemplate = (template, emailDetails) => {
    const pathToEmailPugTemplate = path.resolve(__dirname, '..', 'views', 'emails', `${template}.pug`);

    const pugToHTML = pug.renderFile(pathToEmailPugTemplate, emailDetails);
    const HTMLToText = htmlToText.fromString(pugToHTML);


    return {
        html: pugToHTML,
        text: HTMLToText
    }
};

module.exports = createEmailHTMLAndTextFromPugTemplate;
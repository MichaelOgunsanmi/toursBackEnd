const nodemailer = require('nodemailer');

const developmentTransporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});


const productionTransporter = 'create';


const transporter = process.env.NODE_ENV === 'production' ? productionTransporter : developmentTransporter;

module.exports = transporter;
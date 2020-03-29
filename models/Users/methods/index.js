const toJSON = require('./toJSON');
const generateAuthToken = require('./generateAuthToken');
const passwordWasChangedAfter = require('./passwordWasChangedAfter');
const generatePasswordResetToken = require('./generatePasswordResetToken');



module.exports = {
    toJSON,
    generateAuthToken,
    passwordWasChangedAfter,
    generatePasswordResetToken
};
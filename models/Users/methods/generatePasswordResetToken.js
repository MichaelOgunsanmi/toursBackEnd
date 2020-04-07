const crypto = require('crypto');
const {CONVERTMINUTESTOMILLISECONDS} = require('../../../utils');


const generatePasswordResetToken = function (){
    const user = this;

    const passwordResetToken = crypto.randomBytes(32).toString('hex');

    user.passwordResetToken =
        crypto
        .createHash('sha256')
        .update(passwordResetToken)
        .digest('hex');

    const minutesBeforeResetTokenExpires = 10;

    user.passwordResetExpiresAt = Date.now() + (minutesBeforeResetTokenExpires * CONVERTMINUTESTOMILLISECONDS);

    return passwordResetToken;
};

module.exports = generatePasswordResetToken;



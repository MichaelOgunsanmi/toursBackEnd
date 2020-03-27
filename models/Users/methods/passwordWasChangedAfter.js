const passwordWasChangedAfter = function (userJWTTimeStamp){
    const user = this;

    if (user.passwordChangeDate) {
        const passwordChangeTimeStamp = Date.parse(user.passwordChangeDate) / 1000;
        return userJWTTimeStamp < passwordChangeTimeStamp;
    }

    return false;
};

module.exports = passwordWasChangedAfter;



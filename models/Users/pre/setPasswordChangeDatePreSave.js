
const setPasswordChangeDatePreSave = async function (next) {
    const user = this;

    if (!user.isModified('password') || user.isNew) return next();

    const millisecondsDeduction = 1000;

    user.passwordChangeDate = Date.now() - millisecondsDeduction;

    next();
};

module.exports = setPasswordChangeDatePreSave;
const bcrypt = require('bcryptjs');

const save = async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    user.password = await bcrypt.hash(user.password, 12);

    user.confirmPassword = undefined;

    next();
};

module.exports = save;
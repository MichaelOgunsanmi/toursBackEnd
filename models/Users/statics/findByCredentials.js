const bcrypt = require('bcryptjs');

const findByCredentials = async function (email, password) {
    const User = this;

    const user = await User.findByEmail(email);

    if (!user) return null;

   const isPasswordMatch = await bcrypt.compare(password, user.password);

   if (!isPasswordMatch) return null;

   return user;
};

module.exports = findByCredentials;
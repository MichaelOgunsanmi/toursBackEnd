
const findByEmail = async function (email) {
    const User = this;
    const user = await User.findOne({email}).select('+password');

    if (!user) return null;

    return user;
};

module.exports = findByEmail;
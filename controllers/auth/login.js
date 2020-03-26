const {User} = require('../../models/Users');
const asyncWrapper = require('../../middlewares/asyncWrapper');

const login = asyncWrapper(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findByCredentials(email, password);

    if (!user) return res.status(401).json({
        status: 'fail',
        message: "Login Failed"
    });

    const token = await user.generateAuthToken();

    res.status(200).json({
        status: "success",
        token
    });

});

module.exports = login;
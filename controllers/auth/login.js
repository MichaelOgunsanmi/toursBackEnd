const {User} = require('../../models/Users');
const {setJWTCookie} = require('../../cookies');
const asyncWrapper = require('../../middlewares/asyncWrapper');

const login = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findByCredentials(email, password);

    if (!user) return next({
        statusCode: 401,
        status: 'fail',
        message: "Login Failed"
    });

    const token = await user.generateAuthToken();

    setJWTCookie(token, req, res);

    res.status(200).json({
        status: "success",
        token
    });

});

module.exports = login;
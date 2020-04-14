const {User, validateUser} = require('../../models/Users');
const {setJWTCookie} = require('../../cookies');
const {sendWelcomeEmail} = require('../../emails');
const asyncWrapper = require('../../middlewares/asyncWrapper');

const signUp = asyncWrapper(async (req, res, next) => {
    const {error} = validateUser(req.body);

    if (error) return next({
        statusCode: 400,
        status: "fail",
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    const findUser = await User.findOne({email: req.body.email});

    if (findUser) return next({
        statusCode: 400,
        status: 'fail',
        message: 'User already created'
    });

    const {name, email, password, confirmPassword} = req.body;

    const newUser = new User(req.body);

    const token = newUser.generateAuthToken();

    setJWTCookie(token, res);

    const createdUser = await newUser.save();

    const createdUserProfileUrl = `${req.protocol}://${req.get('host')}/me`;
    await sendWelcomeEmail(createdUser, createdUserProfileUrl);

    res.status(201).json({
        status: "success",
        token,
        data: {
            user: createdUser
        }
    });
});

module.exports = signUp;
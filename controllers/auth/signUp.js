const {User, validateUser} = require('../../models/Users');
const asyncWrapper = require('../../middlewares/asyncWrapper');

const signUp = asyncWrapper(async (req, res, next) => {
    const {error} = validateUser(req.body);

    if (error) return next({
        statusCode: 400,
        status: "fail",
        message: 'Invalid details provided'
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

    const createdUser = await newUser.save();

    res.status(201).json({
        status: "success",
        token,
        data: {
            user: createdUser
        }
    });

});

module.exports = signUp;
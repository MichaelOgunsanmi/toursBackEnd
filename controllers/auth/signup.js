const {User, validateUser} = require('../../models/Users');
const asyncWrapper = require('../../middlewares/asyncWrapper');

const signup = asyncWrapper(async (req, res) => {
    const {error} = validateUser(req.body);

    if (error) return res.status(400).json({
        status: 400,
        message: error
    });

    const findUser = await User.findOne({email: req.body.email});

    if (findUser) return res.status(400).json({
        status: 400,
        message: 'User already created'
    });

    const newUser = new User(req.body);

    const createdUser = await newUser.save();

    res.status(201).json({
        status: 201,
        data: {
            user: createdUser
        }
    });

});

module.exports = signup;
const {User, validateUser} = require('../../models/Users');
const asyncWrapper = require('../../middlewares/asyncWrapper');

const signUp = asyncWrapper(async (req, res) => {
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

    const {name, email, password, confirmPassword} = req.body;

    const newUser = new User({name, email, password, confirmPassword});

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
const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const resetPassword = asyncWrapper( async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
});

module.exports = resetPassword;
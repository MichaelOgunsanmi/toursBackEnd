const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllUsers = asyncWrapper( async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        status: 200,
        results: users.length,
        data: {
            users
        }
    });
});

module.exports = getAllUsers;
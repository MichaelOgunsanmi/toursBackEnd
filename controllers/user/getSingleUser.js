const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const getSingleUser = asyncWrapper( async (req, res) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});

module.exports = getSingleUser;
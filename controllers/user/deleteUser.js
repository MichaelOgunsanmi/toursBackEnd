const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const deleteUser = asyncWrapper( async (req, res, next) => {
    await User.findByIdAndUpdate(req.user._id, {active: false});

    res.status(204).json({
        status: 'success',
    });
});

module.exports = deleteUser;
const {User} = require('../../models/Users');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const deleteUser = asyncWrapper( async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) return next({
        statusCode: 404,
        status: 'fail',
        message: "User does not exist"
    });

    res.status(204).send();
});

module.exports = deleteUser;
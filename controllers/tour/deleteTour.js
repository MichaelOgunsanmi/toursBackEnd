const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const deleteTour = asyncWrapper( async (req, res, next) => {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) return next({
        statusCode: 404,
        status: 'fail',
        message: "Tour does not exist"
    });


    res.status(204).send();
});

module.exports = deleteTour;
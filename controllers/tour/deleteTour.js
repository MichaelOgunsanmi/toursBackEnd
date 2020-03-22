const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const deleteTour = asyncWrapper( async (req, res) => {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).send();
});

module.exports = deleteTour;
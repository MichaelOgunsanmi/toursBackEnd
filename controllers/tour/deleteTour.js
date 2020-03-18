const {Tour} = require('../../models/Tours');


const deleteTour = async (req, res) => {
    const findTour = await Tour.findById(req.params.id);

    if (!findTour) return res.status(400).json({
        status: 400,
        message: "Tour doesn't exist"
    });

    try{
        await Tour.findByIdAndDelete(req.params.id);

        res.status(204).send();
    } catch(error){
        res.status(500).json({
            status: 500,
            message: error
        })
    }
};

module.exports = deleteTour;
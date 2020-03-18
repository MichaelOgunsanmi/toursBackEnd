const {Tour} = require('../../models/Tours');


const getSingleTours = async (req, res) => {
    try{
        const tour = await Tour.findById(req.params.id);

        res.status(200).json({
            status: 200,
            data: {
                tour
            }
        });
    } catch(error){
        res.status(500).json({
            status: 500,
            message: error
        })
    }
};

module.exports = getSingleTours;
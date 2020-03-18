const {Tour} = require('../../models/Tours');


const getAllTours = async (req, res) => {
    try{
        const tours = await Tour.find(req.queryParams);

        res.status(200).json({
            status: 200,
            results: tours.length,
            data: {
                tours
            }
        });
    } catch(error){
        res.status(500).json({
            status: 500,
            message: error
        })
    }
};

module.exports = getAllTours;
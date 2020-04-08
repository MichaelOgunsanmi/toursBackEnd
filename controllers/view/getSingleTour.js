

const getSingleTour = (req, res, next) => {
    res.status(200).render('tour', {
        title: 'The Forest Hiker.'
    })
};


module.exports = getSingleTour;

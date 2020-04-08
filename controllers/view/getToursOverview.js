
const getToursOverview = (req, res, next) => {
    res.status(200).render('overview', {
        title: 'Exciting tours for adventurous people'
    })
};


module.exports = getToursOverview;
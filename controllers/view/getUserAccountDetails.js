

const getUserAccountDetails = (req, res) => {

    res.status(200).render('account', {
        title: 'Your Account',
    })
};


module.exports = getUserAccountDetails;
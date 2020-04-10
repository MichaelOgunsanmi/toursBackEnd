

const login = (req, res) => {

    res.status(200).render('login', {
        title: 'Login',
    })
};


module.exports = login;
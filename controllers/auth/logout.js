const {CONVERTSECONDSTOMILLISECONDS} = require('../../utils');


const logout = (req, res) => {
    const token = 'loggedOut';

    const cookieOptions = {
        expires: new Date(
            Date.now() + 1 * CONVERTSECONDSTOMILLISECONDS
        ),
        httpOnly: true
    };

    res.cookie('jwt', token, cookieOptions);

    res.status(200).json({
        status: "success"
    });
};

module.exports = logout;
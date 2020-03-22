
const error404Route =  (req, res) => {
    throw {
       statusCode: 404,
       status: 'fail',
       message: `The url ${req.url} does not contain any useful results`
    };
};

module.exports = error404Route;

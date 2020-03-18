
const filterRequestQueryObject = (req, res, next) => {
    const excludedQueryFields = ['page', 'sort', 'limit', 'fields'];
    req.queryParams = {...req.query};

    excludedQueryFields.forEach(queryField => delete req.queryParams[queryField]);
    next();

};

module.exports = filterRequestQueryObject;
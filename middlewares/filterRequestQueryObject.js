const handleSorting = (req) => {
    req.sortBy = '-createdAt';

    if (req.query.sort) {
        req.sortBy = req.query.sort.split(',').join(' ')
    }
};

const handleSelecting = (req) => {
    req.select = '-__v';

    if (req.query.fields){
        req.select = req.query.fields.split(',').join(' ')
    }
};

const handlePagination = (req) => {
    const page = req.query.page * 1 || 1;
    req.limit = req.query.limit * 1 || 100;
    req.skip = (page - 1) * req.limit;
};

const cleanQueryFields = (req) => {
    const excludedQueryFields = ['page', 'sort', 'limit', 'fields'];
    const queryObj = {...req.query};

    excludedQueryFields.forEach(queryField => delete queryObj[queryField]);

    const queryObjString = JSON.stringify(queryObj);

    req.queryParams =  JSON.parse(queryObjString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`));
};


const filterRequestQueryObject = (req, res, next) => {
    cleanQueryFields(req);
    handleSorting(req);
    handleSelecting(req);
    handlePagination(req);
    next();
};

module.exports = filterRequestQueryObject;
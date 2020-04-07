
const getReviewDocumentPreFindOneAndModify = async function (next) {
    this.review = await this.findOne();

    if (!this.review) return next({
        statusCode: 404,
        status: 'fail',
        message: "Review does not exist"
    });

    next();
};

module.exports = getReviewDocumentPreFindOneAndModify;




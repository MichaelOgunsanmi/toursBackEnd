const mongoose = require('mongoose');

const {computeRatingsAverage} = require('./statics');
const {toJSON} = require('./methods');
const {
    getReviewDocumentPreFindOneAndModify,
    populateUserDetailsPreFind
} = require('./pre');
const {
    computeRatingsAveragePostFindOneAndModify,
    computeRatingsAveragePostSave
} = require('./post');
const {
    validateReview,
    validateReviewInputsFromUser
} = require('./utils');

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review field cannot be empty'],
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tour',
        required: [true, 'Review must belong to a tour']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Review must belong to a user']
    }
},
{
   timestamps: true
});

reviewSchema.index({tour: 1, user: 1}, {unique: true});

reviewSchema.statics = {
    computeRatingsAverage
};

reviewSchema.methods = {
    toJSON
};

reviewSchema.pre(/^find/,  populateUserDetailsPreFind);
reviewSchema.pre(/^findOneAnd/, getReviewDocumentPreFindOneAndModify);

reviewSchema.post('save',  computeRatingsAveragePostSave);
reviewSchema.post(/^findOneAnd/, computeRatingsAveragePostFindOneAndModify);


const Review = mongoose.model('review', reviewSchema);


module.exports = {
    Review,
    validateReview,
    validateReviewInputsFromUser
};


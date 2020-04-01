const mongoose = require('mongoose');

const {exampleStatic} = require('./statics');
const {toJSON} = require('./methods');
const {examplePre} = require('./pre');
const {examplePost} = require('./post');
const {validateExample} = require('./utils');

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review field cannot be empty'],
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    ratings: {
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

reviewSchema.statics.exampleStatic = exampleStatic;

reviewSchema.methods = {
    toJSON
};

reviewSchema.pre('examplePre',  examplePre);

reviewSchema.post('examplePost',  examplePost);


const Review = mongoose.model('review', reviewSchema);


module.exports = {
    Review,
    validateExample
};


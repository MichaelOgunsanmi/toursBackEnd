const mongoose = require('mongoose');

const {
    reviewVirtualRelationship
} = require('./virtual');
const {exampleStatic} = require('./statics');
const {exampleMethod} = require('./methods');
const {
    slugifyTourNamePreSave,
    populateGuidesUserDetailsPreFind
} = require('./pre');
const {examplePost} = require('./post');
const {validateTour, validateTourInputsFromUser} = require('./utils');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tour name must be provided'],
        unique: true,
        trim: true
    },
    slug: String,
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty'],
        enum: {
            values: ['easy', 'medium', 'difficult'],
            message: 'Difficulty must either be easy, medium or difficult'
        }
    },
    price: {
        type: Number,
        min: 0,
        required: [true, 'A tour must have an associated Price']
    },
    priceDiscount: {
        type: Number,
        validate: {
            validator: function (value) {
                return value < this.price;
            },
            message: 'Discount price should be below the regular price'
        }
    },
    ratingsAverage: {
        type: Number,
        min: 1,
        max: 5,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a summary']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date],
    startLocation: {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String
    },
    locations: [
        {
            type: {
                type: String,
                default: 'Point',
                enum: ['Point']
            },
            coordinates: [Number],
            address: String,
            description: String,
            day: Number
        }
    ],
    guides: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
},
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
});


tourSchema.index({price: 1, ratingsAverage: -1});
tourSchema.index({slug: 1});

tourSchema.virtual('reviews', reviewVirtualRelationship);

tourSchema.statics.exampleStatic = exampleStatic;

tourSchema.methods.exampleMethod = exampleMethod;

tourSchema.pre('save',  slugifyTourNamePreSave);
tourSchema.pre(/^find/, populateGuidesUserDetailsPreFind);

tourSchema.post('examplePost',  examplePost);


const Tour = mongoose.model('tour', tourSchema);


module.exports = {
    Tour,
    validateTour,
    validateTourInputsFromUser
};


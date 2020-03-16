const mongoose = require('mongoose');

const {exampleStatic} = require('./statics');
const {exampleMethod} = require('./methods');
const {examplePre} = require('./pre');
const {examplePost} = require('./post');
const {validateExample} = require('./utils');

const exampleSchema = new mongoose.Schema(
    // define schema here
);

exampleSchema.statics.exampleStatic = exampleStatic;

exampleSchema.methods.exampleMethod = exampleMethod;

exampleSchema.pre('examplePre',  examplePre);

exampleSchema.post('examplePost',  examplePost);


const ExampleModel = mongoose.model('user', exampleSchema);


module.exports = {
    ExampleModel,
    validateExample
};


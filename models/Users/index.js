const mongoose = require('mongoose');

const {exampleStatic} = require('./statics');
const {exampleMethod} = require('./methods');
const {examplePre} = require('./pre');
const {examplePost} = require('./post');
const {validateUser} = require('./utils');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field cannot be empty'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        trim: true,
        lowercase: true,
        unique: true
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Password field is required'],
        trim: true,
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (value) {return value === this.password},
            message: "Passwords are not the same"
        }
    }
});

userSchema.statics.exampleStatic = exampleStatic;

userSchema.methods.exampleMethod = exampleMethod;

userSchema.pre('examplePre',  examplePre);

userSchema.post('examplePost',  examplePost);


const User = mongoose.model('user', userSchema);


module.exports = {
    User,
    validateUser
};


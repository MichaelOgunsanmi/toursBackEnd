const mongoose = require('mongoose');

const {
    findByEmail,
    findByCredentials
} = require('./statics');

const {
    toJSON,
    generateAuthToken,
    passwordWasChangedAfter
} = require('./methods');

const {save} = require('./pre');

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
    role: {
        type: String,
        enum: ['user', 'guide', 'lead-guide', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
        trim: true,
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (value) {return value === this.password},
            message: "Passwords are not the same"
        }
    },
    passwordChangeDate: Date
});

userSchema.statics = {
    findByEmail,
    findByCredentials
};

userSchema.methods = {
    toJSON,
    generateAuthToken,
    passwordWasChangedAfter
};

userSchema.pre('save',  save);

userSchema.post('examplePost',  examplePost);


const User = mongoose.model('user', userSchema);

module.exports = {
    User,
    validateUser
};


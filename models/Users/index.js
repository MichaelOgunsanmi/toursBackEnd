const mongoose = require('mongoose');

const {
    findByEmail,
    findByCredentials
} = require('./statics');

const {
    toJSON,
    generateAuthToken,
    passwordWasChangedAfter,
    generatePasswordResetToken
} = require('./methods');

const {
    hashPasswordPreSave,
    setPasswordChangeDatePreSave,
    findOnlyActiveUsersPreSave
} = require('./pre');

const {examplePost} = require('./post');

const {
    validateUser,
    validateUserInputsFromUser
} = require('./utils');

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
    photo: {
        type: String,
        default: 'default.jpg'
    },
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
    passwordChangeDate: Date,
    passwordResetToken: String,
    passwordResetExpiresAt: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

userSchema.statics = {
    findByEmail,
    findByCredentials
};

userSchema.methods = {
    toJSON,
    generateAuthToken,
    passwordWasChangedAfter,
    generatePasswordResetToken
};

userSchema.pre(/^find/,  findOnlyActiveUsersPreSave);
userSchema.pre('save',  setPasswordChangeDatePreSave);
userSchema.pre('save',  hashPasswordPreSave);



userSchema.post('examplePost',  examplePost);


const User = mongoose.model('user', userSchema);

module.exports = {
    User,
    validateUser,
    validateUserInputsFromUser
};


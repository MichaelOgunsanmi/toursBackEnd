const propertiesRequiredTrue = {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 225
};

const propertiesRequiredFalse = {
    ...propertiesRequiredTrue,
    required: false
};


module.exports = {
    propertiesRequiredTrue,
    propertiesRequiredFalse
};
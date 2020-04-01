
const toJSON = function (){
    const user = this;
    const userObject = user.toObject();

    userObject.virtuals = true;

    return userObject;
};

module.exports = toJSON;



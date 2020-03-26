
const toJSON = function (){
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;

    return userObject;
};

module.exports = toJSON;



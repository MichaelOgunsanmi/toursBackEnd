const filterObject = (oldObject, ...allowedFields) => {
    const newObject = {};

    Object.keys(oldObject).forEach( key => {
        if (allowedFields.includes(key)) newObject[key] = oldObject[key]
    });

    return newObject
};

module.exports = filterObject;
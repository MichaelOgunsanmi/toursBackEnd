const {User} = require('../../Users');

const getGuideDetailsPreSave = async function (next) {
    const tour = this;

    const guidePromises = tour.guides.map( async guideId => await User.findById(guideId));

    tour.guides = await Promise.all(guidePromises);

    next();
};

module.exports = getGuideDetailsPreSave;

/*
This pre save middleware was only written to show denormalization / embedding
the guide user data in the tour. This is no longer needed as it was only
meant for educational purposes. It is not completely deleted as it will
be a good reference at a later time
*/
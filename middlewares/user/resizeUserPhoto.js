const sharp = require('sharp');

const asyncWrapper = require('../asyncWrapper');


const resizeUserPhoto = asyncWrapper(async (req, res, next) => {
    if (!req.file) return next();

    req.file.filename = `user-${req.user._id}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({quality: 90})
        .toFile(`public/images/users/${req.file.filename}`);

    next();
});


module.exports = resizeUserPhoto;
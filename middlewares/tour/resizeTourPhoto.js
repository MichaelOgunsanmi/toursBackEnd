const sharp = require('sharp');

const asyncWrapper = require('../asyncWrapper');


const resizeTourPhoto = asyncWrapper(async (req, res, next) => {
    if (!req.files.images || !req.files.imageCover) return next();

    req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
    await sharp(req.files.imageCover[0].buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({quality: 90})
        .toFile(`public/images/tours/${req.body.imageCover}`);

    req.body.images = [];

    await Promise.all(
        req.files.images.map( async (image, index) => {
            const fileName = `tour-${req.params.id}-${Date.now()}-${index + 1}.jpeg`;

            await sharp(image.buffer)
                .resize(2000, 1333)
                .toFormat('jpeg')
                .jpeg({quality: 90})
                .toFile(`public/images/tours/${fileName}`);

            req.body.images.push(fileName);
        })
    );

    next();
});


module.exports = resizeTourPhoto;
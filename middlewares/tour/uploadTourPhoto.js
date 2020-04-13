const multer = require('multer');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, callback) => {
    if (!file.mimetype.startsWith('image')) return callback({
        statusCode: 400,
        status: 'fail',
        message: `Invalid file type. Only images are allowed`
    });

    callback(null, true);
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

module.exports = upload.fields([
    {
        name: 'imageCover',
        maxCount: 1
    },
    {
        name: 'images',
        maxCount: 3
    }
]);
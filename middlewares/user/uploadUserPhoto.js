const multer = require('multer');

const multerStorage = multer.diskStorage({
   destination: (req, file, callback) => {
       callback(null, 'public/images/users');
   },
    filename: (req, file, callback) => {
       const fileExtension = file.mimetype.split('/')[1];

       callback(null, `user-${req.user._id}-${Date.now()}.${fileExtension}`);
    }
});

const multerFilter = (req, file, callback) => {
    if (!file.mimetype.startsWith('image')) return callback({
        statusCode: 400,
        status: 'fail',
        message: `Invalid file type. Only images are allowed`
    });

    callback(null, true)
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

module.exports = upload.single('photo');
const slugify = require('slugify');

const slugifyTourNamePreFindByIdAndModify = function (next) {
    const tour = this;

    tour.slug = slugify(tour.name, { lower: true });

    next();
};

module.exports = slugifyTourNamePreFindByIdAndModify;
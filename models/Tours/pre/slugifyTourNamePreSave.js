const slugify = require('slugify');

const slugifyTourNamePreSave = function (next) {
    const tour = this;

    tour.slug = slugify(tour.name, { lower: true });

    next();
};

module.exports = slugifyTourNamePreSave;
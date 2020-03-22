const slugify = require('slugify');

const save = function (next) {
    const tour = this;

    tour.slug = slugify(tour.name, { lower: true });

    next();
};

module.exports = save;
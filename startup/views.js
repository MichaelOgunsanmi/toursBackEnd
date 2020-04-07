const path = require('path');
const express = require('express');

const pathToPublicDirectory = path.resolve(__dirname, '..', 'public');
const pathToViewsDirectory = path.resolve(__dirname, '..', 'views');



module.exports = function (app) {
    app.set('view engine', 'pug');
    app.set('views', pathToViewsDirectory);
    app.use(express.static(pathToPublicDirectory));

    app.get('/base', (req, res, next) => {
        console.log('i hot here')
        res.status(200).render('base')
    })
};
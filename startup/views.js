const path = require('path');
const express = require('express');

const pathToPublicDirectory = path.resolve(__dirname, '..', 'public');
const pathToViewsDirectory = path.resolve(__dirname, '..', 'views');



module.exports = function (app) {
    app.set('view engine', 'pug');
    app.set('views', pathToViewsDirectory);
    app.use(express.static(pathToPublicDirectory));

    app.get('/base', (req, res, next) => {
        res.status(200).render('base', {
            title: 'Exciting tours for adventurous people'
        })
    });

    app.get('/overview', (req, res, next) => {
        res.status(200).render('overview', {
            title: 'All Tours'
        })
    });

    app.get('/tour', (req, res, next) => {
        res.status(200).render('tour', {
            title: 'The Forest Hiker'
        })
    });
};
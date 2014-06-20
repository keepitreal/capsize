import path = require('path');
import express = require('express');
import routes = require('./routes');
import config = require('./config');

var session = require('express-session'),
    mongoStore = require('connect-mongo')({ session: session }),
    flash = require('connect-flash'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    compress = require('compression'),
    logger = require('morgan'),
    passport = require('passport');

function expressConfig(app) {
    'use strict';

    app.use(compress({
        filter: function (req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));

    // express/mongo session storage
    app.use(session({
        secret: 'd@s !t m@n#',
        store: new mongoStore({
            url: config.db,
            collection: 'sessions'
        })
    }));

    // use passport session
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(flash());

    app.use('/', routes);

    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        // err.status = 404;
        next(err);
    });

    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

export = expressConfig;
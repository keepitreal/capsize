import express = require('express');
import passport = require('passport');
import config = require('../config');
import _ = require('underscore');

var session = require('express-session'),
    mongoStore = require('connect-mongo')({ session: session }),
    flash = require('connect-flash');

// express/mongo session storage
var expressSession = session({
        secret: 'd@s !t m@n#',
        resave: false,
        saveUninitialized: false,
        store: new mongoStore({
            url: config.db,
            collection: 'sessions'
        })
    }),
    passportInitialize = passport.initialize(),
    passportSession = passport.session(),
    flashMiddleware = flash();

var populateSession = (req: express.Request, res: express.Response, next: Function) => {
    expressSession(req, res, (err) => {
        if (_.isObject(err)) {
            return next(err);
        }

        passportInitialize(req, res, (err) => {
            if (_.isObject(err)) {
                return next(err);
            }

            passportSession(req, res, (err) => {
                if (_.isObject(err)) {
                    return next(err);
                }

                flashMiddleware(req, res, next);
            });
        });
    });
};

export = populateSession;

import path = require('path');
import express = require('express');
import router = require('./routes');
import config = require('./config');
import passport = require('passport');

var session = require('express-session'),
    mongoStore = require('connect-mongo')({ session: session }),
    flash = require('connect-flash'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    compress = require('compression'),
    logger = require('morgan');

var expressConfig = (app: express.Application) => {
    'use strict';

    app.use(compress({
        filter: (req: express.Request, res: express.Response) => {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    app
        .set('views', path.join(__dirname, '../app/views'))
        .set('view engine', 'jade')
        .use(logger('dev'))
        .use(bodyParser.json())
        .use(bodyParser.urlencoded())
        .use(cookieParser())
        .use(express.static(path.join(__dirname, '../../public')));

    // express/mongo session storage
    app.use(session({
        secret: 'd@s !t m@n#',
        store: new mongoStore({
            url: config.db,
            collection: 'sessions'
        })
    }));

    // use passport session
    app
        .use(passport.initialize())
        .use(passport.session())
        .use(flash());

    (<any>app).use(router);

    app.use((req: express.Request, res: express.Response, next: Function) => {
        var err = new Error('Not Found');
        // err.status = 404;
        next(err);
    });

    // production error handler
    // no stacktraces leaked to user
    app.use((err: any, req: express.Request, res: express.Response, next: Function) => {
        res.status(err.status || 500);
        // res.render('error', {
        //     message: err.message,
        //     error: {}
        // });
    });
};

export = expressConfig;
/// <reference path="../typings/tsd.d.ts" />
import mongoose = require('mongoose');
import express = require('express');
import passport = require('passport');
import _ = require('underscore');
import userModels = require('../models/user');
import format = require('../utils/format');

var User = userModels.User;

// auth callback
export var authCallback = (req: express.Request, res: express.Response) => {
    res.redirect('/');
};

// login user
export var login = (req: express.Request, res: express.Response) => {
    passport.authenticate('local', (err, user, info) => {
        var response = format.response(err || info, req.user);

        if (_.isObject(user)) {
            req.logIn(user, (err) => {
                response = format.response(err, req.user);
                res.status(response.status).json(response.body);
            });
        } else {
            res.status(response.status).json(response.body);
        }
    })(req, res, null);
};

// log out
export var logout = (req: express.Request, res: express.Response) => {
    req.session.destroy(() => {
        var response = format.response();
        res.status(response.status).json(response.body);
    });
};

// create user
export var create = (req: express.Request, res: express.Response, next: Function) => {
    delete req.body._id;
    var userDoc = new User(req.body);
    userDoc.provider = 'local';

    userDoc.save<userModels.IUser>((err, user) => {
        var response = format.response(err, req.user);
        if (_.isObject(err)) {
            res.status(response.status).json(response.body);
        } else {
            req.logIn(user, (err) => {
                response = format.response(err, req.user);
                res.status(response.status).json(response.body);
            });
        }
    });
};

// show profile
export var show = (req: express.Request, res: express.Response) => {
    var user = (<any>req).profile,
        response = format.response(null, user);

    res.status(response.status).json(response.body);
};

// send user
export var me = (req: express.Request, res: express.Response) => {
    var user = req.user,
        response = format.response(null, user);

    res.status(response.status).json(response.body);
};

// find by id
export var user = (req: express.Request, res: express.Response, next: Function, id: string) => {
    User.findOne({
        _id: id
    }).exec((err, user) => {
        if (err) {
            return next(err);
        } else if (!user) {
            return next(new Error('Failed to load user ' + id));
        }

        (<any>req).profile = user;
        next();
    });
};

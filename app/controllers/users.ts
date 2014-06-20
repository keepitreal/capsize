/// <reference path="../../typings/tsd.d.ts" />
import mongoose = require('mongoose');
import express = require('express');
import _ = require('underscore');
import userModels = require('../models/user');
import async = require('async');
import config = require('../../config/config');


// TODO: When mongoose type definitions are updated, we can remove the type casting.
var User: userModels.IUserModel = (<any>mongoose).model('User');

// auth callback
export var authCallback = (req: express.Request, res: express.Response) => {
    res.redirect('/');
};

// get login page
export var login = (req: express.Request, res: express.Response) => {
    res.render('users/login', {
        title: 'Login',
        message: (<any>req).flash('error')
    });
};

// get register page
export var register = (req: express.Request, res: express.Response) => {
    res.render('users/register', {
        title: 'Register',
        user: new User(null)
    });
};

// log out
export var logout = (req: express.Request, res: express.Response) => {
    req.session.destroy(() => {
        res.send(200);
    });
};

// log in user
export var session = (req: express.Request, res: express.Response) => {
    res.redirect('/');
};

// create user
export var create = (req: express.Request, res: express.Response, next: Function) => {
    delete req.body._id;
    var userDoc = new User(req.body);
    userDoc.provider = 'local';

    userDoc.save<userModels.IUser>((err, user) => {
        if (err) {
            return res.redirect('users/register');
        }
        req.logIn(user, (err: any) => {
            if (err) {
                return next(err);
            }
            return res.redirect('/#!/');
        });
    });
};

// show profile
export var show = (req: express.Request, res: express.Response) => {
    var user = (<any>req).profile;
    res.render('users/show', {
        title: user.name,
        user: user
    });
};

// send user
export var me = (req: express.Request, res: express.Response) => {
    var user = req.user;

    if (_.isUndefined(user)) {
        return res.json(200, null);
    }
    console.log(user);
    res.json(200, __filterUser(user, ['hashed_password', 'salt']));
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

        (<any>req).profile = __filterUser(user, ['hashed_password', 'salt']);
        next();
    });
};

var __filterUser = (user: userModels.IUserDocument, properties: Array<string>) => {
    return _.omit(user.toObject(), properties);
};

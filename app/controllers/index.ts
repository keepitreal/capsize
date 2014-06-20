/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import _ = require('underscore');
import userModels = require('../models/user');

export var render = (req: express.Request, res: express.Response) => {
    var user = req.user;

    if (_.isObject(user)) {
        user = __filterUser(user, ['hashed_password', 'salt']);
    }

    res.render('index', {
        user: _.isObject(user) ? JSON.stringify(user) : 'null'
    });
};

var __filterUser = (user: userModels.IUserDocument, properties: Array<string>) => {
    return _.omit(user.toObject(), properties);
};

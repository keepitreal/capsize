/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import userModels = require('../../app/models/user');

// generic require login routing middleware
export var requiresLogin = (req: express.Request, res: express.Response, next: Function) => {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

// user authorization routing middleware
export var user = {
    hasAuthorization: (req: express.Request, res: express.Response, next: Function) => {
        if ((<any>req).profile.id !== req.user._id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

// post authorization routing middleware
export var post = {
    hasAuthorization: (req: express.Request, res: express.Response, next: Function) => {
        if ((<any>req).post.user._id.toString() !== req.user._id.toString()) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

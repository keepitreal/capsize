/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import mongoose = require('mongoose');
import models = require('../models/post');
import _ = require('underscore');
import format = require('../tools/format');

// TODO: When mongoose type definitions are updated, we can remove the type casting.
var Post: models.IPostModel = (<any>mongoose).model('Post');

// find a post by id
export var post = (req: express.Request, res: express.Response, next: Function, id: string) => {
    Post.load(id, (err, post) => {
        if (err) {
            return next(err);
        } else if (!_.isObject(post)) {
            return next(new Error('Failed to load post ' + id));
        }

        (<any>req).post = post;
        next();
    });
};

// Create a post
export var create = (req: express.Request, res: express.Response) => {
    var postDoc = new Post(req.body);
    postDoc.user = req.user;

    postDoc.save<models.IPost>((err, post) => {
        var response = format.response(err, post);

        res.json(response.status, response.body);
    });
};

// Update post
export var update = (req: express.Request, res: express.Response) => {
    var postDoc: models.IPostDocument = (<any>req).post;
    
    /* tslint:disable:ban */
    postDoc = _.extend(postDoc, req.body);
    /* tslint:enable:ban */

    postDoc.save<models.IPost>((err, post) => {
        var response = format.response(err, post);
        res.json(response.status, response.body);
    });
};

// Delete a post
export var destroy = (req: express.Request, res: express.Response) => {
    var postDoc: models.IPostDocument = (<any>req).post;
    postDoc.remove((err: any) => {
        var response = format.response(err, postDoc);
        res.json(response.status, response.body);
    });
};

// Show a post
export var show = (req: express.Request, res: express.Response) => {
    var response = format.response(null, (<any>req).post);
    res.json(response.status, response.body);
};

// List all articles
export var all = (req: express.Request, res: express.Response) => {
    Post.find(null).sort('-created').populate('user').exec((err, posts) => {
        var response = format.response(err, posts);
        res.json(response.status, response.body);
    });
};

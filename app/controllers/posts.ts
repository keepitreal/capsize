/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import mongoose = require('mongoose');
import models = require('../models/post');
import _ = require('underscore');

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
        if (err) {
            // TODO: When express declarations are updated we can remove this.
            return (<any>res).send('users/signup', {
                errors: err.errors,
                post: post
            });
        }
        res.json(post);
    });
};

// Update post
export var update = (req: express.Request, res: express.Response) => {
    var postDoc: models.IPostDocument = (<any>req).post;
    
    /* tslint:disable:ban */
    postDoc = _.extend(postDoc, req.body);
    /* tslint:enable:ban */

    postDoc.save<models.IPost>((err, post) => {
        res.json(200, post);
    });
};

// Delete a post
export var destroy = (req: express.Request, res: express.Response) => {
    var postDoc: models.IPostDocument = (<any>req).post;
    postDoc.remove((err: any) => {
        if (err) {
            res.json(500, err);
        } else {
            res.json(200, postDoc);
        }
    });
};

// Show a post
export var show = (req: express.Request, res: express.Response) => {
    res.json(200, (<any>req).post);
};

// List all articles
export var all = (req: express.Request, res: express.Response) => {
    Post.find(null).sort('-created').populate('user').exec((err, posts) => {
        if (err) {
            res.json(500, err);
        } else {
            res.json(200, posts);
        }
    });
};

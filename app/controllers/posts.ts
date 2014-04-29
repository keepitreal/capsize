import async = require('async');

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    _ = require('underscore');

// find a post by id
exports.post = function (req, res, next, id) {
    Post.load(id, function (err, post) {
        if (err) return next(err);
        if (!post) return next(new Error('Failed to load post ' + id));
        req.post = post;
        next();
    });
};

// Create a post
exports.create = function (req, res) {
    var post = new Post(req.body);
    post.user = req.user;

    post.save(function (err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                post: post
            });
        } else {
            res.jsonp(post);
        }
    });
};

// Update post
exports.update = function (req, res) {
    var post = req.post;
    post = _.extend(post, req.body);
    post.save(function (err) {
        res.jsonp(post);
    });
};

// Delete a post
exports.destroy = function (req, res) {
    var post = req.post;
    post.remove(function (err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(post);
        }
    });
};

// Show a post
exports.show = function (req, res) {
    res.jsonp(req.post);
};

// List all articles
exports.all = function (req, res) {
    Post.find().sort('-created').populate('user').exec(function (err, posts) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(posts);
        }
    });
};

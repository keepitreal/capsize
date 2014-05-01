import async = require('async');
var _ = require('underscore'),
	mongoose = require('mongoose');

exports.render = function (req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};
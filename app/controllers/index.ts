import async = require('async');
import _ = require('underscore');
var mongoose = require('mongoose');

exports.render = function (req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};
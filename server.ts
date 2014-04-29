/// <reference path="typings/express/express.d.ts" />
import express = require('express');
import fs = require('fs');
import auth = require('./config/middleware/auth');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    mongoose = require('mongoose'),
    passport = require('passport'),
    logger = require('morgan');

import config = require('./config/config');

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Bootstrap models
var models_path = __dirname + '/app/models',
    isJSExt = /\.js$/gm; // ensures that only .js files are read (not .ts or .js.map)

// Recursively walk through and require models
var walk = function (path) {
    fs.readdirSync(path).forEach(function (file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);

        if (stat.isFile() && isJSExt.test(newPath)) {
            require(newPath);
        }
        else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

require('./config/passport')(passport);

var app = express();

require('./config/express')(app, passport);

var port = config.port;
var server = app.listen(port, function () {
    console.log("Listening on address %d.", server.address().port);
});

// either use mean-logger or find correct method for morgan
//logger.init(app, mongoose);

exports = module.exports = app;
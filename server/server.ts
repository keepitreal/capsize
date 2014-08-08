/// <reference path="typings/express/express.d.ts" />
import express = require('express');
import fs = require('fs');
import mongoose = require('mongoose');
import passport = require('passport');
import config = require('./config/config');

require('./config/middleware/auth');

// bootstrap db connection
mongoose.connect(config.db);

// bootstrap models
var models_path = __dirname + '/models',
    isJSExt = /\.js$/gm; // ensures that only .js files are read (not .ts or .js.map)

// recursively walk through and require models
var walk = (path: string) => {
    fs.readdirSync(path).forEach((file: string) => {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);

        if (stat.isFile() && isJSExt.test(newPath)) {
            require(newPath);
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

require('./config/passport')(passport);

var app = express();

require('./config/express')(app, passport);

var port = config.port;
var server = app.listen(port, () => {
    console.log('Listening on address %d.', server.address().port);
});

// either use mean-logger or find correct method for morgan
// logger.init(app, mongoose);

export = app;

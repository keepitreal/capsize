/// <reference path="../typings/tsd.d.ts" />
import path = require('path');

process.env.NODE_ENV = 'development';

var cfg = require('./env/' + process.env.NODE_ENV + '.json') || {};

export var root = path.normalize(__dirname + '/../..');
export var port = process.env.PORT || 3000;
export var db = process.env.MONGOHQ_URL || cfg.db;
export var app = cfg.app;
export var email = cfg.email;
export var facebook = cfg.facebook;
export var twitter = cfg.twitter;
export var linkedin = cfg.linkedin;
export var google = cfg.google;

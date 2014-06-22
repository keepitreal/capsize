/// <reference path="../typings/tsd.d.ts" />
import all = require('./env/all');

var cfg = require('./env/' + process.env.NODE_ENV + '.json') || {};

export var root = all.root;
export var port = all.port;
export var db = all.db || cfg.db;
export var app = cfg.app;
export var email = cfg.email;
export var facebook = cfg.facebook;
export var twitter = cfg.twitter;
export var linkedin = cfg.linkedin;
export var google = cfg.google;

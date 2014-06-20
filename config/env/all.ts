/// <reference path="../../typings/tsd.d.ts" />

import path = require('path');

export var root = path.normalize(__dirname + '/../..');
export var port = process.env.PORT || 3000;
export var db = process.env.MONGOHQ_URL;

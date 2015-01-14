/// <reference path="../../references.d.ts" />
'use strict';

import plat = require('platypus');
import marked = require('../../lib/marked/index');

var renderer = new marked.Renderer();

export function Marked() {
	marked.setOptions({
		renderer: renderer
	});

	return marked;
}

plat.register.injectable('marked', Marked, null, plat.register.injectable.STATIC);

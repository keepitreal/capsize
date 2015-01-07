/// <reference path="../../references.d.ts" />
'use strict';

import plat = require('platypus');

declare var marked;
var renderer = new marked.Renderer();

export function Marked() {
	marked.setOptions({
		renderer: renderer
	});

	return marked;
}

plat.register.injectable('marked', Marked, null, plat.register.injectable.STATIC);

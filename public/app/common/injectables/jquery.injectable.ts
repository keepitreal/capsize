/// <reference path="../../references.d.ts" />
'use strict';

import plat = require('platypus');

declare var $;

export function jQueryFactory() {
	return $;
}

plat.register.injectable('jQuery', jQueryFactory);

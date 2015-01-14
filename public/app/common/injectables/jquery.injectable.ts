/// <reference path="../../references.d.ts" />
'use strict';

import plat = require('platypus');
import $ = require('../../lib/jquery/dist/jquery');

export function jQueryFactory() {
	return $;
}

plat.register.injectable('jQuery', jQueryFactory);

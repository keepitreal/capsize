/// <reference path="../../references.d.ts" />
'use strict';

import plat = require('../../lib/platypus/platypus');
import $ = require('jquery');

export function jQueryFactory() {
	return $;
}

plat.register.injectable('jQuery', jQueryFactory);

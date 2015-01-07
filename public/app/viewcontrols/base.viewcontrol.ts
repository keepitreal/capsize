/// <reference path="../references.d.ts" />

'use strict';

import plat = require('platypus');

export class BaseViewControl extends plat.ui.WebViewControl {
	$utils = plat.acquire(plat.IUtils);
}

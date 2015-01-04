/// <reference path="../references.d.ts" />

module capsize.viewcontrols {
	'use strict';

	export class BaseViewControl extends plat.ui.WebViewControl {
		$utils = plat.acquire(plat.IUtils);
	}
}
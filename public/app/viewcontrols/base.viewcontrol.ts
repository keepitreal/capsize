/// <reference path="../references.d.ts" />

module platynem.viewcontrols {
	'use strict';

	export class BaseViewControl extends plat.ui.WebViewControl {
		$utils: plat.IUtils = plat.acquire(plat.IUtils);
	}
}
/// <reference path="../../references.d.ts" />

module capsize.viewcontrols.tools.about {
	'use strict';

	export class ToolsHomeViewControl extends plat.ui.WebViewControl {
		title = 'About';
		templateUrl = 'app/viewcontrols/about/about.viewcontrol.html';

		context = {
			title: 'About!'
		};
		
	}

	plat.register.viewControl('about', ToolsHomeViewControl, null, ['/about', 'about']);
}
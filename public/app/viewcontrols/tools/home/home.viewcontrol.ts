/// <reference path="../../../references.d.ts" />

module capsize.viewcontrols {
	'use strict';

	export class ToolsHomeViewControl extends plat.ui.WebViewControl {
		title = 'Tools';
		templateUrl = 'app/viewcontrols/tools/home/home.viewcontrol.html';

		context = {
			title: 'Tools!'
		};
	}

	plat.register.viewControl('tools', ToolsHomeViewControl, null, ['/tools', 'tools']);
}
/// <reference path="../../../references.d.ts" />

module platynem.viewcontrols {
	'use strict';

	export class BoxShadowViewControl extends plat.ui.WebViewControl {
		title = 'Tools - Box Shadow Generator';
		templateUrl = 'app/viewcontrols/tools/boxshadow/boxshadow.viewcontrol.html';

		context = {
			title: 'Box Shadow Generator'
		};
	}

	plat.register.viewControl('boxshadow', BoxShadowViewControl, null, ['/tools/boxshadowgenerator']);
}
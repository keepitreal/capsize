/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('../../../lib/platypus/platypus');

export class ToolsHomeViewControl extends plat.ui.WebViewControl {
	title = 'Tools';
	templateUrl = 'app/viewcontrols/tools/home/home.viewcontrol.html';

	context = {
		title: 'Tools!'
	};
}

plat.register.viewControl('tools', ToolsHomeViewControl, null, ['/tools', 'tools']);

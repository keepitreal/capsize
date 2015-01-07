/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('platypus');
import baseViewcontrol = require('../../base.viewcontrol');

export class ToolsHomeViewControl extends baseViewcontrol.BaseViewControl {
	title = 'Tools';
	templateUrl = 'app/viewcontrols/tools/home/home.viewcontrol.html';

	context = {
		title: 'Tools!'
	};
}

plat.register.viewControl('tools', ToolsHomeViewControl, null, ['/tools', 'tools']);

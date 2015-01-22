/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('../../../lib/platypus/platypus');

export class SocialAuth extends plat.ui.TemplateControl {
    templateUrl = 'app/common/templatecontrols/socialauth/socialauth.templatecontrol.html';
}

plat.register.control('social-auth', SocialAuth);

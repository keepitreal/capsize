module platynem.templatecontrols {
    'use strict';

    export class SocialAuth extends plat.ui.TemplateControl {
        templateUrl = 'app/common/templatecontrols/socialauth/socialauth.templatecontrol.html';
    }

    plat.register.control('social-auth', SocialAuth);
}

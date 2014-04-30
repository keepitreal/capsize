module platynem.templatecontrols {
    export class NavigationBar extends plat.ui.TemplateControl {
        templateUrl = 'app/common/templatecontrols/navigation.templatecontrol.html';

        context = {
            user: this.user
        };

        constructor(private user: services.IUserInfo) {
            super();
        }
    }

    plat.register.control('navigation', NavigationBar, [
        platynem.services.UserInfo
    ]);
}
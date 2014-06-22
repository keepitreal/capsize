module platynem.templatecontrols {
    'use strict';

    export class NavigationBar extends plat.ui.TemplateControl {
        templateUrl = 'app/common/templatecontrols/navigation/navigation.templatecontrol.html';

        context = {
            user: <models.IUser>null
        };

        constructor(private usersRepository: platynem.repositories.UsersRepository) {
            super();
        }

        initialize() {
            this.getUser();
            this.on('routeChanged', this.getUser);
        }

        getUser() {
            this.usersRepository.getUser().then((user) => {
                this.context.user = user;
            });
        }

        logout(ev: Event) {
            ev.preventDefault();
            this.context.user = null;
            this.usersRepository.logout();
        }
    }

    plat.register.control('navigation', NavigationBar, [
        platynem.repositories.UsersRepository
    ]);
}
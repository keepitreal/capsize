module platynem.templatecontrols {
    'use strict';

    export class NavigationBar extends plat.ui.TemplateControl {
        templateUrl = 'app/common/templatecontrols/navigation.templatecontrol.html';

        context = {
            user: <models.IUser>null
        };

        constructor(private usersRepository: platynem.repositories.UsersRepository) {
            super();
        }

        initialize() {
            this.usersRepository.getUser().then((user) => {
                this.context.user = user;
            });
        }
    }

    plat.register.control('navigation', NavigationBar, [
        platynem.repositories.UsersRepository
    ]);
}
/// <reference path="../../../references.d.ts" />

module capsize.templatecontrols {
    'use strict';

    export class NavigationBar extends plat.ui.TemplateControl {
        templateUrl = 'app/common/templatecontrols/navigation/navigation.templatecontrol.html';
        replaceWith = 'nav';

        context = {
            user: <models.IUser>null
        };

        constructor(private usersRepository: capsize.repositories.UsersRepository) {
            super();
        }

        initialize() {
            this.on('routeChanged', this.getUser);
            return this.getUser();
        }

        getUser() {
            return this.usersRepository.getUser().then((user) => {
                this.context.user = user;
            });
        }

        logout(ev: Event) {
            ev.preventDefault();
            this.context.user = null;
            return this.usersRepository.logout();
        }

        toggleVisibility() {
            this.dom.toggleClass(this.element, 'navigation-hidden');
        }
    }

    plat.register.control('navigation', NavigationBar, [
        capsize.repositories.UsersRepository
    ]);
}

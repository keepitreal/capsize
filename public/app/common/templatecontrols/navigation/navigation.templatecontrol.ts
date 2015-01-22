/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('../../../lib/platypus/platypus');
import userModel = require('../../../models/user.model');
import usersRepository = require('../../../repositories/users.repository');

export class NavigationBar extends plat.ui.TemplateControl {
    templateUrl = 'app/common/templatecontrols/navigation/navigation.templatecontrol.html';

    context = {
        user: <userModel.IUser>null
    };

    constructor(private usersRepository: usersRepository.UsersRepository) {
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
}

plat.register.control('navigation', NavigationBar, [
    usersRepository.UsersRepository
]);

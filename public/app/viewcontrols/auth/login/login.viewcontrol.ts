/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('../../../lib/platypus/platypus');
import userModel = require('../../../models/user.model');
import usersRepository = require('../../../repositories/users.repository');

export class LoginViewControl extends plat.ui.WebViewControl {
    title = 'PlatyNEM - Login';
    templateUrl = 'app/viewcontrols/auth/login/login.viewcontrol.html';

    constructor(private usersRepository: usersRepository.UsersRepository) {
        super();
    }

    context = {
        user: <userModel.IUser>{},
        error: null
    };

    login(user: userModel.IUser) {
        return this.usersRepository.login(user)
            .then(() => {
                this.navigator.goBack();
            }).catch((error) => {
                this.context.error = error;
            });
    }
}

plat.register.viewControl('loginViewControl', LoginViewControl, [
    usersRepository.UsersRepository
], ['login']);

/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('../../../lib/platypus/platypus');
import userModel = require('../../../models/user.model');
import usersRepository = require('../../../repositories/users.repository');

export class RegisterViewControl extends plat.ui.WebViewControl {
    title = 'PlatyNEM - Register';
    templateUrl = 'app/viewcontrols/auth/register/register.viewcontrol.html';
    $utils = plat.acquire(plat.IUtils);

    constructor(private usersRepository: usersRepository.UsersRepository) {
        super();
    }

    context = {
        user: <userModel.IUser>{},
        errors: <Array<{ message: string; }>>[]
    };

    create(user: userModel.IUser) {
        return this.usersRepository.create(user)
            .then(() => {
                this.navigator.goBack();
            })
            .catch((response) => {
                var utils = this.$utils;
                this.context.errors = utils.map((err) => {
                    return err;
                }, <Array<{ message: string }>>response.errors);
            });
    }

    navigatedTo(route: plat.web.IRoute<any>) {
        if (this.$utils.isObject(route.query)) {
            this.$utils.forEach((error) => {
                this.context.errors.push({ message: decodeURI(error) });
            }, <Array<string>>route.query);
        }
    }
}

plat.register.viewControl('registerViewControl', RegisterViewControl, [
    usersRepository.UsersRepository
], ['register']);

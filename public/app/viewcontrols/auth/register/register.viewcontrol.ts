/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('platypus');
import userModel = require('../../../models/user.model');
import usersRepository = require('../../../repositories/users.repository');
import baseViewcontrol = require('../../base.viewcontrol');

export class RegisterViewControl extends baseViewcontrol.BaseViewControl {
    title = 'PlatyNEM - Register';
    templateUrl = 'app/viewcontrols/auth/register/register.viewcontrol.html';

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

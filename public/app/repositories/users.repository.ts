/// <reference path="../references.d.ts" />
'use strict';

import plat = require('platypus');
import userModel = require('../models/user.model');
import usersService = require('../services/users.service');

export class UsersRepository {
    private _currentUser: userModel.IUser;

    constructor(private userFactory: userModel.IUserFactory,
        private usersService: usersService.IUsersService,
        private Promise: plat.async.IPromise,
        private utils: plat.IUtils) { }

    create(user: any): plat.async.IThenable<userModel.IUser> {
        var u = this.userFactory.createUser(user);
        return this.usersService.create(u, user.password);
    }

    getUser() {
        return this.usersService.loggedInUser().then((user) => {
            return this.userFactory.createUser(user);
        });
    }

    login(user: any): plat.async.IThenable<void> {
        var u = this.userFactory.createUser(user);
        return this.usersService.login(u, user.password).then((user) => {
            this._currentUser = this.userFactory.createUser(user);
        });
    }

    logout(): plat.async.IThenable<void> {
        return this.usersService.logout().then(() => {
            this._currentUser = null;
        });
    }

    currentUser(): plat.async.IThenable<userModel.IUser> {
        if (this.utils.isObject(this._currentUser)) {
            return this.Promise.resolve(this.utils.clone(this._currentUser, true));
        }
        return this.usersService.loggedInUser()
            .then((user) => {
                this._currentUser = user;

                return this.utils.clone(this._currentUser, true);
            });
    }
}

plat.register.injectable('usersRepository', UsersRepository, [
    userModel.UserFactory,
    usersService.UsersService,
    plat.async.IPromise,
    plat.IUtils
]);

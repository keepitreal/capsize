/// <reference path="../references.d.ts" />
'use strict';

import plat = require('platypus');
import userModel = require('../models/user.model');
import baseService = require('./base.service');

export class UsersService extends baseService.BaseService implements IUsersService {
    constructor(private utils: plat.IUtils) {
        super();
    }

    create(user: userModel.IUser, password: string): plat.async.IThenable<any> {
        return this._http({
            url: '/users',
            method: 'POST',
            data: this.utils.extend({}, user, {
                password: password
            })
        });
    }

    findOne(id: string): plat.async.IThenable<userModel.IUser> {
        return this._http({
            url: '/users/' + id,
            method: 'GET'
        });
    }

    login(user: userModel.IUser, password: string): plat.async.IThenable<any> {
        return this._http({
            url: '/login',
            method: 'POST',
            data: this.utils.extend({}, user, { password: password })
        });
    }

    logout(): plat.async.IThenable<void> {
        return this._http({
            url: '/logout',
            method: 'POST'
        });
    }

    loggedInUser(): plat.async.IThenable<userModel.IUser> {
        return this._http({
            url: '/users/me',
            method: 'GET'
        });
    }
}

export interface IUsersService {
    /**
     * create
     * Creates a single user
     * @param user: the user to be created
     */
    create(user: userModel.IUser, password: string): plat.async.IThenable<any>;

    /**
     * findOne
     * Finds a single user
     * @param id: the id for the requested user
     */
    findOne(id: string): plat.async.IThenable<userModel.IUser>;

    /**
     * login
     * Creates a session for the user
     * @param user: the user to be updated
     */
    login(user: userModel.IUser, password: string): plat.async.IThenable<any>;

    /**
     * logout
     * Self explanatory
     */
    logout(): plat.async.IThenable<void>;

    /**
     * loggedInUser
     * Gets the currently logged in user
     */
    loggedInUser(): plat.async.IThenable<userModel.IUser>;
}

plat.register.injectable('usersService', UsersService, [
    plat.IUtils
]);

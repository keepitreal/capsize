/// <reference path="../references.d.ts" />
'use strict';

import plat = require('../lib/platypus/platypus');

export class User {
    private static utils: plat.IUtils;

    static createUser(user: any): IUser {
        if (User.utils.isObject(user)) {
            return new User(user._id, user.name, user.email);
        }
    }

    constructor(public _id: string,
        public name: string,
        public email: string) { }
}

export interface IUserFactory {
    createUser(user: any): IUser;
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
}

export function UserFactory(utils?: plat.IUtils) {
    (<any>User).utils = utils;
    return User;
}

plat.register.injectable('userFactory', UserFactory, [
    plat.IUtils
], plat.register.injectable.FACTORY);

module platynem.models {
    'use strict';

    export class User {
        static createUser(user: any): IUser {
            return new User(user._id, user.name, user.email);
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

    export function UserFactory() {
        return User;
    }

    plat.register.injectable('userFactory', UserFactory, undefined, plat.register.injectable.FACTORY);
}

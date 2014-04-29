module platynem.models {
    export class User {
        static createUser(user: any): IUser {
            return User.__utils.deepExtend({}, {
                id: user._id,
                name: user.name,
                email: user.email
            });
        }

        private static __utils: plat.IUtils;
    }

    export interface IUserFactory {
        createUser(user: any): IUser;
    }

    export interface IUser {
        _id: string;
        name: string;
        email: string;
    }

    export function UserFactory(__utils) {
        (<any>User).__utils = __utils;
        return User;
    }

    plat.register.injectable('userFactory', UserFactory, [
        plat.Utils
    ], plat.register.injectableType.STATIC);
}
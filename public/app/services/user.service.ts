module platynem.services {
    'use strict';

    export function UserInfo(): IUserInfo {
        return;
    }

    export interface IUserInfo {
        _id: string;
        name: string;
        email: string;
    }

    plat.register.injectable('user', UserInfo);
}
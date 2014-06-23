module platynem.services {
    'use strict';

    export class UsersService extends BaseService implements IUsersService {
        constructor(private utils: plat.IUtils) {
            super();
        }

        create(user: models.IUser, password: string): plat.async.IThenable<any> {
            return this._http({
                url: '/users',
                method: 'POST',
                data: this.utils.extend({}, user, {
                    password: password
                })
            });
        }

        findOne(id: string): plat.async.IThenable<models.IUser> {
            return this._http({
                url: '/users/' + id,
                method: 'GET'
            });
        }

        login(user: models.IUser, password: string): plat.async.IThenable<any> {
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

        loggedInUser(): plat.async.IThenable<models.IUser> {
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
        create(user: models.IUser, password: string): plat.async.IThenable<any>;

        /**
         * findOne
         * Finds a single user
         * @param id: the id for the requested user
         */
        findOne(id: string): plat.async.IThenable<models.IUser>;

        /**
         * login
         * Creates a session for the user
         * @param user: the user to be updated
         */
        login(user: models.IUser, password: string): plat.async.IThenable<any>;

        /**
         * logout
         * Self explanatory
         */
        logout(): plat.async.IThenable<void>;

        /**
         * loggedInUser
         * Gets the currently logged in user
         */
        loggedInUser(): plat.async.IThenable<models.IUser>;
    }

    plat.register.injectable('usersService', UsersService, [
        plat.IUtils
    ]);
}

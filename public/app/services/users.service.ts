module platynem.services {
    'use strict';

    export class UsersService implements IUsersService {
        constructor(private http: plat.async.IHttp,
            private utils: plat.IUtils) { }

        create(user: models.IUser, password: string) {
            return this.__http({
                url: '/users',
                method: 'POST',
                data: this.utils.extend({}, user, {
                    password: password
                })
            }).then<any>((result) => {
                return result.response;
            });
        }

        findOne(id: string) {
            return this.__http({
                url: '/users/' + id,
                method: 'GET'
            }).then<models.IUser>((result) => {
                return result.response;
            });
        }

        findAll() {
            return this.__http({
                url: '/users',
                method: 'GET'
            }).then<Array<models.IUser>>((result) => {
                return result.response;
            });
        }

        login(user: models.IUser, password: string) {
            return this.__http({
                url: '/users/session',
                method: 'POST',
                data: this.utils.extend({}, user, { password: password })
            }).then((result) => {
                if (result && result.response) {
                    return result.response;
                }
            });
        }

        logout() {
            return this.__http({
                url: '/logout',
                method: 'POST'
            }).then((result) => { });
        }

        loggedInUser() {
            return this.__http({
                url: '/users/me',
                method: 'GET'
            }).then((result) => {
                return result.response;
            });
        }

        /**
         * Private wrapper method
         * @param {object} options: options defined by plat.asyc.IHttpConfigStatic
         */
        private __http(options: plat.async.IHttpConfig) {
            return this.http.json<any>(options);
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
         * findAll
         * Finds all blog posts
         */
        findAll(): plat.async.IThenable<Array<models.IUser>>;

        /**
         * login
         * Creates a session for the user
         * @param user: the user to be updated
         */
        login(user: models.IUser, password: string): plat.async.IThenable<void>;

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
        plat.async.IHttp,
        plat.IUtils
    ]);
}

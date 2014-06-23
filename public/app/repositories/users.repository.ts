module platynem.repositories {
    'use strict';

    export class UsersRepository {
        private users: Array<models.IUser>;
        private _currentUser: models.IUser;

        constructor(private userFactory: models.IUserFactory,
            private usersService: services.IUsersService,
            private Promise: plat.async.IPromise,
            private utils: plat.IUtils) { }

        create(user: any): plat.async.IThenable<any> {
            var u = this.userFactory.createUser(user);
            return this.usersService.create(u, user.password);
        }

        getAll(): plat.async.IThenable<Array<models.IUser>> {
            if (!this.utils.isArray(this.users)) {
                return this.usersService.findAll().then((users) => {
                    this.users = users;
                    return this.utils.clone(users, true);
                });
            }

            return this.Promise.cast(this.users);
        }

        getUser() {
            return this.usersService.loggedInUser().then((user) => {
                return this.userFactory.createUser(user);
            });
        }

        login(user: any): plat.async.IThenable<void> {
            var u = this.userFactory.createUser(user);
            return this.usersService.login(u, user.password);
        }

        logout(): plat.async.IThenable<void> {
            return this.usersService.logout().then(() => {
                this._currentUser = null;
            });
        }

        currentUser(): plat.async.IThenable<models.IUser> {
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
        platynem.models.UserFactory,
        platynem.services.UsersService,
        plat.async.IPromise,
        plat.IUtils
    ]);
}
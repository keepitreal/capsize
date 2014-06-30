module platynem.tests.mock {
    export class UsersService implements services.IUsersService {
        static user: models.IUser = {
            _id: '123',
            name: 'Test',
            email: 'test@test.com'
        };

        constructor(private Promise: plat.async.IPromise) { }

        create(user: models.IUser, password: string): plat.async.IThenable<any> {
            return this._http(user);
        }

        findOne(id: string): plat.async.IThenable<models.IUser> {
            return this._http(UsersService.user);
        }

        login(user: models.IUser, password: string): plat.async.IThenable<any> {
            return this._http(user);
        }

        logout(): plat.async.IThenable<void> {
            return this._http();
        }

        loggedInUser(): plat.async.IThenable<models.IUser> {
            return this._http(UsersService.user);
        }

        _http(data?: any) {
            return this.Promise.resolve(data);
        }
    }

    export function usersService() {
        plat.register.injectable('usersService', UsersService, [
            plat.async.IPromise
        ]);
    }
}

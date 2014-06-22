module platynem.repositories {
    'use strict';

    export class UsersRepository {
        constructor(private userFactory: models.IUserFactory,
                    private usersService: services.IUsersService) { }

        getUser() {
            return this.usersService.loggedInUser().then((user) => {
                return this.userFactory.createUser(user);
            });
        }
    }

    plat.register.injectable('usersRepository', UsersRepository, [
        platynem.models.UserFactory,
        platynem.services.UsersService
    ]);
}
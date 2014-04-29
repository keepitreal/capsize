module platynem.repositories {
    export class UsersRepository {
        constructor(private userFactory: models.IUserFactory,
                    private usersService: services.IUserInfo) { }

        getUser() {
            var user = this.usersService;
            return this.userFactory.createUser(user);
        }
    }

    plat.register.injectable('usersRepository', UsersRepository, [
        platynem.models.UserFactory,
        platynem.services.UserInfo
    ]);
}
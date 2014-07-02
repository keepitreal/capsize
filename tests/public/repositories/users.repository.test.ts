module platynem.repository.tests {
    describe('UsersRepository Tests', () => {
        mock.usersService();
        var repository: repositories.UsersRepository = plat.acquire(repositories.UsersRepository);

        it('should test create', (done) => {
            repository.create(mock.UsersService.user).then((user) => {
                expect(user._id).toBe('123');
                done();
            });
        });

        it('should test getUser', (done) => {
            repository.getUser().then((user) => {
                expect(user._id).toBe('123');
                done();
            });
        });

        it('should test login', (done) => {
            repository.login(mock.UsersService.user)
                .then(() => {
                    return repository.currentUser();
                })
                .then((user) => {
                    expect(user._id).toBe('123');
                    done();
                });
        });

        it('should test login', (done) => {
            repository.logout().then(() => {
                expect((<any>repository)._currentUser).toBeNull();
                done();
            });
        });

        it('should test currentUser', (done) => {
            repository.currentUser().then((user) => {
                expect(user._id).toBe('123');
                done();
            });
        });
    });
}

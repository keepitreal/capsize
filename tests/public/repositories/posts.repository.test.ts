module platynem.tests.repositoryTests {
    describe('PostsRepository Tests', () => {
        mock.postsService();
        var repository: repositories.PostsRepository = plat.acquire(repositories.PostsRepository);

        it('should test create', (done) => {
            repository.create(mock.PostsService.post).then((post) => {
                expect(post._id).toBe('123');
                done();
            });
        });

        it('should test update', (done) => {
            repository.update(mock.PostsService.post).then((post) => {
                expect(true).toBe(true);
                done();
            });
        });

        it('should test destroy', (done) => {
            repository.destroy('123').then((post) => {
                expect(true).toBe(true);
                done();
            });
        });

        it('should test getAll', (done) => {
            repository.getAll().then((posts) => {
                expect(posts[0]._id).toBe('123');
                done();
            });
        });

        it('should test getPost', (done) => {
            repository.getPost('123').then((post) => {
                expect(post._id).toBe('123');
                done();
            });
        });
    });
}

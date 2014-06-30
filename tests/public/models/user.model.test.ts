module platynem.tests.modelTests {
    var UserFactory = plat.acquire(models.UserFactory);

    describe('UserFactory Tests', () => {
        it('should test createUser with null', () => {
            var user = UserFactory.createUser(null);

            expect(user).toBeUndefined();
        });

        it('should test createUser with a full user', () => {
            var user = UserFactory.createUser({
                _id: 123,
            });

            expect(user._id).toBe(123);
        });
    });
}

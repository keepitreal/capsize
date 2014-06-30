module platynem.tests {
    var PostFactory = plat.acquire(models.PostFactory);

    describe('PostFactory tests', () => {
        it('should test createPost with null', () => {
            var post = PostFactory.createPost(null);

            expect(post).toBeUndefined();
        });
    });
}

module platynem.models.tests {
    var PostFactory = plat.acquire(models.PostFactory);

    describe('PostFactory Tests', () => {
        it('should test createPost with null', () => {
            var post = PostFactory.createPost(null);

            expect(post).toBeUndefined();
        });

        it('should test createPost with a full post', () => {
            var post = PostFactory.createPost({
                _id: 123,
                title: 'foo'
            });

            expect(post.title).toBe('foo');
            expect(post.updated).toEqual([]);
        });

        it('should test createPost with updated array', () => {
            var date = new Date(),
                post = PostFactory.createPost({
                _id: 123,
                title: 'foo',
                updated: [date]
            });

            expect(post.title).toBe('foo');
            expect(post.updated).toEqual([date]);
        });

        it('should test update with null', () => {
            expect(PostFactory.update(null)).toBeUndefined();
        });

        it('should test update with post', () => {
            var post = PostFactory.update({});

            expect(post.updated.length).toBe(1);
        });

        it('should test getAll with null', () => {
            expect(PostFactory.getAll(null)).toEqual([]);
        });

        it('should test getAll with an array of posts', () => {
            var posts = PostFactory.getAll([
                {
                    title: '1'
                }, {
                    title: '2'
                }
            ]);

            expect(posts[1].title).toBe('2');
        });
    });
}

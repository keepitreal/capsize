module platynem.repositories {
    export class PostsRepository {
        constructor(private postFactory: platynem.models.IPostFactory,
                    private postsService: services.IPostsService) { }

        createPost(post: models.IPost) {
            var p = this.postFactory.createPost(post);
            return this.postsService.createPost(p);
        }

        update(post: any) {
            var p = this.postFactory.update(post);
            this.postsService.update(p);
        }

        destroy(post) {
            this.postsService.destroy(post);
        }

        getPosts(): plat.async.IPromise<Array<models.IPost>, Error> {
            return this.postsService
                .findAll()
                .then((result) => this.postFactory.getAll(result.response));
        }

        getPost(id: string): plat.async.IPromise<models.IPost, Error> {
            return this.postsService
                .findOne(id)
                .then((result) => this.postFactory.createPost(result.response));
        }
    }

    plat.register.injectable('postsRepository', PostsRepository, [
        platynem.models.PostFactory,
        platynem.services.PostsService
    ]);
}
module platynem.repositories {
    'use strict';

    export class PostsRepository {
        constructor(private postFactory: platynem.models.IPostFactory,
                    private postsService: services.IPostsService) { }

        create(post: models.IPost) {
            var p = this.postFactory.createPost(post);
            return this.postsService.create(p);
        }

        update(post: any) {
            var p = this.postFactory.update(post);
            this.postsService.update(p);
        }

        destroy(post) {
            this.postsService.destroy(post);
        }

        getAll(): plat.async.IThenable<Array<models.IPost>> {
            return this.postsService
                .getAll()
                .then((result) => this.postFactory.getAll(result));
        }

        getPost(id: string): plat.async.IThenable<models.IPost> {
            return this.postsService
                .getOne(id)
                .then((result) => this.postFactory.createPost(result));
        }
    }

    plat.register.injectable('postsRepository', PostsRepository, [
        platynem.models.PostFactory,
        platynem.services.PostsService
    ]);
}
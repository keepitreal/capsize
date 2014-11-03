/// <reference path="../references.d.ts" />

module platynem.repositories {
    'use strict';

    export class PostsRepository {
        constructor(private postFactory: platynem.models.IPostFactory,
                    private postsService: services.IPostsService) { }

        create(post: models.IPost) {
            var p = this.postFactory.createPost(post);
            return this.postsService.create(p);
        }

        update(post: models.IPost) {
            var p = this.postFactory.update(post);
            return this.postsService.update(p);
        }

        destroy(id: string) {
            return this.postsService.destroy(id);
        }

        getAll(): plat.async.IThenable<Array<models.IPost>> {
            return this.postsService
                .getAll()
                .then((posts) => {
                    return this.postFactory.getAll(posts);
                });
        }

        getPost(id: string): plat.async.IThenable<models.IPost> {
            return this.postsService
                .getOne(id)
                .then((post) => {
                    return this.postFactory.createPost(post);
                });
        }
    }

    plat.register.injectable('postsRepository', PostsRepository, [
        platynem.models.PostFactory,
        platynem.services.PostsService
    ]);
}

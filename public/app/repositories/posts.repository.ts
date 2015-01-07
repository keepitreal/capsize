/// <reference path="../references.d.ts" />
'use strict';

import plat = require('platypus');
import postModel = require('../models/post.model');
import postService = require('../services/posts.service');

export class PostsRepository {
    constructor(private postFactory: postModel.IPostFactory,
                private postsService: postService.IPostsService) { }

    create(post: postModel.IPost) {
        var p = this.postFactory.createPost(post);
        return this.postsService.create(p);
    }

    update(post: postModel.IPost) {
        var p = this.postFactory.update(post);
        return this.postsService.update(p);
    }

    destroy(id: string) {
        return this.postsService.destroy(id);
    }

    getAll(): plat.async.IThenable<Array<postModel.IPost>> {
        return this.postsService
            .getAll()
            .then((posts) => {
                return this.postFactory.getAll(posts);
            });
    }

    getPost(id: string): plat.async.IThenable<postModel.IPost> {
        return this.postsService
            .getOne(id)
            .then((post) => {
                return this.postFactory.createPost(post);
            });
    }
}

plat.register.injectable('postsRepository', PostsRepository, [
    postModel.PostFactory,
    postService.PostsService
]);

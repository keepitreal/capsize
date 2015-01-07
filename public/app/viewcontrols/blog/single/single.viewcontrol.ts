/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('platypus');
import postModel = require('../../../models/post.model');
import postsRepository = require('../../../repositories/posts.repository');
import usersRepository = require('../../../repositories/users.repository');
import baseViewcontrol = require('../../base.viewcontrol');

export class SingleViewControl extends baseViewcontrol.BaseViewControl {
    title = 'Blog';
    templateUrl = 'app/viewcontrols/blog/single/single.viewcontrol.html';

    constructor(private postsRepository: postsRepository.PostsRepository,
        private usersRepository: usersRepository.UsersRepository,
        private Promise: plat.async.IPromise) {
        super();
    }

    navigatedTo(route: plat.web.IRoute<{ id: string; }>) {
        var promises: Array<plat.async.IThenable<any>> = [];
        promises.push(this.usersRepository.getUser());
        promises.push(this.postsRepository.getPost(route.parameters.id));

        return this.Promise.all(promises)
            .then((results) => {
                var post = results[1],
                    user = results[0];

                this.setTitle('Blog - ' + post.title);
                this.context = {
                    post: post,
                    user: user
                };
            });
    }

    goBack() {
        this.navigator.goBack();
    }

    destroyPost(post: postModel.IPost) {
        return this.postsRepository.destroy(post._id).then(() => {
            this.goBack();
        });
    }
}

plat.register.viewControl('singleViewControl', SingleViewControl, [
    postsRepository.PostsRepository,
    usersRepository.UsersRepository,
    plat.async.IPromise
], ['posts/:id']);

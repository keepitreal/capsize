/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('../../../lib/platypus/platypus');
import postsRepository = require('../../../repositories/posts.repository');

export class ListViewControl extends plat.ui.WebViewControl {
    title = 'Blog';
    templateUrl = 'app/viewcontrols/blog/list/list.viewcontrol.html';

    constructor(private postsRepository: postsRepository.PostsRepository) {
        super();
    }

    context = {
        posts: null
    };

    initialize() {
        return this.postsRepository.getAll().then((posts) => {
            this.context.posts = posts;
        });
    }

    goBack() {
        this.navigator.goBack();
    }
}

plat.register.viewControl('listViewControl', ListViewControl, [
    postsRepository.PostsRepository
], ['/','posts']);

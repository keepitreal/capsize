/// <reference path="../../../references.d.ts" />

module capsize.viewcontrols {
    'use strict';

    export class CreateViewControl extends plat.ui.WebViewControl {
        title = 'Blog - Create';
        templateUrl = 'app/viewcontrols/blog/create/create.viewcontrol.html';

        constructor(private postsRepository: repositories.PostsRepository) {
            super();
        }

        context = {
            post: <models.IPost>{
                title: '',
                content: '##wut wut'
            }
        };

        goBack() {
            this.navigator.goBack();
        }

        createPost(post: models.IPost) {
            return this.postsRepository.create(post).then(() => {
                this.goBack();
            });
        }
    }

    plat.register.viewControl('createViewControl', CreateViewControl, [
        repositories.PostsRepository
    ], ['posts/create']);
}

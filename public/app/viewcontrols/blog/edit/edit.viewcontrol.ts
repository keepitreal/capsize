/// <reference path="../../../references.d.ts" />

module platynem.viewcontrols {
    'use strict';

    export class EditViewControl extends plat.ui.WebViewControl {
        title = 'Blog - Edit';
        templateUrl = 'app/viewcontrols/blog/edit/edit.viewcontrol.html';

        constructor(private postsRepository: repositories.PostsRepository,
                    private usersRepository: repositories.UsersRepository,
                    private utils: plat.Utils,
                    private Promise: plat.async.IPromise) {
            super();
        }

        context = {
            post: null,
            user: null
        };

        navigatedTo(route: plat.web.IRoute<{ id: string; }>) {
            var promises: Array<plat.async.IThenable<any>> = [];

            promises.push(this.postsRepository
                .getPost(route.parameters.id)
                .then((post) => {
                    this.setTitle('Edit - ' + post.title);
                    this.context.post = post;
                }));

            promises.push(this.usersRepository.getUser().then((user) => {
                this.context.user = user;
            }));

            return this.Promise.all(promises);
        }

        goBack() {
            this.navigator.goBack();
        }

        updatePost(post: models.IPost) {
            return this.postsRepository.update(post).then(() => {
                this.goBack();
            });
        }
    }

    plat.register.viewControl('editViewControl', EditViewControl, [
        platynem.repositories.PostsRepository,
        platynem.repositories.UsersRepository,
        plat.IUtils,
        plat.async.IPromise
    ], ['posts/:id/edit']);
}

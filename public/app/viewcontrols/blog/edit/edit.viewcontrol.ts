module platynem.viewcontrols {
    'use strict';

    export class EditViewControl extends plat.ui.WebViewControl {
        title = 'Blog - Edit';
        templateUrl = 'app/viewcontrols/blog/edit/edit.viewcontrol.html';

        constructor(private postsRepository: repositories.PostsRepository,
                    private usersRepository: repositories.UsersRepository,
                    private utils: plat.Utils) {
            super();
        }

        context = {
            post: null,
            user: null
        };

        navigatedTo(route: plat.web.IRoute<{ id: string; }>) {
            this.postsRepository
                .getPost(route.parameters.id)
                .then((post) => {
                    this.setTitle('Edit - ' + post.title);
                    this.context.post = post;
                });

            this.context.user = this.usersRepository.getUser();
        }

        goBack() {
            this.navigator.goBack();
        }

        updatePost(post: models.IPost) {
            this.postsRepository.update(post).then(() => {
                this.goBack();
            });
        }
    }

    plat.register.viewControl('editViewControl', EditViewControl, [
        platynem.repositories.PostsRepository,
        platynem.repositories.UsersRepository,
        plat.IUtils
    ], ['posts/:id/edit']);
}

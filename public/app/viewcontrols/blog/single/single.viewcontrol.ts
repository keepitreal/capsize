module platynem.viewcontrols {
    'use strict';

    class SingleViewControl extends plat.ui.WebViewControl {
        title = 'Blog';
        templateUrl = 'app/viewcontrols/blog/single/single.viewcontrol.html';

        constructor(private postsRepository: repositories.PostsRepository,
        private usersRepository: repositories.UsersRepository) {
            super();
        }

        navigatedTo(route: plat.web.IRoute<{ id: string; }>) {
            var user = this.usersRepository.getUser();
            this.postsRepository
                .getPost(route.parameters.id)
                .then((post) => {
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

        destroyPost(post: models.IPost) {
            this.postsRepository.destroy(post._id).then(() => {
                this.goBack();
            });
        }
    }

    plat.register.viewControl('singleViewControl', SingleViewControl, [
        platynem.repositories.PostsRepository,
        platynem.repositories.UsersRepository
    ], ['posts/:id']);
}
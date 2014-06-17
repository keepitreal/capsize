module platynem.viewcontrols {
    'use strict';

    class SingleViewControl extends plat.ui.WebViewControl {
        templateUrl = 'app/viewcontrols/blog/single/single.viewcontrol.html';
        navigator: plat.navigation.IRoutingNavigator;

        constructor(private postsRepository: repositories.PostsRepository,
        private usersRepository: repositories.UsersRepository) {
            super();
        }

        navigatedTo(route: plat.web.IRoute<{ id: string; }>) {
            var user = this.usersRepository.getUser();
            this.postsRepository
                .getPost(route.parameters.id)
                .then((post) => {
                    this.context = {
                        post: post,
                        user: user
                    };
                });
        }

        goBack() {
            this.navigator.goBack();
        }

        destroyPost() {
            this.postsRepository.destroy(this.context.post);
        }
    }

    plat.register.viewControl('singleViewControl', SingleViewControl, [
        platynem.repositories.PostsRepository,
        platynem.repositories.UsersRepository
    ], ['posts/:id']);
}
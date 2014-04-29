module platynem.viewcontrols {
    class SingleViewControl extends plat.ui.ViewControl {
        templateUrl = 'app/viewcontrols/blog/single/single.viewcontrol.html';
        navigator: plat.navigation.IRoutingNavigator;

        constructor(private postsRepository: repositories.PostsRepository,
                    private usersRepository: repositories.UsersRepository) {
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
                    this.context.post = post;
                    console.log(this.context.post.user._id);
                });

            this.context.user = this.usersRepository.getUser();
            console.log(this.context.user.id);
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
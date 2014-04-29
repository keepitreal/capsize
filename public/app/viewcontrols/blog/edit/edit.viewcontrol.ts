module platynem.viewcontrols {
    class EditViewControl extends plat.ui.ViewControl {
        templateUrl = 'app/viewcontrols/blog/edit/edit.viewcontrol.html';
        navigator: plat.navigation.IRoutingNavigator;

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
                    this.context.post = post;
                });

            this.context.user = this.usersRepository.getUser();
        }

        goBack() {
            this.navigator.goBack();
        }

        update() {
            var post = <models.IPost>this.utils.deepExtend({}, this.context.post);
            this.postsRepository.update(post);
        }
    }

    plat.register.viewControl('editViewControl', EditViewControl, [
        platynem.repositories.PostsRepository,
        platynem.repositories.UsersRepository,
        plat.Utils
    ], ['posts/:id/edit']);
}
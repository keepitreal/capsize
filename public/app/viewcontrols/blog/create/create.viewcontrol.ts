module platynem.viewcontrols {
    class CreateViewControl extends plat.ui.ViewControl {
        templateUrl = 'app/viewcontrols/blog/create/create.viewcontrol.html';
        navigator: plat.navigation.IRoutingNavigator;

        constructor(private postsRepository: repositories.PostsRepository, private utils: plat.IUtils) {
            super();
        }

        context = {
            post: {
                title: '',
                content: ''
            }
        };

        goBack() {
            this.navigator.goBack();
        }

        createPost() {
            var post = <models.IPost>this.utils.deepExtend({}, this.context.post);
            this.postsRepository.create(post);
        }
    }

    plat.register.viewControl('createViewControl', CreateViewControl, [
        platynem.repositories.PostsRepository,
        plat.Utils
    ], ['posts/create']);
}
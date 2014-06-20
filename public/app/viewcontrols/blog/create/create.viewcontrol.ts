module platynem.viewcontrols {
    'use strict';

    class CreateViewControl extends plat.ui.WebViewControl {
        title = 'Blog - Create';
        templateUrl = 'app/viewcontrols/blog/create/create.viewcontrol.html';

        constructor(private postsRepository: repositories.PostsRepository, private utils: plat.IUtils) {
            super();
        }

        context = {
            post: <models.IPost>{
                title: '',
                content: ''
            }
        };

        goBack() {
            this.navigator.goBack();
        }

        createPost() {
            var post = this.utils.clone(this.context.post);
            this.postsRepository.create(post).then(() => {
                this.goBack();
            });
        }
    }

    plat.register.viewControl('createViewControl', CreateViewControl, [
        platynem.repositories.PostsRepository,
        plat.IUtils
    ], ['posts/create']);
}
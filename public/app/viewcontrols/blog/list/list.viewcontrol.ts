module platynem.viewcontrols {
    'use strict';

    export class ListViewControl extends plat.ui.WebViewControl {
        templateUrl = 'app/viewcontrols/blog/list/list.viewcontrol.html';
        navigator: plat.navigation.IRoutingNavigator;

        constructor(private postsRepository: repositories.PostsRepository) {
            super();
        }

        context = {
            posts: null
        };

        initialize() {
            this.postsRepository.getAll().then((posts) => {
                this.context.posts = posts;
            });
        }

        goBack() {
            this.navigator.goBack();
        }
    }

    plat.register.viewControl('listViewControl', ListViewControl, [
        platynem.repositories.PostsRepository
    ], ['posts']);
}
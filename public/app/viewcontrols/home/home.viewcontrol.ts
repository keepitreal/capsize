module platynem.viewcontrols.home {
    'use strict';

    export class HomeViewControl extends plat.ui.WebViewControl {
        title = 'Home';
        templateUrl = 'app/viewcontrols/home/home.viewcontrol.html';

        constructor() {
            super();
        }

        context = {
            title: 'Home!'
        };

        goBack() {
            this.navigator.goBack();
        }
    }

    plat.register.viewControl('home', HomeViewControl, null, ['/', 'home']);
}

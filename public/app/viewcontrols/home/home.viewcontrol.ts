module platynem.viewcontrols.home {
    class HomeViewControl extends plat.ui.ViewControl {
        templateUrl = 'app/viewcontrols/home/home.viewcontrol.html';
        navigator: plat.navigation.IRoutingNavigator;

        constructor() {
            super();
        }

        context = {
            title: "Home!"
        };

        goBack() {
            this.navigator.goBack();
        }
    }

    plat.register.viewControl('home', HomeViewControl, null, ['/', 'home']);
}
/// <reference path="../../../references.d.ts" />

module capsize.viewcontrols {
    'use strict';

    export class LoginViewControl extends plat.ui.WebViewControl {
        title = 'PlatyNEM - Login';
        templateUrl = 'app/viewcontrols/auth/login/login.viewcontrol.html';

        constructor(private usersRepository: repositories.UsersRepository) {
            super();
        }

        context = {
            user: <models.IUser>{},
            error: null
        };

        login(user: models.IUser) {
            return this.usersRepository.login(user)
                .then(() => {
                    this.navigator.goBack();
                }).catch((error) => {
                    this.context.error = error;
                });
        }
    }

    plat.register.viewControl('loginViewControl', LoginViewControl, [
        repositories.UsersRepository
    ], ['login']);
}

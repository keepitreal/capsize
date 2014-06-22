﻿module platynem.viewcontrols {
    'use strict';

    export class LoginViewControl extends plat.ui.WebViewControl {
        title = 'PlatyNEM - Login';
        templateUrl = 'app/viewcontrols/auth/login/login.viewcontrol.html';

        constructor(private usersRepository: repositories.UsersRepository) {
            super();
        }

        context = {
            user: <models.IUser>{}
        };

        login(user: models.IUser) {
            this.usersRepository.login(user).then(() => {
                this.navigator.goBack();
            });
        }
    }

    plat.register.viewControl('loginViewControl', LoginViewControl, [
        repositories.UsersRepository
    ], ['login']);
}
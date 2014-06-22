module platynem.viewcontrols {
    'use strict';

    export class RegisterViewControl extends plat.ui.WebViewControl {
        title = 'PlatyNEM - Register';
        templateUrl = 'app/viewcontrols/auth/register/register.viewcontrol.html';

        constructor(private usersRepository: repositories.UsersRepository,
            private $utils: plat.IUtils) {
            super();
        }

        context = {
            user: <models.IUser>{},
            errors: <Array<string>>[]
        };

        create(user: models.IUser) {
            this.usersRepository.create(user)
                .then(() => {
                    this.navigator.goBack();
                })
                .catch((error) => {
                    var utils = this.$utils;
                    if (utils.isObject(error) && utils.isObject(error.response)) {
                        this.context.errors = utils.map(error.response, (err: any) => {
                            return err;
                        });
                    }
                });
        }
    }

    plat.register.viewControl('registerViewControl', RegisterViewControl, [
        repositories.UsersRepository,
        plat.IUtils
    ], ['register']);
}
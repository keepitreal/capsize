/// <reference path="../../../references.d.ts" />

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
            errors: <Array<{ message: string; }>>[]
        };

        create(user: models.IUser) {
            return this.usersRepository.create(user)
                .then(() => {
                    this.navigator.goBack();
                })
                .catch((response) => {
                    var utils = this.$utils;
                    this.context.errors = utils.map((err) => {
                        return err;
                    }, <Array<{ message: string }>>response.errors);
                });
        }

        navigatedTo(route: plat.web.IRoute<any>) {
            if (this.$utils.isObject(route.query)) {
                this.$utils.forEach((error) => {
                    this.context.errors.push({ message: decodeURI(error) });
                }, <Array<string>>route.query);
            }
        }
    }

    plat.register.viewControl('registerViewControl', RegisterViewControl, [
        repositories.UsersRepository,
        plat.IUtils
    ], ['register']);
}

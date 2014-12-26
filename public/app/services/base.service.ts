/// <reference path="../references.d.ts" />

module capsize.services {
    'use strict';

    export class BaseService {
        private __http = plat.acquire(plat.async.IHttp);

        _http(options: plat.async.IHttpConfig) {
            return this.__http.json<IResponse>(options).then((result) => {
                return result.response.data;
            }, (result) => {
                this._handleError(result.response);
            });
        }

        _handleError(response: IResponse) {
            switch (response.status) {
                case 'fail':
                    throw response.data;
                case 'error':
                    console.log(response.message);
                    break;
            }
        }
    }

    export interface IResponse {
        status: string;
        data?: any;
        message?: string;
    }
}

module platynem.services {
    'use strict';

    export class BaseService {
        private __http = plat.acquire(plat.async.IHttp);

        _http(options: plat.async.IHttpConfig) {
            return this.__http.json<any>(options).then((result) => {
                return (<IResponse>result.response).data;
            }, (result) => {
                this._handleError(result.response);
            });
        }

        _handleError(response: IResponse) {
            switch (response.status) {
                case 'fail':
                    throw response.data;
                    break;
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

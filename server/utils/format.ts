/// <reference path="../typings/tsd.d.ts" />

import _ = require('underscore');
import userModels = require('../models/user');

export var response = (err?: any, data?: any): IFormattedResponse => {
    if (_.isObject(err)) {
        if (err instanceof Error && !_.isObject(err.errors)) {
            return {
                status: 500,
                body: {
                    status: 'error',
                    message: err.message,
                    data: err
                }
            };
        }

        return {
            status: 400,
            body: {
                status: 'fail',
                data: err
            }
        };
    }


    data = filterUser(data, ['hashed_password', 'salt']);

    return {
        status: 200,
        body: {
            status: 'success',
            data: data
        }
    };
};

var filterUser = (obj: { user?: userModels.IUserDocument }, properties: Array<string>) => {
    var user: userModels.IUserDocument;

    if (!_.isObject(obj)) {
        return obj;
    } else if (_.isArray(obj)) {
        (<Array<typeof obj>><any>obj).map((value, index) => {
            obj[index] = filterUser(value, properties);
        });
        return obj;
    } else if (!_.isObject(obj.user)) {
        return filterUser({ user: <any>obj }, properties).user;
    }

    user = obj.user;

    if (_.isFunction(user.toObject)) {
        user = <any>user.toObject();
    }

    obj.user = _.omit(user, properties);

    return obj;
};

export interface IResponseBody {
    status: string;
    data?: any;
    message?: string;
}

export interface IFormattedResponse {
    status: number;
    body: IResponseBody;
}

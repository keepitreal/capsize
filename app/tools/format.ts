/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import userModels = require('../models/user');

export var response = (err: any, data: any): { status: number; body: IResponseBody; } => {
    if (_.isObject(err)) {
        if (err instanceof Error) {
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
            status: 500,
            body: {
                status: 'fail',
                data: err
            }
        };
    }

    if (_.isObject(data)) {
        if (_.isObject(data.user)) {
            data.user = filterUser(data.user, ['hashed_password', 'salt']);
        } else if (_.isString(data.hashed_password) || _.isString(data.salt)) {
            data = filterUser(data, ['hashed_password', 'salt']);
        }
    }

    return {
        status: 200,
        body: {
            status: 'success',
            data: data
        }
    };
}

export var filterUser = (user: userModels.IUserDocument, properties: Array<string>) => {
    if (_.isFunction(user.toObject)) {
        return _.omit(user.toObject(), properties);
    }
    return _.omit(user, properties);
};

export interface IResponseBody {
    status: string;
    data?: any;
    message?: string;
}

/// <reference path="../../typings/tsd.d.ts" />
import mongoose = require('mongoose');
import _ = require('underscore');
import crypto = require('crypto');

var Schema = mongoose.Schema,
    authTypes = ['linkedin', 'twitter', 'facebook', 'google'];

var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    provider: String,
    hashed_password: String,
    salt: String,
    facebook: {},
    twitter: {},
    linkedin: {}
});

// virtuals
UserSchema.virtual('password').set(function (password: string) {
    var _this: IUserDocument = this;

    // We need to store the password on the user object, but we want it to be "private"
    this.__password = password;

    _this.salt = _this.makeSalt();
    _this.hashed_password = _this.encryptPassword(password);
}).get(function () {
    // Return the "private" password
    return this.__password;
});

// validations
var validatePresenceOf = function (value: string) {
    return _.isString(value) && value.length > 0;
};

// validations for LocalStrategy user registration
UserSchema.path('name').validate(function (name) {
    var _this: IUserDocument = this;

    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(_this.provider) !== -1) {
        return true;
    }
    return name.length > 0;
}, 'Name cannot be blank');

// regexp for validating an email.
UserSchema.path('email').validate(function (email: string): boolean {
    var _this: IUserDocument = this;

    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(_this.provider) !== -1) {
        return true;
    }
    return email.length > 0;
}, 'Email cannot be blank');

var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// email address must be a valid email address
UserSchema.path('email').validate(function (email: string): boolean {
    var _this: IUserDocument = this;

    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(_this.provider) !== -1) {
        return true;
    }
    return emailRegex.test(email);
}, 'Please provide a valid email address');

// email address must be unique
UserSchema.path('email').validate(function (value: any, done: (valid: boolean) => void): void {
    var _this: IUserDocument = this;
    (<IUserModel>(<any>mongoose).model('User')).findOne({ email: value }, (err, userDoc) => {
        if (err || !userDoc) {
            return done(true);
        }

        done(userDoc._id.toString() === _this._id.toString());
    });

}, 'An account with this email address has already been registered.');

UserSchema.path('username').validate(function (username) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) {
        return true;
    }
    return username.length;
}, 'Username cannot be blank');

// username between 3 and 20 chars long
UserSchema.path('username').validate(function (username: string): boolean {
    var _this: IUserDocument = this;

    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(_this.provider) !== -1) {
        return true;
    }
    return !!username.length && username.length >= 3 && username.length <= 20;
}, 'Username must be between 3 and 20 characters long.');

// username must be unique
UserSchema.path('username').validate(function (value: any, done: (valid: boolean) => void) {
    // TODO: When mongoose type definitions are updated, we can remove the type casting.
    var _this: IUserDocument = this;
    (<IUserModel>(<any>mongoose).model('User')).findOne({ username: value }, (err, userDoc) => {
        if (err || !userDoc) {
            return done(true);
        }

        done(userDoc._id.toString() === _this._id.toString());
    });

}, 'Username is taken.');

UserSchema.path('hashed_password').validate(function (hashed_password) {
    var _this: IUserDocument = this;

    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(_this.provider) !== -1) {
        return true;
    }
    return hashed_password.length > 0;
}, 'Password cannot be blank');

// pre-save hook
UserSchema.pre('save', function (next) {
    var _this: IUserDocument = this;

    if (this.isNew) {
        return next();
    } else if (!validatePresenceOf((<any>_this).password) && authTypes.indexOf(_this.provider) === -1) {
        return next(new Error('Invalid Password'));
    }

    next();
});

// methods
UserSchema.method({
    authenticate: function (plainText: string) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },

    encryptPassword: function (password: string) {
        if (!_.isString(password) || password.length === 0) {
            return '';
        }

        return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    }
});

mongoose.model('User', UserSchema);

export interface IUser {
    name: string;
    email: string;
    username: string;
    provider: string;
    hashed_password: string;
    salt: string;
}

export interface IUserDocument extends mongoose.Document, IUser {
    authenticate(plainText: string): boolean;
    makeSalt(): string;
    encryptPassword(password: string): string;
}

export interface IUserModel extends mongoose.Model<IUserDocument> { }

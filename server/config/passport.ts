/// <reference path="../typings/tsd.d.ts" />

import mongoose = require('mongoose');
import passport = require('passport');
import passportFacebook = require('passport-facebook');
import config = require('./config');
import userModels = require('../app/models/user');
import _ = require('underscore');

var LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = passportFacebook.Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    GoogleStrategy = require('passport-google-oauth').Strategy,
    LinkedInStrategy = require('passport-linkedin').Strategy,
    // TODO: When mongoose type definitions are updated, we can remove the type casting.
    User: userModels.IUserModel = (<any>mongoose).model('User');

var out = (passport: passport.Passport) => {
    // Serialize user's session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({
            _id: id
        }, (err, user) => {
            done(err, user);
        });
    });

    // local strategy (username/password)
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email: string, password: string, done: (err: any, user?: userModels.IUser, response?: any) => void) => {
            User.findOne({
                email: email
            }, (err, user) => {
                    if (_.isObject(err)) {
                        return done(err);
                    } else if (!_.isObject(user)) {
                        return done(null, null, {
                            message: 'User not recognized'
                        });
                    } else if (!_.isFunction(user.authenticate) || !user.authenticate(password)) {
                        return done(null, null, {
                            message: 'Incorrect password'
                        });
                    }
                    return done(null, user);
                });
        }));

    // twitter strategy
    passport.use(new TwitterStrategy({
        consumerKey: config.twitter.clientID,
        consumerSecret: config.twitter.clientSecret,
        callbackURL: config.twitter.callbackURL,
        profileFields: ['id', 'displayName', 'profile_image_url', 'emails', 'username']
    }, (accessToken: string, tokenSecret: string, profile: any, done: (err: any, user?: userModels.IUser) => void) => {
            User.findOne({
                'twitter.id': Number(profile.id)
            }, (err, userDoc) => {
                userFound(err, userDoc, 'twitter', profile, done);
            });
        }));

    // facebook strategy
    passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL,
        profileFields: ['id', 'displayName', 'photos', 'emails', 'username']
    }, (accessToken, refreshToken, profile, done) => {
            User.findOne({
                'facebook.id': profile.id
            }, (err, userDoc) => {
                userFound(err, userDoc, 'facebook', profile, done);
            });
        }));

    // linkedin strategy
    passport.use(new LinkedInStrategy({
        consumerKey: config.linkedin.clientID,
        consumerSecret: config.linkedin.clientSecret,
        callbackURL: config.linkedin.callbackURL,
        profileFields: ['id', 'first-name', 'last-name', 'email-address', 'pictureUrl']
    }, (accessToken: string, refreshToken: string, profile: any, done: (err: any, user?: userModels.IUser) => void) => {
            User.findOne({
                'linkedin.id': profile.id
            }, (err, userDoc) => {
                userFound(err, userDoc, 'linkedin', profile, done);
            });
        }));
};

var userFound = (err: any,
    userDoc: userModels.IUserDocument,
    provider: string,
    profile: passportFacebook.Profile,
    done: (err: any, user?: userModels.IUser) => void) => {

    if (_.isObject(err)) {
        return done(err);
    } else if (!_.isObject(userDoc)) {
        var usr = <any>{
            name: profile.displayName,
            username: (<any>profile).username || (<any>profile).emails[0].value.split('@')[0],
            provider: provider
        };

        usr[provider] = {
            id: (<any>profile)._json.id
        };

        // twitter does not give us an email
        if (provider !== 'twitter') {
            usr.email = (<any>profile).emails[0].value;
        }

        userDoc = new User(usr);
        userDoc.save<userModels.IUser>((err, user) => {
            if (err) {
                console.log(err);
            }
            return done(err, user);
        });
    } else {
        return done(err, userDoc);
    }
};

export = out;

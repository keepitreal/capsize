/// <reference path="../typings/tsd.d.ts" />

import auth = require('./middleware/auth');
import posts = require('../controllers/posts');
import users = require('../controllers/users');
import express = require('express');
import passport = require('passport');
import populateSession = require('./middleware/session');

var router = express.Router();

/*
 * User Routes
 * Order matters!
 */
router
    .post('/logout', populateSession, users.logout)
    .post('/users', populateSession, users.create)
    .post('/login', populateSession, users.login)
    .get('/users/me', populateSession, users.me)
    .get('/users/:userId', users.show)
    .get('/viewcontrols/admin/*', (req: express.Request, res: express.Response, next: Function) => {
        if (req.user && req.user.role === 'admin') {
            return next();
        }
        res.send(401);
    });

// facebook
router
    .get('/auth/facebook', populateSession, passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/#!/login'
    }), users.login)
    .get('/auth/facebook/callback', populateSession, passport.authenticate('facebook', {
        failureRedirect: '/#!/login'
    }), users.authCallback);

// linkedin
router
    .get('/auth/linkedin', populateSession, passport.authenticate('linkedin', {
        scope: ['r_emailaddress'],
        failureRedirect: '/#!/login'
    }), users.login)
    .get('/auth/linkedin/callback', populateSession, passport.authenticate('linkedin', {
        failureRedirect: '/#!/login'
    }), users.authCallback);

// twitter
router
    .get('/auth/twitter', populateSession, passport.authenticate('twitter', {
        failureRedirect: '/#!/login'
    }), users.login)
    .get('/auth/twitter/callback', populateSession, passport.authenticate('twitter', {
        failureRedirect: '/#!/login'
    }), users.authCallback);

// :userId route param matcher
router.param('userId', users.user);

/*
 * Blog Post Routes
 * Order matters here too!
 */
(<express.Router>(<any>router
    .get('/posts', posts.all)
    .post('/posts', populateSession, auth.requiresLogin, posts.create)
    .get('/posts/:postId', posts.show)
    .put('/posts/:postId/edit', populateSession, auth.requiresLogin, auth.post.hasAuthorization, posts.update))
    .delete('/posts/:postId', populateSession, auth.requiresLogin, auth.post.hasAuthorization, posts.destroy))
    // :postId route param matcher
    .param('postId', posts.post);

export = router;

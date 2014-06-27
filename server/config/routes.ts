/// <reference path="../typings/tsd.d.ts" />

import auth = require('./middleware/auth');
import posts = require('../app/controllers/posts');
import users = require('../app/controllers/users');
import express = require('express');
import passport = require('passport');

var router = new express.Router();

/*
 * User Routes
 * Order matters!
 */
router
    .post('/logout', users.logout)
    .post('/users', users.create)
    .post('/login', users.login)
    .get('/users/me', users.me)
    .get('/users/:userId', users.show)
    .get('/app/viewcontrols/admin/*', (req: express.Request, res: express.Response, next: Function) => {
        if (req.user && req.user.role === 'admin') {
            return next();
        }
        res.send(401);
    });

// facebook
router
    .get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/#!/login'
    }), users.login)
    .get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/#!/login'
    }), users.authCallback);

// linkedin
router
    .get('/auth/linkedin', passport.authenticate('linkedin', {
        scope: ['r_emailaddress'],
        failureRedirect: '/#!/login'
    }), users.login)
    .get('/auth/linkedin/callback', passport.authenticate('linkedin', {
        failureRedirect: '/#!/login'
    }), users.authCallback);

// twitter
router
    .get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/#!/login'
    }), users.login)
    .get('/auth/twitter/callback', passport.authenticate('twitter', {
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
    .post('/posts', auth.requiresLogin, posts.create)
    .get('/posts/:postId', posts.show)
    .put('/posts/:postId/edit', auth.requiresLogin, auth.post.hasAuthorization, posts.update))
    .delete('/posts/:postId', auth.requiresLogin, auth.post.hasAuthorization, posts.destroy))
    // :postId route param matcher
    .param('postId', posts.post);

export = router;

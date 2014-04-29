/// <reference path="../typings/async/async.d.ts" />
import async = require('async');
import auth = require('./middleware/auth');

var posts = require('../app/controllers/posts'),
    users = require('../app/controllers/users'),
    index = require('../app/controllers/index'),
    express = require('express'),
    passport = require('passport'),
    router = express.Router();

/*
 * User Routes
 * Order matters!
 */
router.get('/login', users.login);
router.get('/register', users.register);
router.get('/logout', users.logout);
router.post('/users', users.create);
router.post('/users/session', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Invalid email or password.'
}), users.session);
router.get('/users/me', users.me);
router.get('/users/:userId', users.show);

// FACEBOOK
router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/login'
}), users.login);

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login'
}), users.authCallback);

// LINKEDIN
router.get('/auth/linkedin', passport.authenticate('linkedin', {
    scope: ['r_emailaddress'],
    failureRedirect: '/login'
}), users.login);

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
    failureRedirect: '/login'
}), users.authCallback);

// TWITTER
router.get('/auth/twitter', passport.authenticate('twitter', {
    failureRedirect: '/login'
}), users.login);

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
    failureRedirect: '/login'
}), users.authCallback);

// GOOGLE
router.get('/auth/google', passport.authenticate('google', {
    failureRedirect: '/login',
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}), users.login);

router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login'
}), users.authCallback);

// :userId route param matcher
router.param('userId', users.user);

/*
 * Blog Post Routes
 * Order matters here too!
 */
router.get('/posts', posts.all);
router.post('/posts', auth.requiresLogin, posts.create);
router.get('/posts/:postId', posts.show);
router.put('/posts/:postId/edit', auth.requiresLogin, auth.post.hasAuthorization, posts.update);
router.delete('/posts/:postId', auth.requiresLogin, auth.post.hasAuthorization, posts.destroy);

// :postId route param matcher
router.param('postId', posts.post);

/*
 * Index Routes
 */
router.get('/', index.render);

export = router;
var mongoose = require('mongoose'),
    User = mongoose.model('User');

// auth callback
exports.authCallback = function (req, res, next) {
    res.redirect('/');
};

// get login page
exports.login = function (req, res) {
    res.render('users/login', {
        title: 'Login',
        message: req.flash('error')
    });
};

// get register page
exports.register = function (req, res) {
    res.render('users/register', {
        title: 'Register',
        user: new User()
    });
};

// log out
exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

// log in user
exports.session = function (req, res) {
    res.redirect('/');
};

// create user
exports.create = function (req, res, next) {
    var user = new User(req.body);
    user.provider = 'local';
    user.save(function (err) {
        if (err) {
            return res.render('users/register', {
                errors: err.errors,
                user: user
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    });
};

// show profile
exports.show = function (req, res) {
    var user = req.profile;
    res.render('users/show', {
        title: user.name,
        user: user
    });
};

// send user
exports.me = function (req, res) {
    res.jsonp(req.user || null);
};

// find by id
exports.user = function (req, res, next, id) {
    User
        .findOne({
            _id: id
        })
        .exec(function (err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(new Error('Failed to load user ' + id));
            }
            req.profile = user;
            next();
        });
};
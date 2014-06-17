// generic require login routing middleware
var requiresLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

// user authorization routing middleware
var user = {
    hasAuthorization: function (req, res, next) {
        if (req.profile.id !== req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

// post authorization routing middleware
var post = {
    hasAuthorization: function (req, res, next) {
        if (req.post.user.id !== req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

var auth = {
    requiresLogin: requiresLogin,
    user: user,
    post: post
};

export = auth;
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('underscore'),
    crypto = require('crypto'),
    authTypes = ['github', 'twitter', 'facebook', 'google'];

var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    provider: String,
    hashed_password: String,
    salt: String
});

// Virtuals
UserSchema.virtual('password').set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function () {
    return this._password;
});

// Validations
var validatePresenceOf = function (value) {
    return value && value.length;
}

// Validations for LocalStrategy user registration
UserSchema.path('name').validate(function (name) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return name.length;
}, 'Name cannot be blank');

UserSchema.path('email').validate(function (email) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return email.length;
}, 'Email cannot be blank');

UserSchema.path('username').validate(function (username) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return username.length;
}, 'Username cannot be blank');

UserSchema.path('hashed_password').validate(function (hashed_password) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return hashed_password.length;
}, 'Password cannot be blank');

// Pre-save hook
UserSchema.pre('save', function (next) {
    if (!this.isNew) return next();
    if (!validatePresenceOf(this.password) && authTypes.indexOf(this.provider) === -1)
        next(new Error('Invalid Password'));
    else
        next();
});

// Methods
UserSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },

    encryptPassword: function (password) {
        if (!password) return '';
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    }
};

mongoose.model('User', UserSchema);
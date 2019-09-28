"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _passport = _interopRequireDefault(require("passport"));

var _users = _interopRequireDefault(require("../models/users"));

var LocalStrategy = require('passport-local').Strategy;

//Serialize user
_passport["default"].serializeUser(function (user, done) {
  done(null, user.id);
}); //Deserialize user


_passport["default"].deserializeUser(function (id, done) {
  _users["default"].findById(id, function (err, user) {
    done(err, user);
  });
}); //Local Strategy


_passport["default"].use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  _users["default"].findOne({
    email: email
  }, function (err, user) {
    if (err) return done(err);
    if (!user) return done(null, false, {
      message: 'Incorrect Username'
    });
    user.comparePassword(password, function (err, isMatch) {
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
    });
  });
}));

module.exports = _passport["default"];
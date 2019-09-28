"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var express = require("express");

var router = express.Router();

var User = require('../models/users');

var passport = require('../config/passport'); // Load input validation


var validateRegisterInput = require("../validation/register");

var validateLoginInput = require("../validation/login"); // Load User model


router.post("/register",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var _validateRegisterInpu, errors, isValid, check;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Form validation
            _validateRegisterInpu = validateRegisterInput(req.body), errors = _validateRegisterInpu.errors, isValid = _validateRegisterInpu.isValid; // Check validation

            if (isValid) {
              _context.next = 6;
              break;
            }

            req.flash('success_msg', errors);
            return _context.abrupt("return", res.redirect('back'));

          case 6:
            _context.next = 8;
            return User.findOne({
              email: req.body.email
            });

          case 8:
            check = _context.sent;

            if (!check) {
              _context.next = 14;
              break;
            }

            req.flash('success_msg', 'Email already in use');
            return _context.abrupt("return", res.redirect('back'));

          case 14:
            _context.next = 16;
            return User.create(req.body);

          case 16:
            req.flash('success_msg', 'Account created successfully, you can now login');
            return _context.abrupt("return", res.redirect('/'));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post("/login",
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            passport.authenticate('local', function (err, user, info) {
              if (err) return next(err);

              if (!user) {
                req.flash('success_msg', 'Incorect Email or password');
                return res.redirect('back');
              }

              req.logIn(user, function (err) {
                if (err) return next(err);
                return res.redirect('/home');
              });
            })(req, res, next);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = router;
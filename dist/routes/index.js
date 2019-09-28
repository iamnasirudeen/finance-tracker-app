"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../config/auth"));

var _expressFlash = _interopRequireDefault(require("express-flash"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _expenses = _interopRequireDefault(require("../models/expenses"));

var router = _express["default"].Router();

Date.prototype.getWeek = function () {
  var dt = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - dt) / 86400000 + dt.getDay() + 1) / 7);
};

router.use(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.locals.success_msg = req.flash("success_msg");
            res.locals.error_msg = req.flash("error_msg");
            res.locals.error = req.flash("error");
            res.locals.user = req.user || null;

            if (!(typeof req.user == 'undefined')) {
              _context.next = 8;
              break;
            }

            _context.t0 = null;
            _context.next = 11;
            break;

          case 8:
            _context.next = 10;
            return _expenses["default"].find({
              user: req.user.id
            }).populate('user').sort({
              createdAt: -1
            });

          case 10:
            _context.t0 = _context.sent;

          case 11:
            res.locals.userExpenses = _context.t0;

            if (!(typeof req.user == 'undefined')) {
              _context.next = 16;
              break;
            }

            _context.t1 = null;
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return _expenses["default"].aggregate([{
              $match: {
                user: _mongoose["default"].Types.ObjectId(req.user.id)
              }
            }, {
              $group: {
                '_id': null,
                'amount': {
                  "$sum": "$amount"
                }
              }
            }]);

          case 18:
            _context.t1 = _context.sent;

          case 19:
            res.locals.tota = _context.t1;

            if (!(typeof req.user == 'undefined')) {
              _context.next = 24;
              break;
            }

            _context.t2 = null;
            _context.next = 27;
            break;

          case 24:
            _context.next = 26;
            return _expenses["default"].aggregate([{
              $match: {
                user: _mongoose["default"].Types.ObjectId(req.user.id),
                year: new Date().getFullYear().toString()
              }
            }, {
              $group: {
                '_id': null,
                'amount': {
                  $sum: "$amount"
                }
              }
            }]);

          case 26:
            _context.t2 = _context.sent;

          case 27:
            res.locals.year = _context.t2;

            if (!(typeof req.user == 'undefined')) {
              _context.next = 32;
              break;
            }

            _context.t3 = null;
            _context.next = 35;
            break;

          case 32:
            _context.next = 34;
            return _expenses["default"].aggregate([{
              $match: {
                user: _mongoose["default"].Types.ObjectId(req.user.id),
                week: new Date().getWeek().toString()
              }
            }, {
              $group: {
                '_id': null,
                'amount': {
                  $sum: "$amount"
                }
              }
            }]);

          case 34:
            _context.t3 = _context.sent;

          case 35:
            res.locals.week = _context.t3;

            if (!(typeof req.user == 'undefined')) {
              _context.next = 40;
              break;
            }

            _context.t4 = null;
            _context.next = 43;
            break;

          case 40:
            _context.next = 42;
            return _expenses["default"].aggregate([{
              $match: {
                user: _mongoose["default"].Types.ObjectId(req.user.id),
                month: new Date().getMonth().toString()
              }
            }, {
              $group: {
                '_id': null,
                'amount': {
                  $sum: "$amount"
                }
              }
            }]);

          case 42:
            _context.t4 = _context.sent;

          case 43:
            res.locals.month = _context.t4;
            next();

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

function checkLoggedIn(req, res, next) {
  if (req.isAuthenticated()) res.redirect('back');else {
    next();
  }
} // Get index page


router.get('/', function (req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/home');
  } else {
    res.render('index');
  }
});
router.get('/signup', checkLoggedIn, function (req, res, next) {
  res.render('sign-up');
});
router.get('/faq', function (req, res, next) {
  res.render('faq');
});
router.get('/home', _auth["default"], function (req, res, next) {
  //res.send(res.locals.tota)
  res.render('home');
});
router.get('/about', function (req, res, next) {
  res.render('about');
});
router.get('/log-out', function (req, res, next) {
  req.logout();
  return res.redirect('/');
});
module.exports = router;
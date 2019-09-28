import express from 'express';
import auth from '../config/auth';
import flash from 'express-flash';
import mongoose from 'mongoose';
import Expenses from '../models/expenses';
const router = express.Router();

Date.prototype.getWeek = function () {
    var dt = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - dt) / 86400000) + dt.getDay() + 1) / 7);
};

router.use(async (req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    res.locals.userExpenses = typeof (req.user) == 'undefined' ? null : await Expenses.find({ user: req.user.id }).populate('user').sort({ createdAt: -1 });
    res.locals.tota = typeof req.user == 'undefined' ? null : await Expenses.aggregate([
        {
            $match: {
                user: mongoose.Types.ObjectId(req.user.id)
            }
        },
        {
            $group: {
                '_id': null,
                'amount': {
                    "$sum": "$amount"
                }
            }
        }
    ]);
    res.locals.year = typeof req.user == 'undefined' ? null : await Expenses.aggregate([
        {
            $match: {
                user: mongoose.Types.ObjectId(req.user.id),
                year: new Date().getFullYear().toString(),
            }
        },
        {
            $group: {
                '_id': null,
                'amount': {
                    $sum: "$amount"
                }
            }
        }
    ]);
    res.locals.week = typeof req.user == 'undefined' ? null : await Expenses.aggregate([
        {
            $match: {
                user: mongoose.Types.ObjectId(req.user.id),
                week: new Date().getWeek().toString(),
            }
        },
        {
            $group: {
                '_id': null,
                'amount': {
                    $sum: "$amount"
                }
            }
        }
    ]);
    res.locals.month = typeof req.user == 'undefined' ? null : await Expenses.aggregate([
        {
            $match: {
                user: mongoose.Types.ObjectId(req.user.id),
                month: new Date().getMonth().toString(),
            }
        },
        {
            $group: {
                '_id': null,
                'amount': {
                    $sum: "$amount"
                }
            }
        }
    ]);
    next();
});

function checkLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        res.redirect('back');
    else {
        next()
    }
}

// Get index page
router.get('/', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/home')
    } else {
        res.render('index');
    }
});

router.get('/signup', checkLoggedIn, (req, res, next) => {
    res.render('sign-up');
});

router.get('/faq', (req, res, next) => {
    res.render('faq');
});

router.get('/home', auth, (req, res, next) => {
    //res.send(res.locals.tota)
    res.render('home');
})

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/log-out', (req, res, next) => {
    req.logout();
    return res.redirect('/')
})

module.exports = router;
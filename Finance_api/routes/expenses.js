import express from 'express';
const router = express.Router();
import Expenses from '../models/expenses';

// Create a new expenses
router.post('/expenses/create', async (req, res, next) => {
    try{
        Date.prototype.getWeek = function () {
            var dt = new Date(this.getFullYear(), 0, 1);
            return Math.ceil((((this - dt) / 86400000) + dt.getDay() + 1) / 7);
        };
        req.body.week = new Date().getWeek();
        req.body.month = new Date().getMonth();
        req.body.year = new Date().getFullYear();
        req.body.user = req.user.id;
        req.body.amount = parseInt(req.body.amount);
        await Expenses.create(req.body);
        req.flash('success_msg', 'Record has been created successfully');
        return res.redirect('back');
    }catch(e){
        next(e);
    };
});

// Edit an expense
router.post('/expenses/edit', async (req, res, next) => {
    await Expenses.updateOne({_id: req.body.expenseId}, req.body);
    req.flash('success_msg', 'Expense has been updated successfully');
    return res.redirect('back');
});

// Delete an expense
router.post('/expenses/delete', async (req, res, next) => {
    await Expenses.deleteOne({_id: req.body.expenseId});
    req.flash('success_msg', 'Expense has been deleted successfully');
    return res.redirect('back');
});

module.exports = router;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var expensesSchema = new Schema({
  items: String,
  amount: Number,
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  week: String,
  month: String,
  year: String
}, {
  timestamps: true
});
module.exports = _mongoose["default"].model('Expenses', expensesSchema);
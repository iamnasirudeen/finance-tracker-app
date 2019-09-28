"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _validator = _interopRequireDefault(require("validator"));

var _isEmpty = _interopRequireDefault(require("is-empty"));

module.exports = function validateLoginInput(data) {
  var errors = {}; // Convert empty fields to an empty string so we can use validator functions

  data.email = !(0, _isEmpty["default"])(data.email) ? data.email : "";
  data.password = !(0, _isEmpty["default"])(data.password) ? data.password : ""; // Email checks

  if (_validator["default"].isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!_validator["default"].isEmail(data.email)) {
    errors.email = "Email is invalid";
  } // Password checks


  if (_validator["default"].isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty["default"])(errors)
  };
};
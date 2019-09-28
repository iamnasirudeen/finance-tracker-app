"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passport = _interopRequireDefault(require("./config/passport"));

var _users = _interopRequireDefault(require("./routes/users"));

var _index = _interopRequireDefault(require("./routes/index"));

var _expenses = _interopRequireDefault(require("./routes/expenses"));

var _ejs = _interopRequireDefault(require("ejs"));

var _path = _interopRequireDefault(require("path"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _expressFlash = _interopRequireDefault(require("express-flash"));

// require('dotenv').config();
var app = (0, _express["default"])(); //BODY PARSE

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json()); //CORS

app.use((0, _expressFlash["default"])());
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use((0, _expressValidator["default"])());
app.use((0, _expressSession["default"])({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1209600000
  }
}));
app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', _ejs["default"].renderFile); //Set the public folder

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public'))); //CONNECT MONGODB

var options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
var uri = "mongodb://localhost/fintrack";

_mongoose["default"].connect(uri, options).then(function (connected) {
  return console.log("Database connection established");
})["catch"](function (err) {
  return console.log("There was an error connecting to database, the err is ".concat(err));
}); // Passport middleware


app.use(_passport["default"].initialize());
app.use(_passport["default"].session()); // Routes

app.use(_users["default"]);
app.use(_index["default"]);
app.use(_expenses["default"]);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});
module.exports = app;
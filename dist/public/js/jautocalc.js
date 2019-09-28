"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && (0, _typeof2["default"])(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/index.ts");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/admin.ts":
  /*!**********************!*\
    !*** ./src/admin.ts ***!
    \**********************/

  /*! exports provided: init, destroy */

  /***/
  function srcAdminTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "init", function () {
      return init;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "destroy", function () {
      return destroy;
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./utils */
    "./src/utils.ts");
    /* harmony import */


    var _autocalc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./autocalc */
    "./src/autocalc.ts");

    var NAMESPACE = 'jautocalc';
    var TAG = '_' + NAMESPACE;
    var EVENTS = 'focus change blur';

    function init(jq, opts, vars, funcs) {
      return jq.each(function () {
        var $ctx = $(this);
        $('[' + opts.attribute + ']:not([' + TAG + '])', $ctx).each(function () {
          var $this = $(this);
          var eq = $this.attr(opts.attribute);
          var fields = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findFields"])(eq);

          if (fields.length == 0) {
            return;
          }

          for (var i = 0; i < fields.length; i++) {
            if ($(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getFieldSelector"])(fields[i]), $ctx).length == 0) {
              return;
            }
          }

          if (opts.keyEventsFire) {
            EVENTS += ' keyup keydown keypress';
          }

          var fireEvents = EVENTS.split(' ').join('.' + NAMESPACE + ' ');

          for (var _i = 0; _i < fields.length; _i++) {
            var field = fields[_i];
            $(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getFieldSelector"])(field), $ctx).bind(fireEvents, {
              equation: eq,
              equationFields: fields,
              result: $this,
              context: $ctx,
              opts: opts,
              vars: vars,
              funcs: funcs
            }, function (e) {
              Object(_autocalc__WEBPACK_IMPORTED_MODULE_1__["autoCalc"])(e.data.equation, e.data.equationFields, e.data.result, e.data.context, e.data.opts, e.data.vars, e.data.funcs);
            });
          }

          if (opts.readOnlyResults) {
            $this.attr('readonly', 'readonly');
          }

          $this.attr(TAG, TAG);

          if (opts.initFire) {
            $(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getFieldSelector"])(fields[0]), $ctx).change();
          }
        });
      });
    }

    function destroy(jq, opts) {
      return jq.each(function () {
        var $ctx = $(this);
        $('[' + opts.attribute + '][' + TAG + ']', $ctx).each(function () {
          var $this = $(this);
          var eq = $this.attr(opts.attribute);
          var fields = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findFields"])(eq);

          if (fields.length == 0) {
            return;
          }

          for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            $(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getFieldSelector"])(field), $ctx).unbind('.' + NAMESPACE);
          }

          if (opts.readOnlyResults) {
            $this.removeAttr('readonly');
          }

          $this.removeAttr(TAG);
        });
      });
    }
    /***/

  },

  /***/
  "./src/autocalc.ts":
  /*!*************************!*\
    !*** ./src/autocalc.ts ***!
    \*************************/

  /*! exports provided: autoCalc */

  /***/
  function srcAutocalcTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "autoCalc", function () {
      return autoCalc;
    });
    /* harmony import */


    var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./parse */
    "./src/parse.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utils */
    "./src/utils.ts");

    function autoCalc(eq, fields, result, ctx, opts, vars, funcs) {
      var resultValue = '';
      var numberFormat = {
        dec: '',
        decPlaces: -1,
        thou: '',
        sym: '',
        symLoc: -1
      };

      for (var func in funcs) {
        var f = funcs[func];
        var r = new RegExp(f.rgx, 'gi');
        var m = void 0;

        while ((m = r.exec(eq)) != null) {
          var v = f.exec(m[1], ctx, opts, numberFormat);
          eq = eq.replace(new RegExp(f.rgx, 'gi'), v);
        }
      }

      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        var fieldValue = $(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFieldSelector"])(field), ctx).val();
        var numValue = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["numCleanse"])(fieldValue, opts, numberFormat);

        if (numValue.length == 0) {
          result.val('').change();
          return;
        }

        eq = eq.replace(new RegExp('{' + field + '}', 'g'), numValue);
      }

      eq = eq.replace(/ /g, '');

      if (numberFormat.dec == '') {
        numberFormat.dec = opts.decimalOpts[0];
      }

      if (numberFormat.decPlaces == -1) {
        numberFormat.decPlaces = 0;
      }

      if (numberFormat.thou == '') {
        numberFormat.thou = opts.thousandOpts[0];
      }

      var tmp = Object(_parse__WEBPACK_IMPORTED_MODULE_0__["parse"])(eq, opts);

      if (tmp == null) {
        resultValue = '';
      } else {
        resultValue = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["numberFix"])(tmp, numberFormat.decPlaces);
      }

      resultValue = resultValue.replace(/\./g, '<c>');
      resultValue = resultValue.replace(/\,/g, '<t>');
      resultValue = resultValue.replace(/<c>/g, numberFormat.dec);
      resultValue = resultValue.replace(/<t>/g, numberFormat.thou);

      if (numberFormat.symLoc > -1) {
        if (numberFormat.symLoc == 0) {
          resultValue = numberFormat.sym + resultValue;
        } else {
          resultValue = resultValue + numberFormat.sym;
        }
      }

      if (opts.smartIntegers) {
        resultValue = resultValue.replace(/[\,\.]0+$/, '');
      }

      if ($.isFunction(opts.onShowResult)) {
        resultValue = opts.onShowResult.call(result, resultValue);
      }

      result.val(resultValue);

      if (opts.chainFire) {
        result.change();
      }
    }
    /***/

  },

  /***/
  "./src/functions.ts":
  /*!**************************!*\
    !*** ./src/functions.ts ***!
    \**************************/

  /*! exports provided: funcs */

  /***/
  function srcFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "funcs", function () {
      return funcs;
    });
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utils */
    "./src/utils.ts");

    var funcs = {
      'sum': {
        rgx: 'sum\\({([^}]+)}\\)',
        exec: function exec(field, ctx, opts, numberFormat) {
          var m = 0;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFieldSelector"])(field), ctx).each(function () {
            var n = parseFloat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["numCleanse"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(), opts, numberFormat));
            m += n;
          });
          return m;
        }
      },
      'avg': {
        rgx: 'avg\\({([^}]+)}\\)',
        exec: function exec(field, ctx, opts, numberFormat) {
          var m = 0;
          var c = jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFieldSelector"])(field), ctx).each(function () {
            var n = parseFloat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["numCleanse"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(), opts, numberFormat));
            m += n;
          }).length;
          return m / c;
        }
      },
      'min': {
        rgx: 'min\\({([^}]+)}\\)',
        exec: function exec(field, ctx, opts, numberFormat) {
          return Math.min.apply(this, jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFieldSelector"])(field), ctx).map(function (i, e) {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["numCleanse"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).val(), opts, numberFormat);
          }).get());
        }
      },
      'max': {
        rgx: 'max\\({([^}]+)}\\)',
        exec: function exec(field, ctx, opts, numberFormat) {
          return Math.max.apply(this, jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFieldSelector"])(field), ctx).map(function (i, e) {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["numCleanse"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).val(), opts, numberFormat);
          }).get());
        }
      },
      'count': {
        rgx: 'count\\({([^}]+)}\\)',
        exec: function exec(field, ctx) {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFieldSelector"])(field), ctx).length;
        }
      },
      'countNotEmpty': {
        rgx: 'countNotEmpty\\({([^}]+)}\\)',
        exec: function exec(field, ctx) {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.grep(jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFieldSelector"])(field), ctx), function (n) {
            var val = jquery__WEBPACK_IMPORTED_MODULE_0___default()(n).val() + '';
            return val.length > 0;
          }).length;
        }
      }
    };
    /***/
  },

  /***/
  "./src/index.ts":
  /*!**********************!*\
    !*** ./src/index.ts ***!
    \**********************/

  /*! no exports provided */

  /***/
  function srcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin */
    "./src/admin.ts");
    /* harmony import */


    var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./functions */
    "./src/functions.ts");
    /* harmony import */


    var _parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./parse */
    "./src/parse.ts");

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.jAutoCalc = Object.assign(function () {
      var method = 'init';
      var o = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.jAutoCalc.defaults);
      var publicMethods = {
        init: _admin__WEBPACK_IMPORTED_MODULE_1__["init"],
        destroy: _admin__WEBPACK_IMPORTED_MODULE_1__["destroy"]
      };

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      for (var _i2 = 0, _args = args; _i2 < _args.length; _i2++) {
        var arg = _args[_i2];

        if (typeof arg === 'string') {
          method = arg.toString();
        }

        if ((0, _typeof2["default"])(arg) === 'object') {
          o = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(o, arg);
        }
      }

      var f = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, _functions__WEBPACK_IMPORTED_MODULE_2__["funcs"], o.funcs);
      var v = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend([], _parse__WEBPACK_IMPORTED_MODULE_3__["vars"], o.vars);

      if (publicMethods[method]) {
        return publicMethods[method](this, o, v, f);
      } else {
        return Object(_admin__WEBPACK_IMPORTED_MODULE_1__["init"])(this, o, v, f);
      }
    }, {
      defaults: {
        attribute: 'jAutoCalc',
        thousandOpts: [',', '.', ' '],
        decimalOpts: ['.', ','],
        decimalPlaces: -1,
        initFire: true,
        chainFire: true,
        keyEventsFire: false,
        readOnlyResults: true,
        showParseError: true,
        emptyAsZero: false,
        smartIntegers: false,
        onShowResult: null,
        funcs: {},
        vars: {}
      }
    });
    /***/
  },

  /***/
  "./src/parse.ts":
  /*!**********************!*\
    !*** ./src/parse.ts ***!
    \**********************/

  /*! exports provided: vars, parse */

  /***/
  function srcParseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "vars", function () {
      return vars;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parse", function () {
      return parse;
    });

    var ops = {
      '+': {
        op: '+',
        precedence: 10,
        assoc: 'L',
        exec: function exec(l, r) {
          return l + r;
        }
      },
      '-': {
        op: '-',
        precedence: 10,
        assoc: 'L',
        exec: function exec(l, r) {
          return l - r;
        }
      },
      '*': {
        op: '*',
        precedence: 20,
        assoc: 'L',
        exec: function exec(l, r) {
          return l * r;
        }
      },
      '/': {
        op: '/',
        precedence: 20,
        assoc: 'L',
        exec: function exec(l, r) {
          return l / r;
        }
      },
      '**': {
        op: '**',
        precedence: 30,
        assoc: 'R',
        exec: function exec(l, r) {
          return Math.pow(l, r);
        }
      }
    };
    var vars = {
      e: Math.exp(1),
      pi: Math.atan2(1, 1) * 4
    };

    function parseVal(r) {
      var startOffset = r.offset;
      var value;
      var match;
      value = 0;

      while ('0123456789'.indexOf(r.string.substr(r.offset, 1)) >= 0 && r.offset < r.string.length) {
        r.offset++;
      }

      if (r.string.substr(r.offset, 1) == '.') {
        r.offset++;

        while ('0123456789'.indexOf(r.string.substr(r.offset, 1)) >= 0 && r.offset < r.string.length) {
          r.offset++;
        }
      }

      if (r.offset > startOffset) {
        return parseFloat(r.string.substr(startOffset, r.offset - startOffset));
      } else if (r.string.substr(r.offset, 1) == '+') {
        r.offset++;
        return parseVal(r);
      } else if (r.string.substr(r.offset, 1) == '-') {
        r.offset++;
        return negate(parseVal(r));
      } else if (r.string.substr(r.offset, 1) == '(') {
        r.offset++;
        value = parseExpr(r);

        if (r.string.substr(r.offset, 1) == ')') {
          r.offset++;
          return value;
        }

        r.error = "Parsing error: ')' expected";
        throw new Error('parseError');
      } else if ((match = /^[a-z_][a-z0-9_]*/i.exec(r.string.substr(r.offset))) != null) {
        var name = match[0];
        r.offset += name.length;

        if (name in vars) {
          return vars[name];
        }

        r.error = "Semantic error: unknown variable '" + name + "'";
        throw new Error('unknownVar');
      } else {
        if (r.string.length == r.offset) {
          r.error = 'Parsing error at end of string: value expected';
          throw new Error('valueMissing');
        } else {
          r.error = "Parsing error: unrecognized value";
          throw new Error('valueNotParsed');
        }
      }
    }

    ;

    function negate(value) {
      return -value;
    }

    ;

    function parseOp(r) {
      if (r.string.substr(r.offset, 2) == '**') {
        r.offset += 2;
        return ops['**'];
      }

      if ('+-*/'.indexOf(r.string.substr(r.offset, 1)) >= 0) {
        return ops[r.string.substr(r.offset++, 1)];
      }

      return null;
    }

    ;

    function parseExpr(r) {
      var stack = [{
        precedence: 0,
        assoc: 'L'
      }];
      var value = parseVal(r);

      for (;;) {
        var op = parseOp(r) || {
          precedence: 0,
          assoc: 'L'
        };

        while (op.precedence < stack[stack.length - 1].precedence || op.precedence == stack[stack.length - 1].precedence && op.assoc == 'L') {
          var tos = stack.pop();

          if (!tos.exec) {
            return value;
          }

          value = tos.exec(tos.value, value);
        }

        stack.push({
          op: op.op,
          precedence: op.precedence,
          assoc: op.assoc,
          exec: op.exec,
          value: value
        });
        value = parseVal(r);
      }
    }

    ;

    function parse(str, opts) {
      var r = {
        string: str,
        offset: 0
      };

      try {
        var value = parseExpr(r);

        if (r.offset < r.string.length) {
          r.error = 'Syntax error: junk found at offset ' + r.offset;
          throw new Error('trailingJunk');
        }

        return value;
      } catch (e) {
        if (opts.showParseError) {
          alert("".concat(r.error, " (").concat(e, "):\n").concat(r.string.substr(0, r.offset), "<*>").concat(r.string.substr(r.offset)));
        }

        return null;
      }
    }

    ;
    /***/
  },

  /***/
  "./src/utils.ts":
  /*!**********************!*\
    !*** ./src/utils.ts ***!
    \**********************/

  /*! exports provided: findFields, getFieldSelector, numCleanse, numberFix */

  /***/
  function srcUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "findFields", function () {
      return findFields;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFieldSelector", function () {
      return getFieldSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numCleanse", function () {
      return numCleanse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numberFix", function () {
      return numberFix;
    });
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

    function findFields(eq) {
      var fields = [];
      var r = /{([^}]+)}/gi;
      var m;

      while ((m = r.exec(eq)) != null) {
        fields.push(m[1]);
      }

      return fields;
    }

    ;

    function getFieldSelector(field) {
      if (/^[a-zA-Z].*/.test(field)) {
        return ':input[name="' + field + '"]';
      }

      return field;
    }

    ;

    function numCleanse(value, opts, numberFormat) {
      var fieldValue = value + '';
      var sepOpts = opts.decimalOpts.concat(opts.thousandOpts);
      var numOpts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
      var numValue = '';
      var ch = '';
      var dec = '';
      var decLoc = -1;
      var thou = '';
      var sym = '';
      var symLoc = -1;
      var decPlaces = 0;

      for (var z = fieldValue.length - 1; z >= 0; z--) {
        ch = fieldValue.charAt(z);

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(ch, numOpts) != -1) {
          numValue = ch + numValue;
        } else {
          if (dec == '' && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(ch, opts.decimalOpts) != -1) {
            decLoc = z;
            dec = ch;
            numValue = '.' + numValue;
          } else if (thou == '' && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(ch, opts.thousandOpts) != -1) {
            thou = ch;
          } else if (sym == '' && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(ch, sepOpts) == -1 && (z == 0 || z == fieldValue.length - 1)) {
            sym = ch;
            symLoc = z;
          }
        }
      }

      if (dec != '') {
        decPlaces = fieldValue.length - decLoc - 1;

        if (symLoc > decLoc) {
          decPlaces--;
        }
      }

      if (opts.decimalPlaces != -1) {
        decPlaces = opts.decimalPlaces;
      }

      if (arguments.length === 3) {
        if (numberFormat.dec == '' && dec != '') {
          numberFormat.dec = dec;
        }

        if (numberFormat.decPlaces == -1 && decPlaces != -1 || numberFormat.decPlaces != -1 && decPlaces != -1 && decPlaces < numberFormat.decPlaces) {
          numberFormat.decPlaces = decPlaces;
        }

        if (numberFormat.thou == '' && thou != '') {
          numberFormat.thou = thou;
        }

        if (numberFormat.sym == '' && sym != '') {
          numberFormat.sym = sym;
          numberFormat.symLoc = symLoc;
        }
      }

      if (opts.emptyAsZero && numValue == '') {
        numValue = '0';
      }

      return numValue;
    }

    ;

    function numberFix(num, decPlaces) {
      var n = num.toFixed(decPlaces) + '';
      var x = n.split('.');
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      var x1 = x[0];

      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }

      return x1 + x2;
    }

    ;
    /***/
  },

  /***/
  "jquery":
  /*!*************************!*\
    !*** external "jQuery" ***!
    \*************************/

  /*! no static exports found */

  /***/
  function jquery(module, exports) {
    module.exports = jQuery;
    /***/
  }
  /******/

});
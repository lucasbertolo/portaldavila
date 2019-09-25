webpackHotUpdate("static/development/pages/areauser.js",{

/***/ "./src/components/AreaUser/PropertyManagement.jsx":
/*!********************************************************!*\
  !*** ./src/components/AreaUser/PropertyManagement.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/Users/lucasbertolo/Desktop/projects/portaldavila/portal/src/components/AreaUser/PropertyManagement.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

/* eslint-disable react/button-has-type */



var PropertyManagement =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PropertyManagement, _React$Component);

  function PropertyManagement(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PropertyManagement);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PropertyManagement).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getNeighborhoodList",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default()('http://localhost:8000/neighborhood').then(function (res) {
                return res.json();
              }).then(function (list) {
                if (list) {
                  _this.setState({
                    neighborhood: list
                  });
                }
              })["catch"](function (err) {
                return console.log(err);
              });

            case 2:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      data: props.data,
      neighborhood: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PropertyManagement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNeighborhoodList();
    }
  }, {
    key: "render",
    value: function render() {
      var neighborhood = this.state.neighborhood;
      return __jsx("form", {
        method: "",
        action: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Inserir Propriedade"), __jsx(Select, {
        hasLabel: true,
        htmlFor: "select",
        label: "Select",
        options: neighborhood,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx(Input, {
        hasLabel: true,
        htmlFor: "numberInput",
        label: "Number input",
        required: true,
        type: "number",
        min: "0",
        max: "10000000000",
        step: "500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx(Textarea, {
        hasLabel: true,
        htmlFor: "textarea",
        label: "Textarea",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(Checkbox, {
        hasLabel: true,
        htmlFor: "checkbox",
        label: "Checkbox",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(Radio, {
        hasLabel: true,
        htmlFor: "radioOne",
        label: "Radio one",
        name: "radios",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx(Radio, {
        hasLabel: true,
        htmlFor: "radioTwo",
        label: "Radio two",
        name: "radios",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx(Button, {
        type: "submit",
        value: "submit",
        text: "Send form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }));
    }
  }]);

  return PropertyManagement;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var Button = function Button(props) {
  var type = props.type,
      value = props.value,
      text = props.text;
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("button", {
    type: type || 'button',
    value: value || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, text));
};

var Checkbox = function Checkbox(props) {
  var htmlFor = props.htmlFor,
      label = props.label,
      name = props.name,
      required = props.required;
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("label", {
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("input", {
    id: htmlFor,
    name: name || null,
    required: required || null,
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), label));
};

var Label = function Label(props) {
  var hasLabel = props.hasLabel,
      label = props.label,
      htmlFor = props.htmlFor;

  if (hasLabel === 'true') {
    return __jsx("label", {
      htmlFor: htmlFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, label);
  }

  return null;
};

var Input = function Input(props) {
  var htmlFor = props.htmlFor,
      label = props.label,
      name = props.name,
      required = props.required,
      hasLabel = props.hasLabel,
      max = props.max,
      min = props.min,
      placeholder = props.placeholder,
      step = props.step,
      type = props.type;
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(Label, {
    hasLabel: hasLabel,
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx("input", {
    id: htmlFor,
    max: max || null,
    min: min || null,
    name: name || null,
    placeholder: placeholder || null,
    required: required || null,
    step: step || null,
    type: type || 'text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }));
};

var Radio = function Radio(props) {
  var htmlFor = props.htmlFor,
      label = props.label,
      name = props.name,
      required = props.required;
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("label", {
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("input", {
    id: htmlFor,
    name: name || null,
    required: required || null,
    type: "radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), label));
};

var Select = function Select(props) {
  var hasLabel = props.hasLabel,
      htmlFor = props.htmlFor,
      label = props.label,
      name = props.name,
      required = props.required,
      options = props.options;
  var arrayOptions = options.map(function (item) {
    return item.name;
  }); // eslint-disable-next-line max-len

  var selectOptionsList = arrayOptions.map(function (option, index) {
    return __jsx("option", {
      key: option,
      value: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, option);
  });
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx(Label, {
    hasLabel: hasLabel,
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx("select", {
    defaultValue: "",
    id: htmlFor,
    name: name || null,
    required: required || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "Escolha um bairro"), selectOptionsList));
};

var Textarea = function Textarea(props) {
  var hasLabel = props.hasLabel,
      htmlFor = props.htmlFor,
      label = props.label,
      cols = props.cols,
      name = props.name,
      required = props.required,
      rows = props.rows;
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx(Label, {
    hasLabel: hasLabel,
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }), __jsx("textarea", {
    cols: cols || null,
    id: htmlFor,
    name: name || null,
    required: required || null,
    rows: rows || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PropertyManagement);

/***/ })

})
//# sourceMappingURL=areauser.js.92b8d1618a96dd7d781f.hot-update.js.map
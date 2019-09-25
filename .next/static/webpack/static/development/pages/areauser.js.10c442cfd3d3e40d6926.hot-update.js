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
                return _this.setState({
                  message: 'Erro ao encontrar lista de bairros'
                });
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getTypeList",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default()('http://localhost:8000/typeproperty').then(function (res) {
                return res.json();
              }).then(function (list) {
                if (list) {
                  _this.setState({
                    type: list
                  });
                }
              })["catch"](function (err) {
                return _this.setState({
                  message: 'Erro ao encontrar lista de tipos'
                });
              });

            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.state = {
      data: props.data,
      neighborhood: [],
      type: [],
      messages: '',
      purpose: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PropertyManagement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNeighborhoodList();
      this.getTypeList();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          neighborhood = _this$state.neighborhood,
          messages = _this$state.messages,
          type = _this$state.type;
      return __jsx("form", {
        method: "",
        action: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Inserir Propriedade"), __jsx(Select, {
        hasLabel: true,
        htmlFor: "select",
        label: "Bairro",
        options: neighborhood,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(Select, {
        hasLabel: true,
        htmlFor: "select",
        label: "Tipo de im\xF3vel",
        options: type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(Checkbox, {
        hasLabel: true,
        htmlFor: "checkbox",
        label: "Checkbox",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx(Radio, {
        hasLabel: true,
        htmlFor: "radioOne",
        label: "Loca\xE7\xE3o",
        name: "radios",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), __jsx(Radio, {
        hasLabel: true,
        htmlFor: "radioTwo",
        label: "Venda",
        name: "radios",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx(Input, {
        hasLabel: true,
        htmlFor: "numberInput",
        label: "Pre\xE7o",
        required: true,
        type: "number",
        min: "0",
        max: "10000000000",
        step: "500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx(Button, {
        type: "submit",
        value: "submit",
        text: "Send form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
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
      lineNumber: 128
    },
    __self: this
  }, __jsx("button", {
    type: type || 'button',
    value: value || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
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
      lineNumber: 149
    },
    __self: this
  }, __jsx("label", {
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("input", {
    id: htmlFor,
    name: name || null,
    required: required || null,
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), label));
};

var Label = function Label(props) {
  var hasLabel = props.hasLabel,
      label = props.label,
      htmlFor = props.htmlFor;

  if (hasLabel === true) {
    return __jsx("label", {
      htmlFor: htmlFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
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
      lineNumber: 195
    },
    __self: this
  }, __jsx(Label, {
    hasLabel: hasLabel,
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
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
      lineNumber: 202
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
      lineNumber: 225
    },
    __self: this
  }, __jsx("label", {
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("input", {
    id: htmlFor,
    name: name || null,
    required: required || null,
    type: "radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
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
    return item.name || item.type;
  }); // eslint-disable-next-line max-len

  var selectOptionsList = arrayOptions.map(function (option, index) {
    return __jsx("option", {
      key: option,
      value: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, option);
  });
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx(Label, {
    hasLabel: hasLabel,
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }), __jsx("select", {
    defaultValue: "",
    id: htmlFor,
    name: name || null,
    required: required || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Escolha uma op\xE7\xE3o"), selectOptionsList));
};

/* harmony default export */ __webpack_exports__["default"] = (PropertyManagement);

/***/ })

})
//# sourceMappingURL=areauser.js.10c442cfd3d3e40d6926.hot-update.js.map
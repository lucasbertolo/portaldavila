webpackHotUpdate("static/development/pages/areauser.js",{

/***/ "./src/components/AreaUser/PropertyManagement.jsx":
/*!********************************************************!*\
  !*** ./src/components/AreaUser/PropertyManagement.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);










var _jsxFileName = "/Users/lucasbertolo/Desktop/projects/portaldavila/portal/src/components/AreaUser/PropertyManagement.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

/* eslint-disable react/button-has-type */



var PropertyManagement =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PropertyManagement, _React$Component);

  function PropertyManagement(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PropertyManagement);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(PropertyManagement).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getNeighborhoodList",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:8000/neighborhood').then(function (res) {
                return res.json();
              }).then(function (list) {
                if (list) {
                  _this.setState({
                    neighborhood: list
                  });
                }
              })["catch"](function () {
                return _this.setState({
                  sendStatus: 'Erro ao encontrar lista de bairros'
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getTypeList",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:8000/typeproperty').then(function (res) {
                return res.json();
              }).then(function (list) {
                if (list) {
                  _this.setState({
                    type: list
                  });
                }
              })["catch"](function () {
                return _this.setState({
                  sendStatus: 'Erro ao encontrar lista de tipos'
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onSubmit", function () {
      var _this$state = _this.state,
          neighborhood = _this$state.neighborhood,
          price = _this$state.price,
          type = _this$state.type,
          purpose = _this$state.purpose;

      if (contactEmail.length === 0 || contactName.length === 0) {
        _this.setState({
          sendStatus: 'Ops, algo de errado aconteceu, recarregue a página!!'
        });
      } else {
        _this.setState({
          sendStatus: 'Enviando ...'
        });

        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default()('https://dry-island-26655.herokuapp.com/contactLMS', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
            email: contactEmail,
            message: contactMessage,
            name: contactName,
            phone: contactPhone
          })
        }).then(function (response) {
          return response.json();
        }).then(function (message) {
          if (message) {
            _this.setState({
              sendStatus: 'Enviada com sucesso'
            });
          }
        })["catch"](function (err) {
          _this.setState({
            sendStatus: 'Algo deu errado, tente novamente mais tarde'
          });
        });
      }
    });

    _this.state = {
      neighborhood: [],
      type: [],
      purpose: '',
      sendStatus: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PropertyManagement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNeighborhoodList();
      this.getTypeList();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          neighborhood = _this$state2.neighborhood,
          messages = _this$state2.messages,
          type = _this$state2.type,
          sendStatus = _this$state2.sendStatus;
      return __jsx("form", {
        method: "",
        action: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Inserir Propriedade"), __jsx(Select, {
        hasLabel: true,
        htmlFor: "select",
        label: "Bairro",
        options: neighborhood,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx(Select, {
        hasLabel: true,
        htmlFor: "select",
        label: "Tipo de im\xF3vel",
        options: type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
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
          lineNumber: 123
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
          lineNumber: 131
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
          lineNumber: 139
        },
        __self: this
      }), __jsx("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("button", {
        type: type || 'button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Cadastrar")), sendStatus);
    }
  }]);

  return PropertyManagement;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component); // const Checkbox = (props) => {
//   const {
//     htmlFor,
//     label,
//     name,
//     required,
//   } = props;
//   return (
//     <fieldset>
//       <label
//         htmlFor={htmlFor}
//         label={label}
//       >
//         <input
//           id={htmlFor}
//           name={name || null}
//           required={required || null}
//           type="checkbox"
//         />
//         {label}
//       </label>
//     </fieldset>
//   );
// };


var Label = function Label(props) {
  var hasLabel = props.hasLabel,
      label = props.label,
      htmlFor = props.htmlFor;

  if (hasLabel === true) {
    return __jsx("label", {
      htmlFor: htmlFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
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
      lineNumber: 220
    },
    __self: this
  }, __jsx(Label, {
    hasLabel: hasLabel,
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
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
      lineNumber: 227
    },
    __self: this
  }));
};

var Radio = function Radio(props) {
  var htmlFor = props.htmlFor,
      label = props.label,
      name = props.name,
      required = props.required,
      setPurposeValue = props.setPurposeValue,
      purpose = props.purpose;
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("label", {
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("input", {
    id: htmlFor,
    name: name || null,
    required: required || null,
    type: "radio",
    onClick: setPurposeValue,
    value: purpose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
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
        lineNumber: 285
      },
      __self: this
    }, option);
  });
  return __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx(Label, {
    hasLabel: hasLabel,
    htmlFor: htmlFor,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), __jsx("select", {
    defaultValue: "",
    id: htmlFor,
    name: name || null,
    required: required || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, "Escolha uma op\xE7\xE3o"), selectOptionsList));
};

/* harmony default export */ __webpack_exports__["default"] = (PropertyManagement);

/***/ })

})
//# sourceMappingURL=areauser.js.dd3907b9848c83aefe03.hot-update.js.map
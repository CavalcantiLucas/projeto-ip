/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Content/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Content/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Chart */ \"./src/components/Chart/index.tsx\");\n/* harmony import */ var _hooks_useChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useChart */ \"./src/hooks/useChart.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/Content/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Content/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Content = function Content() {\n  _s();\n\n  var _useChart = (0,_hooks_useChart__WEBPACK_IMPORTED_MODULE_3__.useChart)(),\n      chartData = _useChart.chartData,\n      activeTab = _useChart.activeTab;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeTab),\n      currentData = _useState[0],\n      setCurrentData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var filteredTab = chartData.filter(function (chart) {\n      return chart.id === activeTab;\n    });\n    setCurrentData(filteredTab);\n    console.log(filteredTab);\n  }, [activeTab]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: currentData.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga provident ea magni quas ullam aliquid magnam distinctio unde qui, rem sequi tempore nam, quam dolore nobis enim eius esse quos?\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ChartList, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Subtitle, {\n        children: \"Nicho analisado\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chart__WEBPACK_IMPORTED_MODULE_2__.default, {\n        type: \"pie\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {\n      children: \"Essa \\xE9 a descri\\xE7\\xE3o do gr\\xE1fico.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ChartList, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chart__WEBPACK_IMPORTED_MODULE_2__.default, {\n        type: \"bar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {\n      children: \"Essa \\xE9 a descri\\xE7\\xE3o do gr\\xE1fico.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Content, \"WJxqfLOgQPOCNkEkHn2cBXzdjpQ=\", false, function () {\n  return [_hooks_useChart__WEBPACK_IMPORTED_MODULE_3__.useChart];\n});\n\n_c = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c;\n\n$RefreshReg$(_c, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9pbmRleC50c3g/YWVlMiJdLCJuYW1lcyI6WyJDb250ZW50IiwidXNlQ2hhcnQiLCJjaGFydERhdGEiLCJhY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJmaWx0ZXJlZFRhYiIsImZpbHRlciIsImNoYXJ0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMseURBQVEsRUFEckI7QUFBQSxNQUNaQyxTQURZLGFBQ1pBLFNBRFk7QUFBQSxNQUNEQyxTQURDLGFBQ0RBLFNBREM7O0FBQUEsa0JBR2tCQywrQ0FBUSxDQUFDRCxTQUFELENBSDFCO0FBQUEsTUFHYkUsV0FIYTtBQUFBLE1BR0FDLGNBSEE7O0FBS3BCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxXQUFXLEdBQUdOLFNBQVMsQ0FBQ08sTUFBVixDQUFpQixVQUFBQyxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDQyxFQUFOLEtBQWFSLFNBQWpCO0FBQUEsS0FBdEIsQ0FBcEI7QUFDQUcsa0JBQWMsQ0FBQ0UsV0FBRCxDQUFkO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaO0FBQ0QsR0FKUSxFQUlOLENBQUNMLFNBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFBLGdCQUFLRSxXQUFXLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRSw4REFBQyw4Q0FBRDtBQUFBLDhCQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQywyQ0FBRDtBQUFPLFlBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVdFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFZRSw4REFBQyw4Q0FBRDtBQUFBLDZCQUNFLDhEQUFDLDJDQUFEO0FBQU8sWUFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWVFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0E5QkQ7O0dBQU1kLE87VUFDNkJDLHFEOzs7S0FEN0JELE87QUFnQ04sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250ZW50L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL0NoYXJ0XCI7XG5cbmltcG9ydCB7IHVzZUNoYXJ0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNoYXJ0XCI7XG5cbmltcG9ydCB7IENoYXJ0TGlzdCwgQ29udGFpbmVyLCBEZXNjcmlwdGlvbiwgU3VidGl0bGUgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgeyBjaGFydERhdGEsIGFjdGl2ZVRhYiB9ID0gdXNlQ2hhcnQoKTtcblxuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKGFjdGl2ZVRhYik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZFRhYiA9IGNoYXJ0RGF0YS5maWx0ZXIoY2hhcnQgPT4gY2hhcnQuaWQgPT09IGFjdGl2ZVRhYik7XG4gICAgc2V0Q3VycmVudERhdGEoZmlsdGVyZWRUYWIpO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkVGFiKTtcbiAgfSwgW2FjdGl2ZVRhYl0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMT57Y3VycmVudERhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRnVnYSBwcm92aWRlbnRcbiAgICAgICAgZWEgbWFnbmkgcXVhcyB1bGxhbSBhbGlxdWlkIG1hZ25hbSBkaXN0aW5jdGlvIHVuZGUgcXVpLCByZW0gc2VxdWlcbiAgICAgICAgdGVtcG9yZSBuYW0sIHF1YW0gZG9sb3JlIG5vYmlzIGVuaW0gZWl1cyBlc3NlIHF1b3M/XG4gICAgICA8L3A+XG4gICAgICA8Q2hhcnRMaXN0PlxuICAgICAgICA8U3VidGl0bGU+TmljaG8gYW5hbGlzYWRvPC9TdWJ0aXRsZT5cbiAgICAgICAgPENoYXJ0IHR5cGU9XCJwaWVcIiAvPlxuICAgICAgPC9DaGFydExpc3Q+XG4gICAgICA8RGVzY3JpcHRpb24+RXNzYSDDqSBhIGRlc2NyacOnw6NvIGRvIGdyw6FmaWNvLjwvRGVzY3JpcHRpb24+XG4gICAgICA8Q2hhcnRMaXN0PlxuICAgICAgICA8Q2hhcnQgdHlwZT1cImJhclwiIC8+XG4gICAgICA8L0NoYXJ0TGlzdD5cbiAgICAgIDxEZXNjcmlwdGlvbj5Fc3NhIMOpIGEgZGVzY3Jpw6fDo28gZG8gZ3LDoWZpY28uPC9EZXNjcmlwdGlvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Content/index.tsx\n");

/***/ })

});
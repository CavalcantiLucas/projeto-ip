/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Chart/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Chart/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Chart/index.tsx\",\n    _this = undefined;\n\n\n\nvar data = {\n  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],\n    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],\n    borderWidth: 1\n  }]\n};\n\nvar Chart = function Chart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: data.datasets[0].label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Pie, {\n      data: data,\n      height: 100,\n      width: 100\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4P2E4M2MiXSwibmFtZXMiOlsiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiQ2hhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLFFBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLEVBQW1DLFFBQW5DLEVBQTZDLFFBQTdDLENBREc7QUFFWEMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsU0FBSyxFQUFFLFlBRFQ7QUFFRUgsUUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FGUjtBQUdFSSxtQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxFQUdmLHlCQUhlLEVBSWYseUJBSmUsRUFLZiwwQkFMZSxFQU1mLHlCQU5lLENBSG5CO0FBV0VDLGVBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLEVBS1gsd0JBTFcsRUFNWCx1QkFOVyxDQVhmO0FBbUJFQyxlQUFXLEVBQUU7QUFuQmYsR0FEUTtBQUZDLENBQWI7O0FBMkJBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsc0JBQ1o7QUFBQSw0QkFDQTtBQUFBLGdCQUFLUCxJQUFJLENBQUNFLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFRSw4REFBQyxnREFBRDtBQUFLLFVBQUksRUFBRUgsSUFBWDtBQUFpQixZQUFNLEVBQUUsR0FBekI7QUFBOEIsV0FBSyxFQUFFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURZO0FBQUEsQ0FBZDs7S0FBTU8sSztBQU9OLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBpZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogWydSZWQnLCAnQmx1ZScsICdZZWxsb3cnLCAnR3JlZW4nLCAnUHVycGxlJywgJ09yYW5nZSddLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXG4gICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1LCAyLCAzXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxuICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLFxuICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxuICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJyxcbiAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJyxcbiAgICAgIF0sXG4gICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcbiAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxuICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcbiAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxuICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJyxcbiAgICAgIF0sXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgQ2hhcnQgPSAoKSA9PiAoXG4gIDw+XG4gIDxoMz57ZGF0YS5kYXRhc2V0c1swXS5sYWJlbH08L2gzPlxuICAgIDxQaWUgZGF0YT17ZGF0YX0gaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9Lz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chart/index.tsx\n");

/***/ })

});
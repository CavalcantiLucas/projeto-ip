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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Chart/index.tsx\",\n    _this = undefined;\n\n\n\n\nvar data = function data(canvas) {\n  var ctx = canvas.getContext(\"2d\");\n  var gradient = ctx.createLinearGradient(0, 0, 100, 200);\n  gradient.addColorStop(0, \"#f29682 \");\n  gradient.addColorStop(1, \"#ee69ac\");\n  return {\n    datasets: [{\n      data: [40, 60],\n      backgroundColor: [gradient, \"transparent\"],\n      borderColor: [gradient, \"transparent\"]\n    }]\n  };\n};\n\nvar Chart = function Chart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: data.datasets[0].label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Pie, {\n      data: data,\n      width: 50,\n      height: 50\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4P2E4M2MiXSwibmFtZXMiOlsiZGF0YSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsIkNoYXJ0IiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLE1BQUQsRUFBaUI7QUFDMUIsTUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxvQkFBSixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxDQUFqQjtBQUNBRCxVQUFRLENBQUNFLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUIsVUFBekI7QUFDQUYsVUFBUSxDQUFDRSxZQUFULENBQXNCLENBQXRCLEVBQXlCLFNBQXpCO0FBRUEsU0FBTztBQUNMQyxZQUFRLEVBQUUsQ0FDUjtBQUNFUCxVQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQURSO0FBRUVRLHFCQUFlLEVBQUUsQ0FBQ0osUUFBRCxFQUFXLGFBQVgsQ0FGbkI7QUFHRUssaUJBQVcsRUFBRSxDQUFDTCxRQUFELEVBQVcsYUFBWDtBQUhmLEtBRFE7QUFETCxHQUFQO0FBU0QsQ0FmSDs7QUFrQkEsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWjtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtWLElBQUksQ0FBQ08sUUFBTCxDQUFjLENBQWQsRUFBaUJJO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQUssVUFBSSxFQUFFWCxJQUFYO0FBQWlCLFdBQUssRUFBRSxFQUF4QjtBQUNILFlBQU0sRUFBRTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURZO0FBQUEsQ0FBZDs7S0FBTVUsSztBQVFOLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBpZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cblxuY29uc3QgZGF0YSA9IChjYW52YXM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMTAwLCAyMDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcIiNmMjk2ODIgXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcIiNlZTY5YWNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IFs0MCwgNjBdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2dyYWRpZW50LCBcInRyYW5zcGFyZW50XCJdLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbZ3JhZGllbnQsIFwidHJhbnNwYXJlbnRcIl0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH07XG5cblxuY29uc3QgQ2hhcnQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPGgzPntkYXRhLmRhdGFzZXRzWzBdLmxhYmVsfTwvaDM+XG4gICAgPFBpZSBkYXRhPXtkYXRhfSB3aWR0aD17NTB9XG5cdGhlaWdodD17NTB9IC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chart/index.tsx\n");

/***/ })

});
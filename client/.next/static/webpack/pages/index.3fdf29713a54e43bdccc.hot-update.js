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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Chart/index.tsx\",\n    _this = undefined;\n\n\n\n\nvar data = function data(canvas) {\n  var ctx = canvas.getContext(\"2d\");\n  var gradient = ctx.createLinearGradient(0, 0, 100, 200);\n  gradient.addColorStop(0, \"#f29682 \");\n  gradient.addColorStop(1, \"#ee69ac\");\n  return {\n    datasets: [{\n      responsive: true,\n      width: '100px',\n      height: '100px',\n      data: [40, 30, 10, 20],\n      backgroundColor: [gradient, \"transparent\", gradient, gradient],\n      borderColor: [gradient, \"transparent\", gradient, gradient]\n    }]\n  };\n};\n\nvar Chart = function Chart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"Title\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {\n      data: data,\n      options: {\n        cutoutPercentage: 80,\n        events: [\"none\"],\n        responsive: true\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4P2E4M2MiXSwibmFtZXMiOlsiZGF0YSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZGF0YXNldHMiLCJyZXNwb25zaXZlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsIkNoYXJ0IiwiY3V0b3V0UGVyY2VudGFnZSIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsTUFBRCxFQUFpQjtBQUMxQixNQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixHQUFHLENBQUNHLG9CQUFKLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLENBQWpCO0FBQ0FELFVBQVEsQ0FBQ0UsWUFBVCxDQUFzQixDQUF0QixFQUF5QixVQUF6QjtBQUNBRixVQUFRLENBQUNFLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUIsU0FBekI7QUFFQSxTQUFPO0FBQ0xDLFlBQVEsRUFBRSxDQUNSO0FBQ0FDLGdCQUFVLEVBQUUsSUFEWjtBQUVBQyxXQUFLLEVBQUUsT0FGUDtBQUdBQyxZQUFNLEVBQUUsT0FIUjtBQUlFVixVQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBSlI7QUFLRVcscUJBQWUsRUFBRSxDQUFDUCxRQUFELEVBQVcsYUFBWCxFQUEwQkEsUUFBMUIsRUFBb0NBLFFBQXBDLENBTG5CO0FBTUVRLGlCQUFXLEVBQUUsQ0FBQ1IsUUFBRCxFQUFXLGFBQVgsRUFBMEJBLFFBQTFCLEVBQW9DQSxRQUFwQztBQU5mLEtBRFE7QUFETCxHQUFQO0FBWUQsQ0FsQkg7O0FBcUJBLElBQU1TLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsc0JBQ1o7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMscURBQUQ7QUFDUSxVQUFJLEVBQUViLElBRGQ7QUFFUSxhQUFPLEVBQUU7QUFDUGMsd0JBQWdCLEVBQUUsRUFEWDtBQUVQQyxjQUFNLEVBQUUsQ0FBQyxNQUFELENBRkQ7QUFHUFAsa0JBQVUsRUFBRTtBQUhMO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURZO0FBQUEsQ0FBZDs7S0FBTUssSztBQWNOLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgZGF0YSA9IChjYW52YXM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMTAwLCAyMDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcIiNmMjk2ODIgXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcIiNlZTY5YWNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICAgIGRhdGE6IFs0MCwgMzAsIDEwLCAyMF0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbZ3JhZGllbnQsIFwidHJhbnNwYXJlbnRcIiwgZ3JhZGllbnQsIGdyYWRpZW50XSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogW2dyYWRpZW50LCBcInRyYW5zcGFyZW50XCIsIGdyYWRpZW50LCBncmFkaWVudF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH07XG5cblxuY29uc3QgQ2hhcnQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPGgzPlRpdGxlPC9oMz5cbiAgICA8RG91Z2hudXRcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDgwLFxuICAgICAgICAgICAgICBldmVudHM6IFtcIm5vbmVcIl0sXG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chart/index.tsx\n");

/***/ })

});
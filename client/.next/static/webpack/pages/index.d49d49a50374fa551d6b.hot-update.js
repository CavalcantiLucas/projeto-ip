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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Chart/index.tsx\",\n    _this = undefined;\n\n\n\nvar data = {\n  pie: {\n    labels: [\"a\", \"b\"],\n    datasets: [{\n      data: [40, 60],\n      backgroundColor: [\"#b47df2\", \"#7146EA\"],\n      borderColor: [\"#b47df2\", \"#7146EA\"]\n    }]\n  },\n  bar: {\n    labels: [\"Red\", \"Blue\", \"Yellow\", \"Green\", \"Purple\", \"Orange\"],\n    datasets: [{\n      label: \"# of Votes\",\n      data: [12, 19, 3, 5, 2, 3],\n      backgroundColor: [\"rgba(255, 99, 132, 0.2)\", \"rgba(54, 162, 235, 0.2)\", \"rgba(255, 206, 86, 0.2)\", \"rgba(75, 192, 192, 0.2)\", \"rgba(153, 102, 255, 0.2)\", \"rgba(255, 159, 64, 0.2)\"],\n      borderColor: [\"rgba(255, 99, 132, 1)\", \"rgba(54, 162, 235, 1)\", \"rgba(255, 206, 86, 1)\", \"rgba(75, 192, 192, 1)\", \"rgba(153, 102, 255, 1)\", \"rgba(255, 159, 64, 1)\"],\n      borderWidth: 1\n    }]\n  }\n};\n\nvar Chart = function Chart(_ref) {\n  var type = _ref.type;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"Titulo do grafico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, _this), type === \"pie\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {\n      data: data[type],\n      options: {\n        cutoutPercentage: 50,\n        responsive: true\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), type === \"bar\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n      data: data[type],\n      options: {\n        scales: {\n          yAxes: [{\n            ticks: {\n              beginAtZero: true\n            }\n          }]\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4P2E4M2MiXSwibmFtZXMiOlsiZGF0YSIsInBpZSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJiYXIiLCJsYWJlbCIsImJvcmRlcldpZHRoIiwiQ2hhcnQiLCJ0eXBlIiwiY3V0b3V0UGVyY2VudGFnZSIsInJlc3BvbnNpdmUiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLEtBQUcsRUFBRTtBQUNIQyxVQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQURMO0FBRUhDLFlBQVEsRUFBRSxDQUNSO0FBQ0VILFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRFI7QUFFRUkscUJBQWUsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBRm5CO0FBR0VDLGlCQUFXLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWjtBQUhmLEtBRFE7QUFGUCxHQURNO0FBV1hDLEtBQUcsRUFBRTtBQUNISixVQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixRQUFoQixFQUEwQixPQUExQixFQUFtQyxRQUFuQyxFQUE2QyxRQUE3QyxDQURMO0FBRUhDLFlBQVEsRUFBRSxDQUNSO0FBQ0VJLFdBQUssRUFBRSxZQURUO0FBRUVQLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBRlI7QUFHRUkscUJBQWUsRUFBRSxDQUNmLHlCQURlLEVBRWYseUJBRmUsRUFHZix5QkFIZSxFQUlmLHlCQUplLEVBS2YsMEJBTGUsRUFNZix5QkFOZSxDQUhuQjtBQVdFQyxpQkFBVyxFQUFFLENBQ1gsdUJBRFcsRUFFWCx1QkFGVyxFQUdYLHVCQUhXLEVBSVgsdUJBSlcsRUFLWCx3QkFMVyxFQU1YLHVCQU5XLENBWGY7QUFtQkVHLGlCQUFXLEVBQUU7QUFuQmYsS0FEUTtBQUZQO0FBWE0sQ0FBYjs7QUEyQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxzQkFDWjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0EsSUFBSSxLQUFLLEtBQVQsaUJBQ0MsOERBQUMscURBQUQ7QUFDRSxVQUFJLEVBQUVWLElBQUksQ0FBQ1UsSUFBRCxDQURaO0FBRUUsYUFBTyxFQUFFO0FBQ1BDLHdCQUFnQixFQUFFLEVBRFg7QUFFUEMsa0JBQVUsRUFBRTtBQUZMO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBV0dGLElBQUksS0FBSyxLQUFULGlCQUNDLDhEQUFDLGdEQUFEO0FBQ0UsVUFBSSxFQUFFVixJQUFJLENBQUNVLElBQUQsQ0FEWjtBQUVFLGFBQU8sRUFBRTtBQUNQRyxjQUFNLEVBQUU7QUFDTkMsZUFBSyxFQUFFLENBQ0w7QUFDRUMsaUJBQUssRUFBRTtBQUNMQyx5QkFBVyxFQUFFO0FBRFI7QUFEVCxXQURLO0FBREQ7QUFERDtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBLGtCQURZO0FBQUEsQ0FBZDs7S0FBTVAsSztBQStCTiwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhciwgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHBpZToge1xuICAgIGxhYmVsczogW1wiYVwiLCBcImJcIl0sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgZGF0YTogWzQwLCA2MF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI2I0N2RmMlwiLCBcIiM3MTQ2RUFcIl0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXCIjYjQ3ZGYyXCIsIFwiIzcxNDZFQVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYmFyOiB7XG4gICAgbGFiZWxzOiBbXCJSZWRcIiwgXCJCbHVlXCIsIFwiWWVsbG93XCIsIFwiR3JlZW5cIiwgXCJQdXJwbGVcIiwgXCJPcmFuZ2VcIl0sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1LCAyLCAzXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDE1MywgMTAyLCAyNTUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMTU5LCA2NCwgMSlcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuXG50eXBlIENoYXJ0UHJvcHMgPSB7XG4gIHR5cGU6IFwicGllXCIgfCBcImJhclwiO1xufTtcblxuY29uc3QgQ2hhcnQgPSAoeyB0eXBlIH06IENoYXJ0UHJvcHMpID0+IChcbiAgPD5cbiAgICA8c3Bhbj5UaXR1bG8gZG8gZ3JhZmljbzwvc3Bhbj5cbiAgICB7dHlwZSA9PT0gXCJwaWVcIiAmJiAoXG4gICAgICA8RG91Z2hudXRcbiAgICAgICAgZGF0YT17ZGF0YVt0eXBlXX1cbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDUwLFxuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICl9XG4gICAge3R5cGUgPT09IFwiYmFyXCIgJiYgKFxuICAgICAgPEJhclxuICAgICAgICBkYXRhPXtkYXRhW3R5cGVdfVxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICl9XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chart/index.tsx\n");

/***/ })

});
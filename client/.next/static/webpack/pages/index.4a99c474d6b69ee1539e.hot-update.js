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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Chart */ \"./src/components/Chart/index.tsx\");\n/* harmony import */ var _hooks_useChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useChart */ \"./src/hooks/useChart.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/Content/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Content/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Content = function Content() {\n  _s();\n\n  var _currentData$charts;\n\n  var _useChart = (0,_hooks_useChart__WEBPACK_IMPORTED_MODULE_3__.useChart)(),\n      chartData = _useChart.chartData,\n      activeTab = _useChart.activeTab;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeTab),\n      currentData = _useState[0],\n      setCurrentData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var filteredTab = chartData.filter(function (chart) {\n      return chart.id === activeTab;\n    });\n    setCurrentData(filteredTab);\n    console.log(currentData.charts);\n  }, [activeTab]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: currentData[0].title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: chartData[0].description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), (_currentData$charts = currentData.charts) === null || _currentData$charts === void 0 ? void 0 : _currentData$charts.map(function (chart) {\n      var _chart$charts;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ChartList, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Subtitle, {\n            children: chart.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this), (_chart$charts = chart.charts) === null || _chart$charts === void 0 ? void 0 : _chart$charts.map(function (newChart) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chart__WEBPACK_IMPORTED_MODULE_2__.default, {\n                chartData: newChart\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {\n                children: newChart.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Content, \"WJxqfLOgQPOCNkEkHn2cBXzdjpQ=\", false, function () {\n  return [_hooks_useChart__WEBPACK_IMPORTED_MODULE_3__.useChart];\n});\n\n_c = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c;\n\n$RefreshReg$(_c, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9pbmRleC50c3g/YWVlMiJdLCJuYW1lcyI6WyJDb250ZW50IiwidXNlQ2hhcnQiLCJjaGFydERhdGEiLCJhY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJmaWx0ZXJlZFRhYiIsImZpbHRlciIsImNoYXJ0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsIm5ld0NoYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNhQyx5REFBUSxFQURyQjtBQUFBLE1BQ1pDLFNBRFksYUFDWkEsU0FEWTtBQUFBLE1BQ0RDLFNBREMsYUFDREEsU0FEQzs7QUFBQSxrQkFHa0JDLCtDQUFRLENBQUNELFNBQUQsQ0FIMUI7QUFBQSxNQUdiRSxXQUhhO0FBQUEsTUFHQUMsY0FIQTs7QUFLcEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFdBQVcsR0FBR04sU0FBUyxDQUFDTyxNQUFWLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxhQUFXQSxLQUFLLENBQUNDLEVBQU4sS0FBYVIsU0FBeEI7QUFBQSxLQUFqQixDQUFwQjtBQUNBRyxrQkFBYyxDQUFDRSxXQUFELENBQWQ7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlSLFdBQVcsQ0FBQ1MsTUFBeEI7QUFDRCxHQUpRLEVBSU4sQ0FBQ1gsU0FBRCxDQUpNLENBQVQ7QUFNQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtFLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZVU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSWIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhYztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYseUJBR0dYLFdBQVcsQ0FBQ1MsTUFIZix3REFHRyxvQkFBb0JHLEdBQXBCLENBQXdCLFVBQUNQLEtBQUQ7QUFBQTs7QUFBQSwwQkFDdkI7QUFBQSwrQkFDRSw4REFBQyw4Q0FBRDtBQUFBLGtDQUNFLDhEQUFDLDZDQUFEO0FBQUEsc0JBQVdBLEtBQUssQ0FBQ0s7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixtQkFFR0wsS0FBSyxDQUFDSSxNQUZULGtEQUVHLGNBQWNHLEdBQWQsQ0FBa0IsVUFBQ0MsUUFBRDtBQUFBLGdDQUFjO0FBQUEsc0NBQy9CLDhEQUFDLDJDQUFEO0FBQU8seUJBQVMsRUFBRUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEK0IsZUFFL0IsOERBQUMsZ0RBQUQ7QUFBQSwwQkFBY0EsUUFBUSxDQUFDRjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUYrQjtBQUFBLDRCQUFkO0FBQUEsV0FBbEIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFEdUI7QUFBQSxLQUF4QixDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBNUJEOztHQUFNaEIsTztVQUM2QkMscUQ7OztLQUQ3QkQsTztBQThCTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vQ2hhcnRcIjtcblxuaW1wb3J0IHsgdXNlQ2hhcnQgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQ2hhcnRcIjtcblxuaW1wb3J0IHsgQ2hhcnRMaXN0LCBDb250YWluZXIsIERlc2NyaXB0aW9uLCBTdWJ0aXRsZSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCB7IGNoYXJ0RGF0YSwgYWN0aXZlVGFiIH0gPSB1c2VDaGFydCgpO1xuXG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoYWN0aXZlVGFiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFiID0gY2hhcnREYXRhLmZpbHRlcigoY2hhcnQpID0+IGNoYXJ0LmlkID09PSBhY3RpdmVUYWIpO1xuICAgIHNldEN1cnJlbnREYXRhKGZpbHRlcmVkVGFiKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YS5jaGFydHMpO1xuICB9LCBbYWN0aXZlVGFiXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPntjdXJyZW50RGF0YVswXS50aXRsZX08L2gxPlxuICAgICAgPHA+e2NoYXJ0RGF0YVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICB7Y3VycmVudERhdGEuY2hhcnRzPy5tYXAoKGNoYXJ0KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENoYXJ0TGlzdD5cbiAgICAgICAgICAgIDxTdWJ0aXRsZT57Y2hhcnQudGl0bGV9PC9TdWJ0aXRsZT5cbiAgICAgICAgICAgIHtjaGFydC5jaGFydHM/Lm1hcCgobmV3Q2hhcnQpID0+IDw+XG4gICAgICAgICAgICAgIDxDaGFydCBjaGFydERhdGE9e25ld0NoYXJ0fSAvPlxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+e25ld0NoYXJ0LmRlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8Lz4pfVxuICAgICAgICAgIDwvQ2hhcnRMaXN0PlxuICAgICAgICA8Lz5cbiAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Content/index.tsx\n");

/***/ })

});
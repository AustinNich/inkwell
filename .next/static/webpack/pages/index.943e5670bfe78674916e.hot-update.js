/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* harmony import */ var _context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/InkwellContext */ \"./pages/context/InkwellContext.js\");\n/* harmony import */ var _context_ContextImplementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/ContextImplementation */ \"./pages/context/ContextImplementation.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AnimePage = function AnimePage(_ref) {\n  _s();\n\n  var _data$Page, _data$Page2;\n\n  var data = _ref.data;\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__.default); // const { hello } = context;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage;\n  var pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage);\n  console.log(hello);\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  console.log(data, 'data coming in');\n  var animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      \"data-cy\": \"animeContainer\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            \"data-cy\": \"animeTitle\",\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 43\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-cy\": \"animeDescription\",\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextImplementation__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default, {\n      style: styles.root,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n        container: true,\n        spacing: 3,\n        justify: \"center\",\n        alignItems: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          item: true,\n          xs: 12,\n          style: styles.header,\n          align: \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n            variant: \"h2\",\n            align: \"center\",\n            \"data-cy\": \"page-title\",\n            children: \"Welcome to the Anime Page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n            variant: \"caption\",\n            children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Rakeem G.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 40\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          item: true,\n          align: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n            container: true,\n            justify: \"center\",\n            children: animeList\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          item: true,\n          xs: 12,\n          style: styles.paginationContainer,\n          align: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n            container: true,\n            justify: \"center\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__.default, {\n              \"data-cy\": \"pagination\",\n              variant: \"outlined\",\n              color: \"primary\",\n              onChange: function onChange(e, value) {\n                return setPageNum(value);\n              },\n              defaultPage: 1,\n              page: pageNum,\n              count: pageCount\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimePage, \"pWKP1x6W/1M980ncA6YX6IeEDgk=\");\n\n_c = AnimePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBbmltZVBhZ2UiLCJkYXRhIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJJbmt3ZWxsQ29udGV4dCIsInVzZVN0YXRlIiwicGFnZU51bSIsInNldFBhZ2VOdW0iLCJhbmltZVBlclBhZ2UiLCJhbmltZURpc3BsYXllZCIsInBhZ2VDb3VudCIsIk1hdGgiLCJmbG9vciIsIlBhZ2UiLCJtZWRpYSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJoZWxsbyIsInN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJoZWFkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJkIiwibWF4V2lkdGgiLCJib3JkZXIiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsInBhZGRpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGFnaW5hdGlvbkNvbnRhaW5lciIsImFuaW1lTGlzdCIsInNsaWNlIiwibWFwIiwiYW5pbWVPYmoiLCJjb3ZlckltYWdlIiwibGFyZ2UiLCJlbmdsaXNoIiwiaWQiLCJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDNUIsTUFBTUMsT0FBTyxHQUFHQyxpREFBVSxDQUFDQyw0REFBRCxDQUExQixDQUQ0QixDQUU1Qjs7QUFGNEIsa0JBR0VDLCtDQUFRLENBQUMsQ0FBRCxDQUhWO0FBQUEsTUFHckJDLE9BSHFCO0FBQUEsTUFHWkMsVUFIWTs7QUFJNUIsTUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0EsTUFBSUMsY0FBYyxHQUFHSCxPQUFPLEdBQUdFLFlBQS9CO0FBQ0EsTUFBSUUs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QUFBLGlCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQ0gsQ0E3RkQ7O0dBQU1WLFM7O0tBQUFBLFM7O0FBK0ZOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUGFnaW5hdGlvbic7XG5pbXBvcnQgSW5rd2VsbENvbnRleHQgZnJvbSAnLi9jb250ZXh0L0lua3dlbGxDb250ZXh0JztcbmltcG9ydCBDb250ZXh0SW1wbGVtZW50YXRpb24gZnJvbSAnLi9jb250ZXh0L0NvbnRleHRJbXBsZW1lbnRhdGlvbic7XG5cblxuXG5cblxuXG5jb25zdCBBbmltZVBhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChJbmt3ZWxsQ29udGV4dCk7XG4gICAgLy8gY29uc3QgeyBoZWxsbyB9ID0gY29udGV4dDtcbiAgICBjb25zdCBbcGFnZU51bSwgc2V0UGFnZU51bV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBsZXQgYW5pbWVQZXJQYWdlID0gOTtcbiAgICBsZXQgYW5pbWVEaXNwbGF5ZWQgPSBwYWdlTnVtICogYW5pbWVQZXJQYWdlO1xuICAgIGxldCBwYWdlQ291bnQgPSBNYXRoLmZsb29yKGRhdGE/LlBhZ2U/Lm1lZGlhLmxlbmd0aCAvIGFuaW1lUGVyUGFnZSk7XG5cbiAgICBjb25zb2xlLmxvZyhoZWxsbylcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLFwiICtcbiAgICAgICAgICAgICAgICBcIiM4MDgwODBcIiArXG4gICAgICAgICAgICAgICAgXCIgMCxcIiArXG4gICAgICAgICAgICAgICAgXCIjMDAwMDAwXCIgK1xuICAgICAgICAgICAgICAgIFwiIDEwMCUpXCIsXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBtYXJnaW46ICcwLCAwJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JleSdcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMzUwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggZ3JleScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrZ3JleSdcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZENvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzIlJ1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbkNvbnRhaW5lcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JleScsXG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIGNvbnNvbGUubG9nKGRhdGEsICdkYXRhIGNvbWluZyBpbicpXG4gICAgY29uc3QgYW5pbWVMaXN0ID0gZGF0YT8uUGFnZT8ubWVkaWEuc2xpY2UoYW5pbWVEaXNwbGF5ZWQsIGFuaW1lRGlzcGxheWVkICsgYW5pbWVQZXJQYWdlKS5tYXAoKGFuaW1lT2JqKSA9PiAoXG4gICAgICAgIDwgZGl2IHN0eWxlPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0ga2V5PXthbmltZU9iai5pZH0gZGF0YS1jeT17XCJhbmltZUNvbnRhaW5lclwifSA+XG4gICAgICAgICAgICA8IGRpdiBzdHlsZT17c3R5bGVzLmNhcmR9ICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2FuaW1lT2JqLmNvdmVySW1hZ2UubGFyZ2V9IC8+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy50aXRsZX0gPiA8YiBkYXRhLWN5PXtgYW5pbWVUaXRsZWB9PnthbmltZU9iai50aXRsZS5lbmdsaXNofTwvYj4gPC9wPlxuICAgICAgICAgICAgICAgIDxlbSA+PHAgZGF0YS1jeT17YGFuaW1lRGVzY3JpcHRpb25gfT57YW5pbWVPYmouZGVzY3JpcHRpb259PC9wPjwvZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dEltcGxlbWVudGF0aW9uPlxuICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmhlYWRlcn0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMicgYWxpZ249J2NlbnRlcicgZGF0YS1jeT0ncGFnZS10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgQW5pbWUgUGFnZVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieSA8Yj5SYWtlZW0gRy48L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj0nY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YW5pbWVMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17c3R5bGVzLnBhZ2luYXRpb25Db250YWluZXJ9IGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jeT1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsdWUpID0+IHNldFBhZ2VOdW0odmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZU51bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9QYXBlciA+XG4gICAgICAgIDwvQ29udGV4dEltcGxlbWVudGF0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWVQYWdlXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9oYW5kbGVyXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczogZGF0YVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6ICdmYWlsZWQgdG8gZmV0Y2ggZGF0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
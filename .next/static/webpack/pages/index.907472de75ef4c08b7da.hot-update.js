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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AnimePage = function AnimePage(_ref) {\n  _s();\n\n  var _data$Page, _data$Page2;\n\n  var data = _ref.data;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage;\n  var pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage);\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  console.log(data, 'data coming in');\n  var animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 42\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__.default, {\n    style: styles.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {\n      container: true,\n      spacing: 3,\n      justify: \"center\",\n      alignItems: \"center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {\n        item: true,\n        xs: 12,\n        style: styles.header,\n        align: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {\n          variant: \"h2\",\n          align: \"center\",\n          children: \"Welcome to the Anime Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {\n          variant: \"caption\",\n          children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: \"Rakeem G.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 36\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {\n        item: true,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {\n          container: true,\n          justify: \"center\",\n          children: animeList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {\n        item: true,\n        xs: 12,\n        style: styles.paginationContainer,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {\n          container: true,\n          justify: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_5__.default, {\n            variant: \"outlined\",\n            color: \"primary\",\n            onChange: function onChange(e, value) {\n              return setPageNum(value);\n            },\n            defaultPage: 1,\n            page: pageNum,\n            count: pageCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimePage, \"HDYOMUAR6UNoRZgn1xeFUfR0Ljg=\");\n\n_c = AnimePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBbmltZVBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwYWdlTnVtIiwic2V0UGFnZU51bSIsImFuaW1lUGVyUGFnZSIsImFuaW1lRGlzcGxheWVkIiwicGFnZUNvdW50IiwiTWF0aCIsImZsb29yIiwiUGFnZSIsIm1lZGlhIiwibGVuZ3RoIiwic3R5bGVzIiwicm9vdCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImNhcmQiLCJtYXhXaWR0aCIsImJvcmRlciIsImNhcmRDb250YWluZXIiLCJkaXNwbGF5IiwicGFkZGluZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwYWdpbmF0aW9uQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsImFuaW1lTGlzdCIsInNsaWNlIiwibWFwIiwiYW5pbWVPYmoiLCJjb3ZlckltYWdlIiwibGFyZ2UiLCJlbmdsaXNoIiwiaWQiLCJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBRUVDLCtDQUFRLENBQUMsQ0FBRCxDQUZWO0FBQUEsTUFFckJDLE9BRnFCO0FBQUEsTUFFWkMsVUFGWTs7QUFHNUIsTUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0EsTUFBSUMsY0FBYyxHQUFHSCxPQUFPLEdBQUdFLFlBQS9CO0FBQ0EsTUFBSUUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFBUixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDBCQUFBQSxJQUFJLENBQUVTLElBQU4sMERBQVlDLEtBQVosQ0FBa0JDLE1BQWxCLElBQTJCUCxZ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QURKLGVBU0ksOERBQUMsMkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxhQUFLLEVBQUMsUUFBakI7QUFBQSwrQkFDSSw4REFBQywyREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsaUJBQU8sRUFBQyxRQUF4QjtBQUFBLG9CQUNLYTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosZUFjSSw4REFBQywyREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLGFBQUssRUFBRW5CLE1BQU0sQ0FBQ2dCLG1CQUFqQztBQUFzRCxhQUFLLEVBQUMsUUFBNUQ7QUFBQSwrQkFDSSw4REFBQywyREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsaUJBQU8sRUFBQyxRQUF4QjtBQUFBLGlDQUNJLDhEQUFDLGdFQUFEO0FBQ0ksbUJBQU8sRUFBQyxVQURaO0FBRUksaUJBQUssRUFBQyxTQUZWO0FBR0ksb0JBQVEsRUFBRSxrQkFBQ1csQ0FBRCxFQUFJQyxLQUFKO0FBQUEscUJBQWNyQyxVQUFVLENBQUNxQyxLQUFELENBQXhCO0FBQUEsYUFIZDtBQUlJLHVCQUFXLEVBQUUsQ0FKakI7QUFLSSxnQkFBSSxFQUFFdEMsT0FMVjtBQU1JLGlCQUFLLEVBQUVJO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0JILENBMUZEOztHQUFNUCxTOztLQUFBQSxTOztBQTRGTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb24nO1xuXG5cblxuXG5cblxuY29uc3QgQW5pbWVQYWdlID0gKHsgZGF0YSB9KSA9PiB7XG5cbiAgICBjb25zdCBbcGFnZU51bSwgc2V0UGFnZU51bV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBsZXQgYW5pbWVQZXJQYWdlID0gOTtcbiAgICBsZXQgYW5pbWVEaXNwbGF5ZWQgPSBwYWdlTnVtICogYW5pbWVQZXJQYWdlO1xuICAgIGxldCBwYWdlQ291bnQgPSBNYXRoLmZsb29yKGRhdGE/LlBhZ2U/Lm1lZGlhLmxlbmd0aCAvIGFuaW1lUGVyUGFnZSk7XG5cblxuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlcixcIiArXG4gICAgICAgICAgICAgICAgXCIjODA4MDgwXCIgK1xuICAgICAgICAgICAgICAgIFwiIDAsXCIgK1xuICAgICAgICAgICAgICAgIFwiIzAwMDAwMFwiICtcbiAgICAgICAgICAgICAgICBcIiAxMDAlKVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgbWFyZ2luOiAnMCwgMCdcblxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzM1MHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGdyZXknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZGFya2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcyJSdcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJ1xuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb25Db250YWluZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YSBjb21pbmcgaW4nKVxuICAgIGNvbnN0IGFuaW1lTGlzdCA9IGRhdGE/LlBhZ2U/Lm1lZGlhLnNsaWNlKGFuaW1lRGlzcGxheWVkLCBhbmltZURpc3BsYXllZCArIGFuaW1lUGVyUGFnZSkubWFwKGFuaW1lT2JqID0+IChcbiAgICAgICAgPCBkaXYgc3R5bGU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfSBrZXk9e2FuaW1lT2JqLmlkfSA+XG4gICAgICAgICAgICA8IGRpdiBzdHlsZT17c3R5bGVzLmNhcmR9ICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2FuaW1lT2JqLmNvdmVySW1hZ2UubGFyZ2V9IC8+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy50aXRsZX0+IDxiPnthbmltZU9iai50aXRsZS5lbmdsaXNofTwvYj4gPC9wPlxuICAgICAgICAgICAgICAgIDxlbSA+PHAgPnthbmltZU9iai5kZXNjcmlwdGlvbn08L3A+PC9lbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuaGVhZGVyfSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgQW5pbWUgUGFnZVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvd2VyZWQgYnkgPGI+UmFrZWVtIEcuPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gYWxpZ249J2NlbnRlcicgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthbmltZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMucGFnaW5hdGlvbkNvbnRhaW5lcn0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbHVlKSA9PiBzZXRQYWdlTnVtKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1BhcGVyID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lUGFnZVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9oYW5kbGVyXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczogZGF0YVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiB7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* harmony import */ var _context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/InkwellContext */ \"./pages/context/InkwellContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AnimePage = function AnimePage(_ref) {\n  _s();\n\n  var _data$Page, _data$Page2;\n\n  var data = _ref.data;\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__.default);\n  var hello = context.hello;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage;\n  var pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage);\n  console.log(hello);\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  console.log(data, 'data coming in');\n  var animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      \"data-cy\": \"animeContainer\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            \"data-cy\": \"animeTitle\",\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 43\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-cy\": \"animeDescription\",\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {\n    style: styles.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n      container: true,\n      spacing: 3,\n      justify: \"center\",\n      alignItems: \"center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        xs: 12,\n        style: styles.header,\n        align: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n          variant: \"h2\",\n          align: \"center\",\n          \"data-cy\": \"page-title\",\n          children: \"Welcome to the Anime Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n          variant: \"caption\",\n          children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: \"Rakeem G.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 36\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          container: true,\n          justify: \"center\",\n          children: animeList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        xs: 12,\n        style: styles.paginationContainer,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          container: true,\n          justify: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__.default, {\n            \"data-cy\": \"pagination\",\n            variant: \"outlined\",\n            color: \"primary\",\n            onChange: function onChange(e, value) {\n              return setPageNum(value);\n            },\n            defaultPage: 1,\n            page: pageNum,\n            count: pageCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimePage, \"pWKP1x6W/1M980ncA6YX6IeEDgk=\");\n\n_c = AnimePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBbmltZVBhZ2UiLCJkYXRhIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJJbmt3ZWxsQ29udGV4dCIsImhlbGxvIiwidXNlU3RhdGUiLCJwYWdlTnVtIiwic2V0UGFnZU51bSIsImFuaW1lUGVyUGFnZSIsImFuaW1lRGlzcGxheWVkIiwicGFnZUNvdW50IiwiTWF0aCIsImZsb29yIiwiUGFnZSIsIm1lZGlhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJoZWFkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJkIiwibWF4V2lkdGgiLCJib3JkZXIiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsInBhZGRpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGFnaW5hdGlvbkNvbnRhaW5lciIsImFuaW1lTGlzdCIsInNsaWNlIiwibWFwIiwiYW5pbWVPYmoiLCJjb3ZlckltYWdlIiwibGFyZ2UiLCJlbmdsaXNoIiwiaWQiLCJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDNUIsTUFBTUMsT0FBTyxHQUFHQyxpREFBVSxDQUFDQyw0REFBRCxDQUExQjtBQUQ0QixNQUVwQkMsS0FGb0IsR0FFVEgsT0FGUyxDQUVwQkcsS0FGb0I7O0FBQUEsa0JBR0VDLCtDQUFRLENBQUMsQ0FBRCxDQUhWO0FBQUEsTUFHckJDLE9BSHFCO0FBQUEsTUFHWkMsVUFIWTs7QUFJNUIsTUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0EsTUFBSUMsY0FBYyxHQUFHSCxPQUFP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LGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBM0ZEOztHQUFNWCxTOztLQUFBQSxTOztBQTZGTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb24nO1xuaW1wb3J0IElua3dlbGxDb250ZXh0IGZyb20gJy4vY29udGV4dC9Jbmt3ZWxsQ29udGV4dCc7XG5cblxuXG5cblxuXG5jb25zdCBBbmltZVBhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChJbmt3ZWxsQ29udGV4dCk7XG4gICAgY29uc3QgeyBoZWxsbywgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgW3BhZ2VOdW0sIHNldFBhZ2VOdW1dID0gdXNlU3RhdGUoMSk7XG4gICAgbGV0IGFuaW1lUGVyUGFnZSA9IDk7XG4gICAgbGV0IGFuaW1lRGlzcGxheWVkID0gcGFnZU51bSAqIGFuaW1lUGVyUGFnZTtcbiAgICBsZXQgcGFnZUNvdW50ID0gTWF0aC5mbG9vcihkYXRhPy5QYWdlPy5tZWRpYS5sZW5ndGggLyBhbmltZVBlclBhZ2UpO1xuXG4gICAgY29uc29sZS5sb2coaGVsbG8pXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlcixcIiArXG4gICAgICAgICAgICAgICAgXCIjODA4MDgwXCIgK1xuICAgICAgICAgICAgICAgIFwiIDAsXCIgK1xuICAgICAgICAgICAgICAgIFwiIzAwMDAwMFwiICtcbiAgICAgICAgICAgICAgICBcIiAxMDAlKVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgbWFyZ2luOiAnMCwgMCdcblxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzM1MHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGdyZXknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZGFya2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcyJSdcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJ1xuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb25Db250YWluZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YSBjb21pbmcgaW4nKVxuICAgIGNvbnN0IGFuaW1lTGlzdCA9IGRhdGE/LlBhZ2U/Lm1lZGlhLnNsaWNlKGFuaW1lRGlzcGxheWVkLCBhbmltZURpc3BsYXllZCArIGFuaW1lUGVyUGFnZSkubWFwKChhbmltZU9iaikgPT4gKFxuICAgICAgICA8IGRpdiBzdHlsZT17c3R5bGVzLmNhcmRDb250YWluZXJ9IGtleT17YW5pbWVPYmouaWR9IGRhdGEtY3k9e1wiYW5pbWVDb250YWluZXJcIn0gPlxuICAgICAgICAgICAgPCBkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfSAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthbmltZU9iai5jb3ZlckltYWdlLmxhcmdlfSAvPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMudGl0bGV9ID4gPGIgZGF0YS1jeT17YGFuaW1lVGl0bGVgfT57YW5pbWVPYmoudGl0bGUuZW5nbGlzaH08L2I+IDwvcD5cbiAgICAgICAgICAgICAgICA8ZW0gPjxwIGRhdGEtY3k9e2BhbmltZURlc2NyaXB0aW9uYH0+e2FuaW1lT2JqLmRlc2NyaXB0aW9ufTwvcD48L2VtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30ganVzdGlmeT0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInID5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5oZWFkZXJ9IGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMicgYWxpZ249J2NlbnRlcicgZGF0YS1jeT0ncGFnZS10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBBbmltZSBQYWdlXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieSA8Yj5SYWtlZW0gRy48L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj0nY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FuaW1lTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5wYWdpbmF0aW9uQ29udGFpbmVyfSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY3k9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbHVlKSA9PiBzZXRQYWdlTnVtKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1BhcGVyID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lUGFnZVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaGFuZGxlclwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IGRhdGFcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGVycm9yOiAnZmFpbGVkIHRvIGZldGNoIGRhdGEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
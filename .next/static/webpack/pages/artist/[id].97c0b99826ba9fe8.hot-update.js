/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/artist/[id]",{

/***/ "./src/components/Artist/index17.js":
/*!******************************************!*\
  !*** ./src/components/Artist/index17.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/artist/[id].js":
/*!**********************************!*\
  !*** ./src/pages/artist/[id].js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (/* binding */ Artist)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Page_Transition2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout/Page_Transition2 */ \"./src/components/Layout/Page_Transition2/index.js\");\n/* harmony import */ var _components_Artist_index17__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Artist/index17 */ \"./src/components/Artist/index17.js\");\n/* harmony import */ var _components_Artist_index17__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Artist_index17__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n// import ArtistProfile11 from \"@/components/Artist/index11\";\n// import ArtistProfile14 from \"@/components/Artist/index14\";\n// import ArtistProfile15 from \"@/components/Artist/index15\";\n// import ArtistProfile16 from \"@/components/Artist/index16\";\n\nvar __N_SSP = true;\nfunction Artist(param) {\n    let { artistData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: artistData.artist_name_head\n                    }, void 0, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/pages/artist/[id].js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Dj booking agency based in Madrid\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/pages/artist/[id].js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/pages/artist/[id].js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/pages/artist/[id].js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kikocliment/alt-v1/src/pages/artist/[id].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Page_Transition2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Artist_index17__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    data: artistData\n                }, void 0, false, {\n                    fileName: \"/Users/kikocliment/alt-v1/src/pages/artist/[id].js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kikocliment/alt-v1/src/pages/artist/[id].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Artist;\nvar _c;\n$RefreshReg$(_c, \"Artist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aXN0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUVzQztBQUluRSw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDSDs7QUFFM0MsU0FBU0csT0FBTyxLQUFjO1FBQWQsRUFBRUMsVUFBVSxFQUFFLEdBQWQ7SUFDN0IscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7O2tDQUNILDhEQUFDSztrQ0FBT0QsV0FBV0UsZ0JBQWdCOzs7Ozs7a0NBQ25DLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDWCwyRUFBZUE7MEJBQ2QsNEVBQUNDLG1FQUFlQTtvQkFBQ1csTUFBTVQ7Ozs7Ozs7Ozs7Ozs7QUFJL0I7S0Fkd0JEIiwic291cmNlcyI6WyIvVXNlcnMva2lrb2NsaW1lbnQvYWx0LXYxL3NyYy9wYWdlcy9hcnRpc3QvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBQYWdlVHJhbnNpdGlvbjIgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXQvUGFnZV9UcmFuc2l0aW9uMlwiO1xuXG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvdXRpbHMvZmlyZWJhc2VDb25maWdcIjtcbi8vIGltcG9ydCBBcnRpc3RQcm9maWxlMTEgZnJvbSBcIkAvY29tcG9uZW50cy9BcnRpc3QvaW5kZXgxMVwiO1xuLy8gaW1wb3J0IEFydGlzdFByb2ZpbGUxNCBmcm9tIFwiQC9jb21wb25lbnRzL0FydGlzdC9pbmRleDE0XCI7XG4vLyBpbXBvcnQgQXJ0aXN0UHJvZmlsZTE1IGZyb20gXCJAL2NvbXBvbmVudHMvQXJ0aXN0L2luZGV4MTVcIjtcbi8vIGltcG9ydCBBcnRpc3RQcm9maWxlMTYgZnJvbSBcIkAvY29tcG9uZW50cy9BcnRpc3QvaW5kZXgxNlwiO1xuaW1wb3J0IEFydGlzdFByb2ZpbGUxNyBmcm9tIFwiQC9jb21wb25lbnRzL0FydGlzdC9pbmRleDE3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGlzdCh7IGFydGlzdERhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnthcnRpc3REYXRhLmFydGlzdF9uYW1lX2hlYWR9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRqIGJvb2tpbmcgYWdlbmN5IGJhc2VkIGluIE1hZHJpZFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQYWdlVHJhbnNpdGlvbjI+XG4gICAgICAgIDxBcnRpc3RQcm9maWxlMTcgZGF0YT17YXJ0aXN0RGF0YX0vPlxuICAgICAgPC9QYWdlVHJhbnNpdGlvbjI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucGFyYW1zO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcInJvc3RlclwiLCBpZCk7XG4gICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xuXG4gICAgaWYgKCFkb2NTbmFwLmV4aXN0cygpKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiQXJ0aXN0IG5vdCBmb3VuZC5cIik7XG4gICAgICByZXR1cm4geyBub3RGb3VuZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhcnRpc3REYXRhOiBkb2NTbmFwLmRhdGEoKSB8fCBudWxsLFxuICAgICAgICBzc3JXb3JraW5nOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhcnRpc3QgZGF0YTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJQYWdlVHJhbnNpdGlvbjIiLCJBcnRpc3RQcm9maWxlMTciLCJBcnRpc3QiLCJhcnRpc3REYXRhIiwidGl0bGUiLCJhcnRpc3RfbmFtZV9oZWFkIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkYXRhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/artist/[id].js\n"));

/***/ })

});
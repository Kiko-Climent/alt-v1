/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Features/Roster/rosterSlice.js":
/*!*******************************************************!*\
  !*** ./src/components/Features/Roster/rosterSlice.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setArtist: () => (/* binding */ setArtist),\n/* harmony export */   setError: () => (/* binding */ setError),\n/* harmony export */   setItemError: () => (/* binding */ setItemError),\n/* harmony export */   setItemLoading: () => (/* binding */ setItemLoading),\n/* harmony export */   setLoading: () => (/* binding */ setLoading),\n/* harmony export */   setRoster: () => (/* binding */ setRoster)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst rosterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"roster\",\n    initialState: {\n        items: [],\n        loading: false,\n        error: null,\n        item: null,\n        itemLoading: false,\n        itemError: null\n    },\n    reducers: {\n        setLoading (state, action) {\n            state.loading = action.payload;\n        },\n        setRoster (state, action) {\n            state.items = action.payload;\n        },\n        setError (state, action) {\n            state.error = action.payload;\n        },\n        setItemLoading (state, action) {\n            state.itemLoading = action.payload;\n        },\n        setArtist (state, action) {\n            state.item = action.payload;\n        },\n        setItemError (state, action) {\n            state.itemError = action.payload;\n        }\n    }\n});\nconst { setLoading, setRoster, setError, setItemLoading, setArtist, setItemError } = rosterSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rosterSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlcy9Sb3N0ZXIvcm9zdGVyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsY0FBY0QsNkRBQVdBLENBQUM7SUFDOUJFLE1BQU07SUFDTkMsY0FBYztRQUNaQyxPQUFPLEVBQUU7UUFDVEMsU0FBUztRQUNUQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxXQUFXO0lBQ2I7SUFDQUMsVUFBVTtRQUNSQyxZQUFXQyxLQUFLLEVBQUVDLE1BQU07WUFDdEJELE1BQU1QLE9BQU8sR0FBR1EsT0FBT0MsT0FBTztRQUNoQztRQUNBQyxXQUFVSCxLQUFLLEVBQUVDLE1BQU07WUFDckJELE1BQU1SLEtBQUssR0FBR1MsT0FBT0MsT0FBTztRQUM5QjtRQUNBRSxVQUFTSixLQUFLLEVBQUVDLE1BQU07WUFDcEJELE1BQU1OLEtBQUssR0FBR08sT0FBT0MsT0FBTztRQUM5QjtRQUNBRyxnQkFBZUwsS0FBSyxFQUFFQyxNQUFNO1lBQzFCRCxNQUFNSixXQUFXLEdBQUdLLE9BQU9DLE9BQU87UUFDcEM7UUFDQUksV0FBVU4sS0FBSyxFQUFFQyxNQUFNO1lBQ3JCRCxNQUFNTCxJQUFJLEdBQUdNLE9BQU9DLE9BQU87UUFDN0I7UUFDQUssY0FBYVAsS0FBSyxFQUFFQyxNQUFNO1lBQ3hCRCxNQUFNSCxTQUFTLEdBQUdJLE9BQU9DLE9BQU87UUFDbEM7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUNYSCxVQUFVLEVBQ1ZJLFNBQVMsRUFDVEMsUUFBUSxFQUNSQyxjQUFjLEVBQ2RDLFNBQVMsRUFDVEMsWUFBWSxFQUNiLEdBQUdsQixZQUFZbUIsT0FBTyxDQUFDO0FBRXhCLGlFQUFlbkIsWUFBWW9CLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2tpa29jbGltZW50L2FsdC12MS9zcmMvY29tcG9uZW50cy9GZWF0dXJlcy9Sb3N0ZXIvcm9zdGVyU2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCByb3N0ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJyb3N0ZXJcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgaXRlbXM6IFtdLCAvLyBMaXN0YSBkZSBhcnRpc3Rhc1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGl0ZW06IG51bGwsIC8vIEFydGlzdGEgc2VsZWNjaW9uYWRvXG4gICAgaXRlbUxvYWRpbmc6IGZhbHNlLFxuICAgIGl0ZW1FcnJvcjogbnVsbCxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRMb2FkaW5nKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIHNldFJvc3RlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5pdGVtcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2V0RXJyb3Ioc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIHNldEl0ZW1Mb2FkaW5nKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLml0ZW1Mb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRBcnRpc3Qoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuaXRlbSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2V0SXRlbUVycm9yKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLml0ZW1FcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2V0TG9hZGluZyxcbiAgc2V0Um9zdGVyLFxuICBzZXRFcnJvcixcbiAgc2V0SXRlbUxvYWRpbmcsXG4gIHNldEFydGlzdCxcbiAgc2V0SXRlbUVycm9yLFxufSA9IHJvc3RlclNsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHJvc3RlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwicm9zdGVyU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtIiwiaXRlbUxvYWRpbmciLCJpdGVtRXJyb3IiLCJyZWR1Y2VycyIsInNldExvYWRpbmciLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRSb3N0ZXIiLCJzZXRFcnJvciIsInNldEl0ZW1Mb2FkaW5nIiwic2V0QXJ0aXN0Iiwic2V0SXRlbUVycm9yIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Features/Roster/rosterSlice.js\n");

/***/ }),

/***/ "./src/components/Header3.js":
/*!***********************************!*\
  !*** ./src/components/Header3.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer */ \"framer\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer__WEBPACK_IMPORTED_MODULE_4__]);\nframer__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst Header3 = ()=>{\n    const body = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const isInView = (0,framer__WEBPACK_IMPORTED_MODULE_4__.useInView)(body, {\n        once: true,\n        margin: \"75%\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathname = router.pathname;\n    const animation_header = {\n        initial: {\n            y: \"-50%\",\n            opacity: 0\n        },\n        enter: {\n            y: \"0\",\n            opacity: 1,\n            transition: {\n                duration: 0.75,\n                ease: [\n                    0.33,\n                    1,\n                    0.68,\n                    1\n                ],\n                delay: 0.5\n            }\n        }\n    };\n    const animation_header2 = {\n        initial: {\n            y: \"-50%\",\n            opacity: 0\n        },\n        enter: {\n            y: \"0\",\n            opacity: 1,\n            transition: {\n                duration: 0.75,\n                ease: [\n                    0.33,\n                    1,\n                    0.68,\n                    1\n                ],\n                delay: 0.9\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: body,\n        translate: \"no\",\n        className: \"flex justify-between tracking-widest px-2 short:px-2 md:px-4 py-2 bg-black/10 mix-blend-difference text-white text-xs md:text-[13px] top-0 fixed w-full z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                custom: 1,\n                variants: animation_header,\n                initial: \"initial\",\n                animate: isInView ? \"enter\" : \"\",\n                className: \"flex font-bold hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/home\",\n                    children: \"Against Low Trends\"\n                }, void 0, false, {\n                    fileName: \"/Users/kikocliment/alt-v1/src/components/Header3.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kikocliment/alt-v1/src/components/Header3.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                custom: 1,\n                variants: animation_header2,\n                initial: \"initial\",\n                animate: isInView ? \"enter\" : \"\",\n                className: \"flex font-bold gap-1 transform transition-transform duration-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/about\",\n                        className: `${pathname === \"/about\" ? \"text-active\" : \"\"} hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200`,\n                        children: \"about,\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/components/Header3.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/contact\",\n                        className: `${pathname === \"/contact\" ? \"text-active\" : \"\"} hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200`,\n                        children: \"contact,\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/components/Header3.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.instagram.com/againstlowtrends/\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200\",\n                        children: \"ig\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/components/Header3.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kikocliment/alt-v1/src/components/Header3.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kikocliment/alt-v1/src/components/Header3.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header3); // playground hover effect for links: hover:bg-white hover:text-black //\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ0U7QUFDUztBQUNHO0FBRTNDLE1BQU1LLFVBQVU7SUFFZCxNQUFNQyxPQUFPTCw2Q0FBTUEsQ0FBQztJQUNwQixNQUFNTSxXQUFXSixpREFBU0EsQ0FBQ0csTUFBTTtRQUFDRSxNQUFNO1FBQU1DLFFBQVE7SUFBSztJQUMzRCxNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTVMsV0FBV0QsT0FBT0MsUUFBUTtJQUVoQyxNQUFNQyxtQkFBbUI7UUFDdkJDLFNBQVM7WUFBQ0MsR0FBRztZQUFRQyxTQUFTO1FBQUM7UUFDL0JDLE9BQU87WUFBQ0YsR0FBRztZQUFLQyxTQUFTO1lBQUdFLFlBQVk7Z0JBQUNDLFVBQVU7Z0JBQU1DLE1BQU07b0JBQUM7b0JBQU07b0JBQUc7b0JBQU07aUJBQUU7Z0JBQUdDLE9BQU87WUFBRztRQUFDO0lBRWpHO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCUixTQUFTO1lBQUNDLEdBQUc7WUFBUUMsU0FBUztRQUFDO1FBQy9CQyxPQUFPO1lBQUNGLEdBQUc7WUFBS0MsU0FBUztZQUFHRSxZQUFZO2dCQUFDQyxVQUFVO2dCQUFNQyxNQUFNO29CQUFDO29CQUFNO29CQUFHO29CQUFNO2lCQUFFO2dCQUFHQyxPQUFPO1lBQUc7UUFBQztJQUVqRztJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxLQUFLakI7UUFBTWtCLFdBQVU7UUFDMUJDLFdBQVU7OzBCQUNSLDhEQUFDckIsMENBQU1BLENBQUNrQixHQUFHO2dCQUFDSSxRQUFRO2dCQUFHQyxVQUFVZjtnQkFBa0JDLFNBQVE7Z0JBQVVlLFNBQVNyQixXQUFXLFVBQVU7Z0JBQ25Ha0IsV0FBVTswQkFDUiw0RUFBQ3pCLGtEQUFJQTtvQkFBQzZCLE1BQUs7OEJBQVE7Ozs7Ozs7Ozs7OzBCQUVyQiw4REFBQ3pCLDBDQUFNQSxDQUFDa0IsR0FBRztnQkFBQ0ksUUFBUTtnQkFBR0MsVUFBVU47Z0JBQW1CUixTQUFRO2dCQUFVZSxTQUFTckIsV0FBVyxVQUFVO2dCQUNwR2tCLFdBQVU7O2tDQUNSLDhEQUFDekIsa0RBQUlBO3dCQUFDNkIsTUFBSzt3QkFBU0osV0FBVyxHQUFHZCxhQUFhLFdBQVcsZ0JBQWdCLEdBQUcsNkVBQTZFLENBQUM7a0NBQUU7Ozs7OztrQ0FDN0osOERBQUNYLGtEQUFJQTt3QkFBQzZCLE1BQUs7d0JBQVdKLFdBQVcsR0FBR2QsYUFBYSxhQUFhLGdCQUFnQixHQUFHLDZFQUE2RSxDQUFDO2tDQUFFOzs7Ozs7a0NBQ2pLLDhEQUFDbUI7d0JBQUVELE1BQUs7d0JBQThDRSxRQUFPO3dCQUFTQyxLQUFJO3dCQUFzQlAsV0FBVTtrQ0FBK0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqTTtBQUVBLGlFQUFlcEIsT0FBT0EsRUFBQyxDQUV2Qix3RUFBd0UiLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWtvY2xpbWVudC9hbHQtdjEvc3JjL2NvbXBvbmVudHMvSGVhZGVyMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3LCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyXCI7XG5cbmNvbnN0IEhlYWRlcjMgPSAoKSA9PiB7XG5cbiAgY29uc3QgYm9keSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcoYm9keSwge29uY2U6IHRydWUsIG1hcmdpbjogXCI3NSVcIn0pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZTtcblxuICBjb25zdCBhbmltYXRpb25faGVhZGVyID0ge1xuICAgIGluaXRpYWw6IHt5OiBcIi01MCVcIiwgb3BhY2l0eTogMH0sIFxuICAgIGVudGVyOiB7eTogXCIwXCIsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHtkdXJhdGlvbjogMC43NSwgZWFzZTogWzAuMzMsIDEsIDAuNjgsIDFdLCAgZGVsYXk6IDAuNX19XG5cbiAgfVxuXG4gIGNvbnN0IGFuaW1hdGlvbl9oZWFkZXIyID0ge1xuICAgIGluaXRpYWw6IHt5OiBcIi01MCVcIiwgb3BhY2l0eTogMH0sIFxuICAgIGVudGVyOiB7eTogXCIwXCIsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHtkdXJhdGlvbjogMC43NSwgZWFzZTogWzAuMzMsIDEsIDAuNjgsIDFdLCAgZGVsYXk6IDAuOX19XG5cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHJlZj17Ym9keX0gdHJhbnNsYXRlPVwibm9cIiBcbiAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0cmFja2luZy13aWRlc3QgcHgtMiBzaG9ydDpweC0yIG1kOnB4LTQgcHktMiBiZy1ibGFjay8xMCBtaXgtYmxlbmQtZGlmZmVyZW5jZSB0ZXh0LXdoaXRlIHRleHQteHMgbWQ6dGV4dC1bMTNweF0gdG9wLTAgZml4ZWQgdy1mdWxsIHotNTBcIj5cbiAgICAgIDxtb3Rpb24uZGl2IGN1c3RvbT17MX0gdmFyaWFudHM9e2FuaW1hdGlvbl9oZWFkZXJ9IGluaXRpYWw9XCJpbml0aWFsXCIgYW5pbWF0ZT17aXNJblZpZXcgPyBcImVudGVyXCIgOiBcIlwifSBcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZm9udC1ib2xkIGhvdmVyOnRleHQtYmxhY2sgaG92ZXI6YmctWyNlZDM4MzNdIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+QWdhaW5zdCBMb3cgVHJlbmRzPC9MaW5rPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPG1vdGlvbi5kaXYgY3VzdG9tPXsxfSB2YXJpYW50cz17YW5pbWF0aW9uX2hlYWRlcjJ9IGluaXRpYWw9XCJpbml0aWFsXCIgYW5pbWF0ZT17aXNJblZpZXcgPyBcImVudGVyXCIgOiBcIlwifSBcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZm9udC1ib2xkIGdhcC0xIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT17YCR7cGF0aG5hbWUgPT09IFwiL2Fib3V0XCIgPyBcInRleHQtYWN0aXZlXCIgOiBcIlwifSBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLVsjZWQzODMzXSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwYH0+YWJvdXQsPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9e2Ake3BhdGhuYW1lID09PSBcIi9jb250YWN0XCIgPyBcInRleHQtYWN0aXZlXCIgOiBcIlwifSBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLVsjZWQzODMzXSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwYH0+Y29udGFjdCw8L0xpbms+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnYWluc3Rsb3d0cmVuZHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYmxhY2sgaG92ZXI6YmctWyNlZDM4MzNdIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5pZzwvYT5cblxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIzO1xuXG4vLyBwbGF5Z3JvdW5kIGhvdmVyIGVmZmVjdCBmb3IgbGlua3M6IGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgLy8iXSwibmFtZXMiOlsiTGluayIsInVzZVJlZiIsInVzZVJvdXRlciIsInVzZUluVmlldyIsIm1vdGlvbiIsIkhlYWRlcjMiLCJib2R5IiwiaXNJblZpZXciLCJvbmNlIiwibWFyZ2luIiwicm91dGVyIiwicGF0aG5hbWUiLCJhbmltYXRpb25faGVhZGVyIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiZW50ZXIiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZGVsYXkiLCJhbmltYXRpb25faGVhZGVyMiIsImRpdiIsInJlZiIsInRyYW5zbGF0ZSIsImNsYXNzTmFtZSIsImN1c3RvbSIsInZhcmlhbnRzIiwiYW5pbWF0ZSIsImhyZWYiLCJhIiwidGFyZ2V0IiwicmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header3.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Page_Transition2_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout/Page_Transition2/styles.scss */ \"./src/components/Layout/Page_Transition2/styles.scss\");\n/* harmony import */ var _components_Layout_Page_Transition2_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_Page_Transition2_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var _components_Header3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Header3 */ \"./src/components/Header3.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer__WEBPACK_IMPORTED_MODULE_3__, react_redux__WEBPACK_IMPORTED_MODULE_4__, _store_store__WEBPACK_IMPORTED_MODULE_5__, _components_Header3__WEBPACK_IMPORTED_MODULE_6__]);\n([framer__WEBPACK_IMPORTED_MODULE_3__, react_redux__WEBPACK_IMPORTED_MODULE_4__, _store_store__WEBPACK_IMPORTED_MODULE_5__, _components_Header3__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction App({ Component, pageProps, router }) {\n    const isSplashPage = router.pathname === \"/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                !isSplashPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header3__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kikocliment/alt-v1/src/pages/_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 33\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    mode: \"wait\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, router.route, false, {\n                        fileName: \"/Users/kikocliment/alt-v1/src/pages/_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kikocliment/alt-v1/src/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kikocliment/alt-v1/src/pages/_app.js\",\n            lineNumber: 14,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kikocliment/alt-v1/src/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDNEI7QUFDakI7QUFDRjtBQUNMO0FBQ1M7QUFHNUIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFO0lBQzFELE1BQU1DLGVBQWVELE9BQU9FLFFBQVEsS0FBSztJQUV6QyxxQkFDTSw4REFBQ1IsaURBQVFBO1FBQUNDLE9BQU9BLG9EQUFLQTtrQkFDcEIsNEVBQUNROztnQkFFSSxDQUFDRiw4QkFBZ0IsOERBQUNMLDJEQUFPQTs7Ozs7OEJBQzFCLDhEQUFDSCxtREFBZUE7b0JBQUNXLE1BQUs7OEJBQ3BCLDRFQUFDTjt3QkFBOEIsR0FBR0MsU0FBUzt1QkFBM0JDLE9BQU9LLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QyIsInNvdXJjZXMiOlsiL1VzZXJzL2tpa29jbGltZW50L2FsdC12MS9zcmMvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiQC9jb21wb25lbnRzL0xheW91dC9QYWdlX1RyYW5zaXRpb24yL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJAL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgSGVhZGVyMyBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlcjNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pIHtcbiAgY29uc3QgaXNTcGxhc2hQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIjtcblxuICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7LyogTW9zdHJhciBIZWFkZXIgc29sbyBzaSBubyBlc3RhbW9zIGVuIGVsIFNwbGFzaCAqL31cbiAgICAgICAgICAgICAgeyFpc1NwbGFzaFBhZ2UgJiYgPEhlYWRlcjMvPn1cbiAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQga2V5PXtyb3V0ZXIucm91dGV9IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFuaW1hdGVQcmVzZW5jZSIsIlByb3ZpZGVyIiwic3RvcmUiLCJIZWFkZXIzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaXNTcGxhc2hQYWdlIiwicGF0aG5hbWUiLCJkaXYiLCJtb2RlIiwicm91dGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _components_Features_Roster_rosterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Features/Roster/rosterSlice */ \"./src/components/Features/Roster/rosterSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _components_Features_Roster_rosterSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _components_Features_Roster_rosterSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        roster: _components_Features_Roster_rosterSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNvQjtBQUcvRCxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUNsQ0csU0FBUztRQUNQQyxRQUFRSCwrRUFBYUE7SUFDdkI7QUFDRixHQUFHO0FBRUgsaUVBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWtvY2xpbWVudC9hbHQtdjEvc3JjL3N0b3JlL3N0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCByb3N0ZXJSZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVzL1Jvc3Rlci9yb3N0ZXJTbGljZVwiO1xuXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHJvc3Rlcjogcm9zdGVyUmVkdWNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJyb3N0ZXJSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwicm9zdGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ }),

/***/ "./src/components/Layout/Page_Transition2/styles.scss":
/*!************************************************************!*\
  !*** ./src/components/Layout/Page_Transition2/styles.scss ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "framer":
/*!*************************!*\
  !*** external "framer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();
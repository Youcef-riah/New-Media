"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Grid.tsx":
/*!*****************************!*\
  !*** ./components/Grid.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data */ \"(app-pages-browser)/./data/index.ts\");\n/* harmony import */ var _ui_BentoGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/BentoGrid */ \"(app-pages-browser)/./components/ui/BentoGrid.tsx\");\n\n\n\nconst Grid = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"z-20\",\n        id: \"about\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_BentoGrid__WEBPACK_IMPORTED_MODULE_2__.BentoGrid, {\n            className: \" w-full py-20\",\n            children: _data__WEBPACK_IMPORTED_MODULE_1__.gridItems.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_BentoGrid__WEBPACK_IMPORTED_MODULE_2__.BentoGridItem, {\n                    id: item.id,\n                    title: item.title,\n                    description: item.description,\n                    // remove icon prop\n                    // remove original classname condition\n                    className: item.className,\n                    img: item.img,\n                    imgClassName: item.imgClassName,\n                    titleClassName: item.titleClassName,\n                    spareImg: item.spareImg\n                }, i, false, {\n                    fileName: \"/home/youcef-rh/New-Media-1/components/Grid.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/youcef-rh/New-Media-1/components/Grid.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/youcef-rh/New-Media-1/components/Grid.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Grid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvR3JpZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFDdUI7QUFFMUQsTUFBTUcsT0FBTztJQUNYLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO1FBQU9DLElBQUc7a0JBQzNCLDRFQUFDTCxvREFBU0E7WUFBQ0ksV0FBVTtzQkFDbEJMLDRDQUFTQSxDQUFDTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQ3BCLDhEQUFDUCx3REFBYUE7b0JBQ1pJLElBQUlFLEtBQUtGLEVBQUU7b0JBRVhJLE9BQU9GLEtBQUtFLEtBQUs7b0JBQ2pCQyxhQUFhSCxLQUFLRyxXQUFXO29CQUM3QixtQkFBbUI7b0JBQ25CLHNDQUFzQztvQkFDdENOLFdBQVdHLEtBQUtILFNBQVM7b0JBQ3pCTyxLQUFLSixLQUFLSSxHQUFHO29CQUNiQyxjQUFjTCxLQUFLSyxZQUFZO29CQUMvQkMsZ0JBQWdCTixLQUFLTSxjQUFjO29CQUNuQ0MsVUFBVVAsS0FBS08sUUFBUTttQkFUbEJOOzs7Ozs7Ozs7Ozs7Ozs7QUFlakI7S0F0Qk1OO0FBd0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JpZC50c3g/MjI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmlkSXRlbXMgfSBmcm9tIFwiQC9kYXRhXCI7XG5pbXBvcnQgeyBCZW50b0dyaWQsIEJlbnRvR3JpZEl0ZW0gfSBmcm9tIFwiLi91aS9CZW50b0dyaWRcIjtcblxuY29uc3QgR3JpZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ6LTIwXCIgaWQ9XCJhYm91dFwiPlxuICAgICAgPEJlbnRvR3JpZCBjbGFzc05hbWU9XCIgdy1mdWxsIHB5LTIwXCI+XG4gICAgICAgIHtncmlkSXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgPEJlbnRvR3JpZEl0ZW1cbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBpY29uIHByb3BcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvcmlnaW5hbCBjbGFzc25hbWUgY29uZGl0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0uY2xhc3NOYW1lfVxuICAgICAgICAgICAgaW1nPXtpdGVtLmltZ31cbiAgICAgICAgICAgIGltZ0NsYXNzTmFtZT17aXRlbS5pbWdDbGFzc05hbWV9XG4gICAgICAgICAgICB0aXRsZUNsYXNzTmFtZT17aXRlbS50aXRsZUNsYXNzTmFtZX1cbiAgICAgICAgICAgIHNwYXJlSW1nPXtpdGVtLnNwYXJlSW1nfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9CZW50b0dyaWQ+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdLCJuYW1lcyI6WyJncmlkSXRlbXMiLCJCZW50b0dyaWQiLCJCZW50b0dyaWRJdGVtIiwiR3JpZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsIm1hcCIsIml0ZW0iLCJpIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZyIsImltZ0NsYXNzTmFtZSIsInRpdGxlQ2xhc3NOYW1lIiwic3BhcmVJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Grid.tsx\n"));

/***/ })

});
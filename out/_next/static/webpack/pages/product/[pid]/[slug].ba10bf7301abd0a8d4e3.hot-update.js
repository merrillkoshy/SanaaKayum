webpackHotUpdate_N_E("pages/product/[pid]/[slug]",{

/***/ "./api/exports.js":
false,

/***/ "./components/header/HeaderMeta.js":
false,

/***/ "./helpers/LoadingScreen.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false,

/***/ "./node_modules/rc-tree/lib/Indent.js":
false,

/***/ "./node_modules/rc-tree/lib/MotionTreeNode.js":
false,

/***/ "./node_modules/rc-tree/lib/NodeList.js":
false,

/***/ "./node_modules/rc-tree/lib/TreeNode.js":
false,

/***/ "./node_modules/rc-tree/lib/contextTypes.js":
false,

/***/ "./node_modules/rc-tree/lib/util.js":
false,

/***/ "./node_modules/rc-tree/lib/utils/diffUtil.js":
false,

/***/ "./node_modules/rc-tree/lib/utils/treeUtil.js":
false,

/***/ "./node_modules/rc-util/lib/Children/toArray.js":
false,

/***/ "./node_modules/react-breadcrumbs-dynamic/dist/src/index.js":
false,

/***/ "./node_modules/react-fast-compare/index.js":
false,

/***/ "./node_modules/react-helmet/es/Helmet.js":
false,

/***/ "./node_modules/react-helmet/node_modules/react-side-effect/lib/index.js":
false,

/***/ "./node_modules/react-through/lib/Dummy.js":
false,

/***/ "./node_modules/react-through/lib/Item.js":
false,

/***/ "./node_modules/react-through/lib/Through.js":
false,

/***/ "./node_modules/react-through/lib/ThroughProvider.js":
false,

/***/ "./node_modules/react-through/lib/createAdvAgent.js":
false,

/***/ "./node_modules/react-through/lib/createAgent.js":
false,

/***/ "./node_modules/react-through/lib/hasComplex.js":
false,

/***/ "./node_modules/react-through/lib/hasDiff.js":
false,

/***/ "./node_modules/react-through/lib/index.js":
false,

/***/ "./node_modules/react-through/lib/propsFromProp.js":
false,

/***/ "./node_modules/react-through/lib/throughAgent.js":
false,

/***/ "./node_modules/react-through/lib/throughAgentFactory.js":
false,

/***/ "./node_modules/react-through/lib/throughArea.js":
false,

/***/ "./node_modules/react-through/lib/throughContainer.js":
false,

/***/ "./node_modules/react-through/lib/throughDirect.js":
false,

/***/ "./node_modules/react-through/lib/throughInterface.js":
false,

/***/ "./pages/404.js":
false,

/***/ "./pages/product/[pid]/[slug].js":
/*!***************************************!*\
  !*** ./pages/product/[pid]/[slug].js ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/LayoutOne */ \"./layouts/LayoutOne.js\");\n/* harmony import */ var _wrappers_product_RelatedProductSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../wrappers/product/RelatedProductSlider */ \"./wrappers/product/RelatedProductSlider.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wrappers_product_ProductImageDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../wrappers/product/ProductImageDescription */ \"./wrappers/product/ProductImageDescription.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/main.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/skca/work/NextJS-ecommerce/pages/product/[pid]/[slug].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar slugify = __webpack_require__(/*! @sindresorhus/slugify */ \"./node_modules/@sindresorhus/slugify/index.js\");\n\nvar Product = function Product(_ref) {\n  _s();\n\n  var staticProduct = _ref.staticProduct;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  var pid = router.query.pid;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, staticProduct ? __jsx(_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    article: staticProduct.article,\n    title: staticProduct.description,\n    description: staticProduct.description,\n    image: \"https:\".concat(staticProduct.images[0].fields.file.url),\n    keywords: \"\".concat(staticProduct.tags, \", Sana'a Kayum, Dubai, Fashion, \") + \"\".concat(staticProduct.article, \", \") + \"\".concat(staticProduct.description),\n    url: \"\".concat(\"\", \"/product/\").concat(staticProduct.serialNumber, \"/\").concat(slugify(staticProduct.description)),\n    color: staticProduct.color,\n    headerTop: \"visible\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(_wrappers_product_ProductImageDescription__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    spaceTopClass: react_device_detect__WEBPACK_IMPORTED_MODULE_6__[\"isMobile\"] ? \"pt-10\" : \"pt-100\",\n    spaceBottomClass: react_device_detect__WEBPACK_IMPORTED_MODULE_6__[\"isMobile\"] ? \"pb-10\" : \"pb-100\",\n    product: staticProduct,\n    galleryType: \"leftThumb\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }), __jsx(_wrappers_product_RelatedProductSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    spaceBottomClass: react_device_detect__WEBPACK_IMPORTED_MODULE_6__[\"isMobile\"] ? \"pt-10\" : \"\",\n    category: staticProduct.article,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  })) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(Product, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"]];\n});\n\n_c = Product;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcGlkXS9bc2x1Z10uanM/MGVhYSJdLCJuYW1lcyI6WyJzbHVnaWZ5IiwicmVxdWlyZSIsIlByb2R1Y3QiLCJzdGF0aWNQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicGlkIiwicXVlcnkiLCJhcnRpY2xlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJmaWVsZHMiLCJmaWxlIiwidXJsIiwidGFncyIsInByb2Nlc3MiLCJzZXJpYWxOdW1iZXIiLCJjb2xvciIsImlzTW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsNEVBQUQsQ0FBdkI7O0FBcUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUNyQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHFDLE1BRTdCQyxHQUY2QixHQUVyQkYsTUFBTSxDQUFDRyxLQUZjLENBRTdCRCxHQUY2QjtBQUlyQyxTQUNFLG1FQUNHSCxhQUFhLEdBQ1osTUFBQywwREFBRDtBQUNFLFdBQU8sRUFBRUEsYUFBYSxDQUFDSyxPQUR6QjtBQUVFLFNBQUssRUFBRUwsYUFBYSxDQUFDTSxXQUZ2QjtBQUdFLGVBQVcsRUFBRU4sYUFBYSxDQUFDTSxXQUg3QjtBQUlFLFNBQUssa0JBQVdOLGFBQWEsQ0FBQ08sTUFBZCxDQUFxQixDQUFyQixFQUF3QkMsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DQyxHQUEvQyxDQUpQO0FBS0UsWUFBUSxFQUNOLFVBQUdWLGFBQWEsQ0FBQ1csSUFBakIsa0RBQ0dYLGFBQWEsQ0FBQ0ssT0FEakIsb0JBRUdMLGFBQWEsQ0FBQ00sV0FGakIsQ0FOSjtBQVVFLE9BQUcsWUFBS00sRUFBTCxzQkFDRFosYUFBYSxDQUFDYSxZQURiLGNBRUNoQixPQUFPLENBQUNHLGFBQWEsQ0FBQ00sV0FBZixDQUZSLENBVkw7QUFhRSxTQUFLLEVBQUVOLGFBQWEsQ0FBQ2MsS0FidkI7QUFjRSxhQUFTLEVBQUMsU0FkWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZ0JFLE1BQUMsaUZBQUQ7QUFDRSxpQkFBYSxFQUFFQyw0REFBUSxHQUFHLE9BQUgsR0FBYSxRQUR0QztBQUVFLG9CQUFnQixFQUFFQSw0REFBUSxHQUFHLE9BQUgsR0FBYSxRQUZ6QztBQUdFLFdBQU8sRUFBRWYsYUFIWDtBQUlFLGVBQVcsRUFBRSxXQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsRUF1QkUsTUFBQyw4RUFBRDtBQUNFLG9CQUFnQixFQUFFZSw0REFBUSxHQUFHLE9BQUgsR0FBYSxFQUR6QztBQUVFLFlBQVEsRUFBRWYsYUFBYSxDQUFDSyxPQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJGLENBRFksR0E4QlosTUFBQyw2REFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JKLENBREY7QUFvQ0QsQ0F4Q0Q7O0dBQU1OLE87VUFDV0cscUQ7OztLQURYSCxPOztBQTBDU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twaWRdL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBMYXlvdXRPbmUgZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvTGF5b3V0T25lXCI7XG5cbmltcG9ydCBSZWxhdGVkUHJvZHVjdFNsaWRlciBmcm9tIFwiLi4vLi4vLi4vd3JhcHBlcnMvcHJvZHVjdC9SZWxhdGVkUHJvZHVjdFNsaWRlclwiO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG5cbmltcG9ydCBQcm9kdWN0SW1hZ2VEZXNjcmlwdGlvbiBmcm9tIFwiLi4vLi4vLi4vd3JhcHBlcnMvcHJvZHVjdC9Qcm9kdWN0SW1hZ2VEZXNjcmlwdGlvblwiO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuXG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvZXhwb3J0c1wiO1xuXG5jb25zdCBzbHVnaWZ5ID0gcmVxdWlyZShcIkBzaW5kcmVzb3JodXMvc2x1Z2lmeVwiKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBnZXRQcm9kdWN0cygpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlcy5tYXAocCA9PiB7XG4gICAgcmV0dXJuIHAuZmllbGRzO1xuICB9KTtcblxuICBjb25zdCBwYXRocyA9IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBwaWQ6IHByb2R1Y3Quc2VyaWFsTnVtYmVyLFxuICAgICAgc2x1Zzogc2x1Z2lmeShwcm9kdWN0LmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH07XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCByZXMgPSBhd2FpdCBnZXRQcm9kdWN0cygpO1xuICBjb25zdCBzdGF0aWNQcm9kdWN0cyA9IGF3YWl0IHJlcy5tYXAocCA9PiB7XG4gICAgcmV0dXJuIHAuZmllbGRzO1xuICB9KTtcbiAgY29uc3Qgc3RhdGljUHJvZHVjdCA9IGF3YWl0IHN0YXRpY1Byb2R1Y3RzLmZpbHRlcihmaWVsZCA9PiB7XG4gICAgaWYgKGZpZWxkLnNlcmlhbE51bWJlciA9PT0gcGFyYW1zLnBpZCkgcmV0dXJuIGZpZWxkO1xuICB9KVswXTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzdGF0aWNQcm9kdWN0XG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxXG4gIH07XG59XG5cbmNvbnN0IFByb2R1Y3QgPSAoeyBzdGF0aWNQcm9kdWN0IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3N0YXRpY1Byb2R1Y3QgPyAoXG4gICAgICAgIDxMYXlvdXRPbmVcbiAgICAgICAgICBhcnRpY2xlPXtzdGF0aWNQcm9kdWN0LmFydGljbGV9XG4gICAgICAgICAgdGl0bGU9e3N0YXRpY1Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgZGVzY3JpcHRpb249e3N0YXRpY1Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgaW1hZ2U9e2BodHRwczoke3N0YXRpY1Byb2R1Y3QuaW1hZ2VzWzBdLmZpZWxkcy5maWxlLnVybH1gfVxuICAgICAgICAgIGtleXdvcmRzPXtcbiAgICAgICAgICAgIGAke3N0YXRpY1Byb2R1Y3QudGFnc30sIFNhbmFcXCdhIEtheXVtLCBEdWJhaSwgRmFzaGlvbiwgYCArXG4gICAgICAgICAgICBgJHtzdGF0aWNQcm9kdWN0LmFydGljbGV9LCBgICtcbiAgICAgICAgICAgIGAke3N0YXRpY1Byb2R1Y3QuZGVzY3JpcHRpb259YFxuICAgICAgICAgIH1cbiAgICAgICAgICB1cmw9e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BVQkxJQ19VUkx9L3Byb2R1Y3QvJHtcbiAgICAgICAgICAgIHN0YXRpY1Byb2R1Y3Quc2VyaWFsTnVtYmVyXG4gICAgICAgICAgfS8ke3NsdWdpZnkoc3RhdGljUHJvZHVjdC5kZXNjcmlwdGlvbil9YH1cbiAgICAgICAgICBjb2xvcj17c3RhdGljUHJvZHVjdC5jb2xvcn1cbiAgICAgICAgICBoZWFkZXJUb3A9XCJ2aXNpYmxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxQcm9kdWN0SW1hZ2VEZXNjcmlwdGlvblxuICAgICAgICAgICAgc3BhY2VUb3BDbGFzcz17aXNNb2JpbGUgPyBcInB0LTEwXCIgOiBcInB0LTEwMFwifVxuICAgICAgICAgICAgc3BhY2VCb3R0b21DbGFzcz17aXNNb2JpbGUgPyBcInBiLTEwXCIgOiBcInBiLTEwMFwifVxuICAgICAgICAgICAgcHJvZHVjdD17c3RhdGljUHJvZHVjdH1cbiAgICAgICAgICAgIGdhbGxlcnlUeXBlPXtcImxlZnRUaHVtYlwifVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8UmVsYXRlZFByb2R1Y3RTbGlkZXJcbiAgICAgICAgICAgIHNwYWNlQm90dG9tQ2xhc3M9e2lzTW9iaWxlID8gXCJwdC0xMFwiIDogXCJcIn1cbiAgICAgICAgICAgIGNhdGVnb3J5PXtzdGF0aWNQcm9kdWN0LmFydGljbGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXlvdXRPbmU+XG4gICAgICApIDogKFxuICAgICAgICA8U2tlbGV0b24gY291bnQ9ezV9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[pid]/[slug].js\n");

/***/ }),

/***/ "./wrappers/breadcrumb/Breadcrumb.js":
false

})
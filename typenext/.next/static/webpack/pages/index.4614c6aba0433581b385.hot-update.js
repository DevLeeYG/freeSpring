self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/palette */ "./styles/palette.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\WorkSpace\\typenext\\components\\TodoList.tsx",
    _this = undefined;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "TodoList__Container",
  componentId: "sc-1t8agvw-0"
})(["width:100%;.todo-list-header{padding:12px;border-bottom :1px solid ", ";.todo-list-last-todo{font-size:14px;span{margin-left :8px;}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray);
_c = Container;

var TodoList = function TodoList(_ref) {
  var todos = _ref.todos;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [todos.length, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_c2 = TodoList;
/* harmony default export */ __webpack_exports__["default"] = (TodoList);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "TodoList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\WorkSpace\\typenext\\pages\\index.tsx",
    _this = undefined;



var todos = [{
  id: 1,
  text: "마트 가서 장보기",
  color: "red",
  checked: false
}, {
  id: 2,
  text: "수학 숙제하기",
  color: "orange",
  checked: false
}, {
  id: 3,
  text: "코딩하기",
  color: "yellow",
  checked: false
}, {
  id: 4,
  text: "넥스트 공부하기",
  color: "green",
  checked: false
}, {
  id: 5,
  text: "요리 연습하기",
  color: "blue",
  checked: false
}, {
  id: 6,
  text: "분리수거 하기",
  color: "navy",
  checked: false
}];
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1orlsb6-0"
})(["padding:20px;"]);

var index = function index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__.default, {
    todos: todos
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* harmony default export */ __webpack_exports__["default"] = ({
  red: "#FFAFB0",
  orange: "#FFC282",
  yellow: "#FCFFB0",
  green: "#E2FFAF",
  blue: "#AEE4FF",
  navy: "#B5C7ED",
  gray: "#E5E5E5",
  deep_red: "#F35456",
  deep_green: "#47E774"
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3BhbGV0dGUudHMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJsZW5ndGgiLCJpZCIsInRleHQiLCJjb2xvciIsImNoZWNrZWQiLCJpbmRleCIsInJlZCIsIm9yYW5nZSIsInllbGxvdyIsImdyZWVuIiwiYmx1ZSIsIm5hdnkiLCJncmF5IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw4SUFJcUJDLHlEQUpyQixDQUFmO0tBQU1GLFM7O0FBZU4sSUFBTUcsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBYTtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUMzQyxzQkFDSSw4REFBQyxTQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQSxxREFDVztBQUFBLHFCQUFPQSxLQUFLLENBQUNDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQVZEOztNQUFNRixRO0FBWU4sK0RBQWVBLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFHQSxJQUFNQyxLQUFpQixHQUFHLENBQ3RCO0FBQUNFLElBQUUsRUFBQyxDQUFKO0FBQU1DLE1BQUksRUFBQyxXQUFYO0FBQXdCQyxPQUFLLEVBQUUsS0FBL0I7QUFBc0NDLFNBQU8sRUFBQztBQUE5QyxDQURzQixFQUV0QjtBQUFDSCxJQUFFLEVBQUMsQ0FBSjtBQUFNQyxNQUFJLEVBQUMsU0FBWDtBQUFzQkMsT0FBSyxFQUFFLFFBQTdCO0FBQXVDQyxTQUFPLEVBQUM7QUFBL0MsQ0FGc0IsRUFHdEI7QUFBQ0gsSUFBRSxFQUFDLENBQUo7QUFBTUMsTUFBSSxFQUFDLE1BQVg7QUFBbUJDLE9BQUssRUFBRSxRQUExQjtBQUFvQ0MsU0FBTyxFQUFDO0FBQTVDLENBSHNCLEVBSXRCO0FBQUNILElBQUUsRUFBQyxDQUFKO0FBQU1DLE1BQUksRUFBQyxVQUFYO0FBQXVCQyxPQUFLLEVBQUUsT0FBOUI7QUFBdUNDLFNBQU8sRUFBQztBQUEvQyxDQUpzQixFQUt0QjtBQUFDSCxJQUFFLEVBQUMsQ0FBSjtBQUFNQyxNQUFJLEVBQUMsU0FBWDtBQUFzQkMsT0FBSyxFQUFFLE1BQTdCO0FBQXFDQyxTQUFPLEVBQUM7QUFBN0MsQ0FMc0IsRUFNdEI7QUFBQ0gsSUFBRSxFQUFDLENBQUo7QUFBTUMsTUFBSSxFQUFDLFNBQVg7QUFBc0JDLE9BQUssRUFBRSxNQUE3QjtBQUFxQ0MsU0FBTyxFQUFDO0FBQTdDLENBTnNCLENBQTFCO0FBU0EsSUFBTVQsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxQkFBZjs7QUFJQSxJQUFNUyxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLEdBQU07QUFFMUIsc0JBQU8sOERBQUMseURBQUQ7QUFBVSxTQUFLLEVBQUVOO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdILENBTEQ7O0FBT0EsK0RBQWVNLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSwrREFBZTtBQUNYQyxLQUFHLEVBQUMsU0FETztBQUVYQyxRQUFNLEVBQUMsU0FGSTtBQUdYQyxRQUFNLEVBQUMsU0FISTtBQUlYQyxPQUFLLEVBQUMsU0FKSztBQUtYQyxNQUFJLEVBQUMsU0FMTTtBQU1YQyxNQUFJLEVBQUMsU0FOTTtBQU9YQyxNQUFJLEVBQUMsU0FQTTtBQVFYQyxVQUFRLEVBQUMsU0FSRTtBQVNYQyxZQUFVLEVBQUM7QUFUQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2MTRjNmFiYTA0MzM1ODFiMzg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b2RvczpUb2RvVHlwZVtdXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAudG9kby1saXN0LWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRvZG8tbGlzdC1sYXN0LXRvZG97XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBgXHJcblxyXG5jb25zdCBUb2RvTGlzdDpSZWFjdC5GQzxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cclxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1RvZG9MaXN0XCI7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3RvZG9cIjtcclxuXHJcbmNvbnN0IHRvZG9zOiBUb2RvVHlwZVtdID0gW1xyXG4gICAge2lkOjEsdGV4dDpcIuuniO2KuCDqsIDshJwg7J6l67O06riwXCIgLGNvbG9yOiBcInJlZFwiLCBjaGVja2VkOmZhbHNlfSxcclxuICAgIHtpZDoyLHRleHQ6XCLsiJjtlZkg7IiZ7KCc7ZWY6riwXCIgLGNvbG9yOiBcIm9yYW5nZVwiLCBjaGVja2VkOmZhbHNlfSxcclxuICAgIHtpZDozLHRleHQ6XCLsvZTrlKntlZjquLBcIiAsY29sb3I6IFwieWVsbG93XCIsIGNoZWNrZWQ6ZmFsc2V9LFxyXG4gICAge2lkOjQsdGV4dDpcIuuEpeyKpO2KuCDqs7XrtoDtlZjquLBcIiAsY29sb3I6IFwiZ3JlZW5cIiwgY2hlY2tlZDpmYWxzZX0sXHJcbiAgICB7aWQ6NSx0ZXh0Olwi7JqU66asIOyXsOyKte2VmOq4sFwiICxjb2xvcjogXCJibHVlXCIsIGNoZWNrZWQ6ZmFsc2V9LFxyXG4gICAge2lkOjYsdGV4dDpcIuu2hOumrOyImOqxsCDtlZjquLBcIiAsY29sb3I6IFwibmF2eVwiLCBjaGVja2VkOmZhbHNlfVxyXG5dXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IGluZGV4IDpOZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9Lz5cclxuXHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICByZWQ6XCIjRkZBRkIwXCIsXHJcbiAgICBvcmFuZ2U6XCIjRkZDMjgyXCIsXHJcbiAgICB5ZWxsb3c6XCIjRkNGRkIwXCIsXHJcbiAgICBncmVlbjpcIiNFMkZGQUZcIixcclxuICAgIGJsdWU6XCIjQUVFNEZGXCIsXHJcbiAgICBuYXZ5OlwiI0I1QzdFRFwiLFxyXG4gICAgZ3JheTpcIiNFNUU1RTVcIixcclxuICAgIGRlZXBfcmVkOlwiI0YzNTQ1NlwiLFxyXG4gICAgZGVlcF9ncmVlbjpcIiM0N0U3NzRcIixcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
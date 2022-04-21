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

var getTodoColorNums = function getTodoColorNums() {
  var red = 0;
  var orange = 0;
  var yellow = 0;
  var green = 0;
  var blue = 0;
  var navy = 0;
  todos.forEach(function (todo) {
    switch (todo.color) {
      case "red":
        red += 1;
        break;

      case "orange":
        orange += 1;
        break;

      case "yellow":
        yellow += 1;
        break;

      case "green":
        green += 1;
        break;

      case "blue":
        blue += 1;
        break;

      case "navy":
        navy += 1;
        break;

      default:
        break;
    }
  });
};

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
          lineNumber: 70,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsImdldFRvZG9Db2xvck51bXMiLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwidG9kb3MiLCJmb3JFYWNoIiwidG9kbyIsImNvbG9yIiwiVG9kb0xpc3QiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUlxQkMseURBSnJCLENBQWY7S0FBTUYsUzs7QUFlTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUs7QUFDMUIsTUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxNQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLE1BQUlDLElBQUksR0FBRyxDQUFYO0FBRUFDLE9BQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBUTtBQUVsQixZQUFPQSxJQUFJLENBQUNDLEtBQVo7QUFDSSxXQUFLLEtBQUw7QUFDSVQsV0FBRyxJQUFJLENBQVA7QUFDQTs7QUFDSixXQUFLLFFBQUw7QUFDSUMsY0FBTSxJQUFJLENBQVY7QUFDQTs7QUFDSixXQUFLLFFBQUw7QUFDSUMsY0FBTSxJQUFHLENBQVQ7QUFDQTs7QUFDSixXQUFLLE9BQUw7QUFDSUMsYUFBSyxJQUFJLENBQVQ7QUFDQTs7QUFDSixXQUFLLE1BQUw7QUFDSUMsWUFBSSxJQUFHLENBQVA7QUFDQTs7QUFDSixXQUFLLE1BQUw7QUFDSUMsWUFBSSxJQUFHLENBQVA7QUFDQTs7QUFDQTtBQUNJO0FBcEJaO0FBd0JILEdBMUJEO0FBNEJILENBcENEOztBQXVDQSxJQUFNSyxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixPQUFhO0FBQUEsTUFBWEosS0FBVyxRQUFYQSxLQUFXO0FBQzNDLHNCQUNJLDhEQUFDLFNBQUQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFBLHFEQUNXO0FBQUEscUJBQU9BLEtBQUssQ0FBQ0ssTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBVkQ7O01BQU1ELFE7QUFZTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMDBlOGE4NTJlNmFhYWVhYWIzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL3N0eWxlcy9wYWxldHRlJztcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tICcuLi90eXBlcy90b2RvJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgdG9kb3M6VG9kb1R5cGVbXVxyXG59XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgLnRvZG8tbGlzdC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC50b2RvLWxpc3QtbGFzdC10b2Rve1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYFxyXG5cclxuY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9ICgpID0+e1xyXG4gICAgbGV0IHJlZCA9IDA7XHJcbiAgICBsZXQgb3JhbmdlID0gMDtcclxuICAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gICAgbGV0IGdyZWVuID0gMDtcclxuICAgIGxldCBibHVlID0gMDtcclxuICAgIGxldCBuYXZ5ID0gMDtcclxuXHJcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+e1xyXG5cclxuICAgICAgICBzd2l0Y2godG9kby5jb2xvcil7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcclxuICAgICAgICAgICAgICAgIHJlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcIm9yYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICB5ZWxsb3cgKz0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcImJsdWVcIjpcclxuICAgICAgICAgICAgICAgIGJsdWUgKz0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XHJcbiAgICAgICAgICAgICAgICBuYXZ5ICs9MTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBUb2RvTGlzdDpSZWFjdC5GQzxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cclxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9
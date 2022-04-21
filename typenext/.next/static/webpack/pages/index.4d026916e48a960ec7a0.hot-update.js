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
    return {
      red: red,
      orange: orange,
      yellow: yellow,
      green: green,
      blue: blue,
      navy: navy
    };
  };

  var todoColorNums = getTodoColorNums();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [todos.length, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwicmVkIiwib3JhbmdlIiwieWVsbG93IiwiZ3JlZW4iLCJibHVlIiwibmF2eSIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw4SUFJcUJDLHlEQUpyQixDQUFmO0tBQU1GLFM7O0FBa0JOLElBQU1HLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWE7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQzNDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBSztBQUMxQixRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFFBQUlDLElBQUksR0FBRyxDQUFYO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQVg7QUFFQVAsU0FBSyxDQUFDUSxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFRO0FBRWxCLGNBQU9BLElBQUksQ0FBQ0MsS0FBWjtBQUNJLGFBQUssS0FBTDtBQUNJUixhQUFHLElBQUksQ0FBUDtBQUNBOztBQUNKLGFBQUssUUFBTDtBQUNJQyxnQkFBTSxJQUFJLENBQVY7QUFDQTs7QUFDSixhQUFLLFFBQUw7QUFDSUMsZ0JBQU0sSUFBRyxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxPQUFMO0FBQ0lDLGVBQUssSUFBSSxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxNQUFMO0FBQ0lDLGNBQUksSUFBRyxDQUFQO0FBQ0E7O0FBQ0osYUFBSyxNQUFMO0FBQ0lDLGNBQUksSUFBRyxDQUFQO0FBQ0E7O0FBQ0E7QUFDSTtBQXBCWjtBQXdCSCxLQTFCRDtBQTJCQSxXQUFPO0FBQ0hMLFNBQUcsRUFBSEEsR0FERztBQUVIQyxZQUFNLEVBQU5BLE1BRkc7QUFHSEMsWUFBTSxFQUFOQSxNQUhHO0FBSUhDLFdBQUssRUFBTEEsS0FKRztBQUtIQyxVQUFJLEVBQUpBLElBTEc7QUFNSEMsVUFBSSxFQUFKQTtBQU5HLEtBQVA7QUFTSCxHQTVDRDs7QUE4Q0QsTUFBTUksYUFBYSxHQUFHVixnQkFBZ0IsRUFBdEM7QUFDQyxzQkFDSSw4REFBQyxTQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQSxxREFDVztBQUFBLHFCQUFPRCxLQUFLLENBQUNZLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQXpERDs7TUFBTWIsUTtBQTJETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZDAyNjkxNmU0OGE5NjBlYzdhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VNZW1vLHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9zdHlsZXMvcGFsZXR0ZSc7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vdHlwZXMvdG9kbyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHRvZG9zOlRvZG9UeXBlW11cclxufVxyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIC50b2RvLWxpc3QtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICBcclxuICAgICAgICAudG9kby1saXN0LWxhc3QtdG9kb3tcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFRvZG9MaXN0OlJlYWN0LkZDPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9ICgpID0+e1xyXG4gICAgICAgIGxldCByZWQgPSAwO1xyXG4gICAgICAgIGxldCBvcmFuZ2UgPSAwO1xyXG4gICAgICAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gICAgICAgIGxldCBncmVlbiA9IDA7XHJcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xyXG4gICAgICAgIGxldCBuYXZ5ID0gMDtcclxuICAgIFxyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pPT57XHJcbiAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRvZG8uY29sb3Ipe1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB5ZWxsb3cgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsdWUgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hdnlcIjpcclxuICAgICAgICAgICAgICAgICAgICBuYXZ5ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkLFxyXG4gICAgICAgICAgICBvcmFuZ2UsXHJcbiAgICAgICAgICAgIHllbGxvdyxcclxuICAgICAgICAgICAgZ3JlZW4sXHJcbiAgICAgICAgICAgIGJsdWUsXHJcbiAgICAgICAgICAgIG5hdnlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgIGNvbnN0IHRvZG9Db2xvck51bXMgPSBnZXRUb2RvQ29sb3JOdW1zKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cclxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9
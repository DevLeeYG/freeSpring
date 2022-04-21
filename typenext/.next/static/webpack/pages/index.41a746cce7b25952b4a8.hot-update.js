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
    _this = undefined,
    _s = $RefreshSig$();




var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "TodoList__Container",
  componentId: "sc-1t8agvw-0"
})(["width:100%;.todo-list-header{padding:12px;border-bottom :1px solid ", ";.todo-list-last-todo{font-size:14px;span{margin-left :8px;}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray);
_c = Container;

var TodoList = function TodoList(_ref) {
  _s();

  var todos = _ref.todos;
  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
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
  }, [todos]);
  var colors = {};
  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(getTodoColorNums, [todos]);
  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var colors = {};
    todos.forEach(function (todo) {
      var value = colors[todo.color];

      if (!value) {
        /**존재하지않는 키라면
         * 
         */
        colors["".concat(todo.color)] = 1;
      } else {
        colors["".concat(todo.color)] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  console.log(todoColorNums2);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [todos.length, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 9
  }, _this);
};

_s(TodoList, "iqnEAzGAatX6Zg4mYTxeWiVv+fc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsImNvbG9ycyIsInRvZG9Db2xvck51bXMiLCJ1c2VNZW1vIiwidG9kb0NvbG9yTnVtczIiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0EsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw4SUFJcUJDLHlEQUpyQixDQUFmO0tBQU1GLFM7O0FBa0JOLElBQU1HLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFNM0MsTUFBTUMsZ0JBQWdCLEdBQUdDLGtEQUFXLENBQUMsWUFBSztBQUN0QyxRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFFBQUlDLElBQUksR0FBRyxDQUFYO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQVg7QUFFQVIsU0FBSyxDQUFDUyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFRO0FBRWxCLGNBQU9BLElBQUksQ0FBQ0MsS0FBWjtBQUNJLGFBQUssS0FBTDtBQUNJUixhQUFHLElBQUksQ0FBUDtBQUNBOztBQUNKLGFBQUssUUFBTDtBQUNJQyxnQkFBTSxJQUFJLENBQVY7QUFDQTs7QUFDSixhQUFLLFFBQUw7QUFDSUMsZ0JBQU0sSUFBRyxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxPQUFMO0FBQ0lDLGVBQUssSUFBSSxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxNQUFMO0FBQ0lDLGNBQUksSUFBRyxDQUFQO0FBQ0E7O0FBQ0osYUFBSyxNQUFMO0FBQ0lDLGNBQUksSUFBRyxDQUFQO0FBQ0E7O0FBQ0E7QUFDSTtBQXBCWjtBQXdCSCxLQTFCRDtBQTJCQSxXQUFPO0FBQ0hMLFNBQUcsRUFBSEEsR0FERztBQUVIQyxZQUFNLEVBQU5BLE1BRkc7QUFHSEMsWUFBTSxFQUFOQSxNQUhHO0FBSUhDLFdBQUssRUFBTEEsS0FKRztBQUtIQyxVQUFJLEVBQUpBLElBTEc7QUFNSEMsVUFBSSxFQUFKQTtBQU5HLEtBQVA7QUFTSCxHQTVDbUMsRUE0Q2xDLENBQUNSLEtBQUQsQ0E1Q2tDLENBQXBDO0FBNkNBLE1BQU1ZLE1BQXdCLEdBQUcsRUFBakM7QUFHRCxNQUFNQyxhQUFhLEdBQUdDLDhDQUFPLENBQUNiLGdCQUFELEVBQWtCLENBQUNELEtBQUQsQ0FBbEIsQ0FBN0I7QUFFQyxNQUFNZSxjQUFjLEdBQUdELDhDQUFPLENBQUMsWUFBSTtBQUMvQixRQUFNRixNQUF3QixHQUFHLEVBQWpDO0FBQ0FaLFNBQUssQ0FBQ1MsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBUTtBQUNuQixVQUFNTSxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDQyxLQUFOLENBQXBCOztBQUNDLFVBQUcsQ0FBQ0ssS0FBSixFQUFVO0FBQ047QUFDaEI7QUFDQTtBQUNnQkosY0FBTSxXQUFJRixJQUFJLENBQUNDLEtBQVQsRUFBTixHQUEwQixDQUExQjtBQUNILE9BTEQsTUFLSztBQUNEQyxjQUFNLFdBQUlGLElBQUksQ0FBQ0MsS0FBVCxFQUFOLEdBQTBCSyxLQUFLLEdBQUcsQ0FBbEM7QUFDSDtBQUdKLEtBWkQ7QUFhQSxXQUFPSixNQUFQO0FBRUgsR0FqQjZCLEVBaUI1QixDQUFDWixLQUFELENBakI0QixDQUE5QjtBQW1CQWlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxjQUFaO0FBR0Esc0JBQ0ksOERBQUMsU0FBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUEscURBQ1c7QUFBQSxxQkFBT2YsS0FBSyxDQUFDbUIsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBdkZEOztHQUFNcEIsUTs7TUFBQUEsUTtBQXlGTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MWE3NDZjY2U3YjI1OTUyYjRhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VNZW1vLHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9zdHlsZXMvcGFsZXR0ZSc7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vdHlwZXMvdG9kbyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHRvZG9zOlRvZG9UeXBlW11cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAudG9kby1saXN0LWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRvZG8tbGlzdC1sYXN0LXRvZG97XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBgXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBUb2RvTGlzdDpSZWFjdC5GQzxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcclxuXHJcbiAgICB0eXBlIE9iamVjdEluZGV4VHlwZSA9IHtcclxuICAgICAgICBba2V5OnN0cmluZ106bnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBsZXQgcmVkID0gMDtcclxuICAgICAgICBsZXQgb3JhbmdlID0gMDtcclxuICAgICAgICBsZXQgeWVsbG93ID0gMDtcclxuICAgICAgICBsZXQgZ3JlZW4gPSAwO1xyXG4gICAgICAgIGxldCBibHVlID0gMDtcclxuICAgICAgICBsZXQgbmF2eSA9IDA7XHJcbiAgICBcclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCh0b2RvLmNvbG9yKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9yYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yYW5nZSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgeWVsbG93ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JlZW4gKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICBibHVlICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2eSArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZCxcclxuICAgICAgICAgICAgb3JhbmdlLFxyXG4gICAgICAgICAgICB5ZWxsb3csXHJcbiAgICAgICAgICAgIGdyZWVuLFxyXG4gICAgICAgICAgICBibHVlLFxyXG4gICAgICAgICAgICBuYXZ5XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt0b2Rvc10pXHJcbiAgICBjb25zdCBjb2xvcnMgOiBPYmplY3RJbmRleFR5cGUgPSB7fVxyXG4gIFxyXG5cclxuICAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcyxbdG9kb3NdKTtcclxuXHJcbiAgICBjb25zdCB0b2RvQ29sb3JOdW1zMiA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCBjb2xvcnMgOiBPYmplY3RJbmRleFR5cGUgPSB7fVxyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pPT57XHJcbiAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XHJcbiAgICAgICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAvKirsobTsnqztlZjsp4DslYrripQg7YKk652866m0XHJcbiAgICAgICAgICAgICAgICAgKiBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb2xvcnM7XHJcbiAgICAgIFxyXG4gICAgfSxbdG9kb3NdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRvZG9Db2xvck51bXMyKVxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cclxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9
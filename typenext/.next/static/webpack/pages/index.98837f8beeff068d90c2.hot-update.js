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
})(["width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid ", ";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:", ";}.bg-green{background-color:", ";}.bg-navy{background-color:", ";}.bg-orange{background-color:", ";}.bg-red{background-color:", ";}.bg-yellow{background-color:", ";}palette .todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid ", ";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:", ";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:", ";}}.todo-check-mark{fill:", ";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid ", ";background-color:transparent;outline:none;}}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray);
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
  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [todos.length, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header-colors",
      children: Object.keys(todoColorNums).map(function (color, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "todo-list-header-color-num",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "todo-list-header-round-color bg-".concat(color)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [todoColorNums[color], "\uAC1C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 9
  }, _this);
};

_s(TodoList, "lbu9IE0+D5iX+9TYNfAYXp8wH1M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJ1c2VNZW1vIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0EsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx5d0NBVWdCQyx5REFWaEIsRUF3Q1NBLHlEQXhDVCxFQTJDU0EsMERBM0NULEVBOENTQSx5REE5Q1QsRUFpRFNBLDJEQWpEVCxFQW9EU0Esd0RBcERULEVBdURTQSwyREF2RFQsRUFnRWtCQSx5REFoRWxCLEVBNEVJQSx5REE1RUosRUFnR0tBLDZEQWhHTCxFQW9HR0EsK0RBcEdILEVBMEdlQSx5REExR2YsQ0FBZjtLQUFNRixTOztBQXFITixJQUFNRyxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixPQUFhO0FBQUE7O0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBTTNDLE1BQU1DLGdCQUFnQixHQUFHQyxrREFBVyxDQUFDLFlBQUs7QUFDdEMsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLFFBQUlDLElBQUksR0FBRyxDQUFYO0FBRUFSLFNBQUssQ0FBQ1MsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBUTtBQUVsQixjQUFPQSxJQUFJLENBQUNDLEtBQVo7QUFDSSxhQUFLLEtBQUw7QUFDSVIsYUFBRyxJQUFJLENBQVA7QUFDQTs7QUFDSixhQUFLLFFBQUw7QUFDSUMsZ0JBQU0sSUFBSSxDQUFWO0FBQ0E7O0FBQ0osYUFBSyxRQUFMO0FBQ0lDLGdCQUFNLElBQUcsQ0FBVDtBQUNBOztBQUNKLGFBQUssT0FBTDtBQUNJQyxlQUFLLElBQUksQ0FBVDtBQUNBOztBQUNKLGFBQUssTUFBTDtBQUNJQyxjQUFJLElBQUcsQ0FBUDtBQUNBOztBQUNKLGFBQUssTUFBTDtBQUNJQyxjQUFJLElBQUcsQ0FBUDtBQUNBOztBQUNBO0FBQ0k7QUFwQlo7QUF3QkgsS0ExQkQ7QUEyQkEsV0FBTztBQUNITCxTQUFHLEVBQUhBLEdBREc7QUFFSEMsWUFBTSxFQUFOQSxNQUZHO0FBR0hDLFlBQU0sRUFBTkEsTUFIRztBQUlIQyxXQUFLLEVBQUxBLEtBSkc7QUFLSEMsVUFBSSxFQUFKQSxJQUxHO0FBTUhDLFVBQUksRUFBSkE7QUFORyxLQUFQO0FBU0gsR0E1Q21DLEVBNENsQyxDQUFDUixLQUFELENBNUNrQyxDQUFwQztBQWtEQSxNQUFNWSxhQUFhLEdBQUdDLDhDQUFPLENBQUMsWUFBSTtBQUM5QixRQUFNQyxNQUF3QixHQUFHLEVBQWpDO0FBQ0FkLFNBQUssQ0FBQ1MsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBUTtBQUNuQixVQUFNSyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0osSUFBSSxDQUFDQyxLQUFOLENBQXBCOztBQUNDLFVBQUcsQ0FBQ0ksS0FBSixFQUFVO0FBQ047QUFDaEI7QUFDQTtBQUNnQkQsY0FBTSxXQUFJSixJQUFJLENBQUNDLEtBQVQsRUFBTixHQUEwQixDQUExQjtBQUNILE9BTEQsTUFLSztBQUNERyxjQUFNLFdBQUlKLElBQUksQ0FBQ0MsS0FBVCxFQUFOLEdBQTBCSSxLQUFLLEdBQUcsQ0FBbEM7QUFDSDtBQUdKLEtBWkQ7QUFhQSxXQUFPRCxNQUFQO0FBRUgsR0FqQjRCLEVBaUIzQixDQUFDZCxLQUFELENBakIyQixDQUE3QjtBQXFCQSxzQkFDSSw4REFBQyxTQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQSxxREFDVztBQUFBLHFCQUFPQSxLQUFLLENBQUNnQixNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLGdCQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sYUFBWixFQUEyQk8sR0FBM0IsQ0FBK0IsVUFBQ1IsS0FBRCxFQUFPUyxLQUFQO0FBQUEsNEJBQzVCO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsNENBQXFDVCxLQUFyQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLHVCQUFJQyxhQUFhLENBQUNELEtBQUQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsV0FBaURTLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDRCO0FBQUEsT0FBL0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0E5RkQ7O0dBQU1yQixROztNQUFBQSxRO0FBZ0dOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4ODM3ZjhiZWVmZjA2OGQ5MGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZU1lbW8sdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL3N0eWxlcy9wYWxldHRlJztcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tICcuLi90eXBlcy90b2RvJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgdG9kb3M6VG9kb1R5cGVbXVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC50b2RvLW51bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICB9XHJcblxyXG4gIC50b2RvLWxpc3QtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG5cclxuICAgIC50b2RvLWxpc3QtbGFzdC10b2RvIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciB7XHJcbiAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJnLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xyXG4gIH1cclxuICAuYmctZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyZWVufTtcclxuICB9XHJcbiAgLmJnLW5hdnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm5hdnl9O1xyXG4gIH1cclxuICAuYmctb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xyXG4gIH1cclxuICAuYmctcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5yZWR9O1xyXG4gIH1cclxuICAuYmcteWVsbG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS55ZWxsb3d9O1xyXG4gIH1wYWxldHRlXHJcbiAgLnRvZG8tbGlzdCB7XHJcbiAgICAudG9kby1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG5cclxuICAgICAgLnRvZG8tbGVmdC1zaWRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC50b2RvLWNvbG9yLWJsb2NrIHtcclxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2tlZC10b2RvLXRleHQge1xyXG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby10ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudG9kby1yaWdodC1zaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby10cmFzaC1jYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfcmVkfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tY2hlY2stbWFyayB7XHJcbiAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9ncmVlbn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbmNvbnN0IFRvZG9MaXN0OlJlYWN0LkZDPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xyXG5cclxuICAgIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gICAgICAgIFtrZXk6c3RyaW5nXTpudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGxldCByZWQgPSAwO1xyXG4gICAgICAgIGxldCBvcmFuZ2UgPSAwO1xyXG4gICAgICAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gICAgICAgIGxldCBncmVlbiA9IDA7XHJcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xyXG4gICAgICAgIGxldCBuYXZ5ID0gMDtcclxuICAgIFxyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pPT57XHJcbiAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRvZG8uY29sb3Ipe1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB5ZWxsb3cgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsdWUgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hdnlcIjpcclxuICAgICAgICAgICAgICAgICAgICBuYXZ5ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkLFxyXG4gICAgICAgICAgICBvcmFuZ2UsXHJcbiAgICAgICAgICAgIHllbGxvdyxcclxuICAgICAgICAgICAgZ3JlZW4sXHJcbiAgICAgICAgICAgIGJsdWUsXHJcbiAgICAgICAgICAgIG5hdnlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3RvZG9zXSlcclxuICBcclxuICBcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgY29sb3JzIDogT2JqZWN0SW5kZXhUeXBlID0ge31cclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdXHJcbiAgICAgICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAvKirsobTsnqztlZjsp4DslYrripQg7YKk652866m0XHJcbiAgICAgICAgICAgICAgICAgKiBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb2xvcnNcclxuICAgICAgXHJcbiAgICB9LFt0b2Rvc10pXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cclxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMpLm1hcCgoY29sb3IsaW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtJyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIGJnLSR7Y29sb3J9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dG9kb0NvbG9yTnVtc1tjb2xvcl196rCcPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
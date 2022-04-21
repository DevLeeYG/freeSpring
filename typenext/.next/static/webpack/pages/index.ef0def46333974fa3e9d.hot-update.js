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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [todos.length, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsImNvbG9ycyIsInRvZG9Db2xvck51bXMiLCJ1c2VNZW1vIiwidG9kb0NvbG9yTnVtczIiLCJ2YWx1ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUlxQkMseURBSnJCLENBQWY7S0FBTUYsUzs7QUFrQk4sSUFBTUcsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBYTtBQUFBOztBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQU0zQyxNQUFNQyxnQkFBZ0IsR0FBR0Msa0RBQVcsQ0FBQyxZQUFLO0FBQ3RDLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUVBUixTQUFLLENBQUNTLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVE7QUFFbEIsY0FBT0EsSUFBSSxDQUFDQyxLQUFaO0FBQ0ksYUFBSyxLQUFMO0FBQ0lSLGFBQUcsSUFBSSxDQUFQO0FBQ0E7O0FBQ0osYUFBSyxRQUFMO0FBQ0lDLGdCQUFNLElBQUksQ0FBVjtBQUNBOztBQUNKLGFBQUssUUFBTDtBQUNJQyxnQkFBTSxJQUFHLENBQVQ7QUFDQTs7QUFDSixhQUFLLE9BQUw7QUFDSUMsZUFBSyxJQUFJLENBQVQ7QUFDQTs7QUFDSixhQUFLLE1BQUw7QUFDSUMsY0FBSSxJQUFHLENBQVA7QUFDQTs7QUFDSixhQUFLLE1BQUw7QUFDSUMsY0FBSSxJQUFHLENBQVA7QUFDQTs7QUFDQTtBQUNJO0FBcEJaO0FBd0JILEtBMUJEO0FBMkJBLFdBQU87QUFDSEwsU0FBRyxFQUFIQSxHQURHO0FBRUhDLFlBQU0sRUFBTkEsTUFGRztBQUdIQyxZQUFNLEVBQU5BLE1BSEc7QUFJSEMsV0FBSyxFQUFMQSxLQUpHO0FBS0hDLFVBQUksRUFBSkEsSUFMRztBQU1IQyxVQUFJLEVBQUpBO0FBTkcsS0FBUDtBQVNILEdBNUNtQyxFQTRDbEMsQ0FBQ1IsS0FBRCxDQTVDa0MsQ0FBcEM7QUE2Q0EsTUFBTVksTUFBd0IsR0FBRyxFQUFqQztBQUdELE1BQU1DLGFBQWEsR0FBR0MsOENBQU8sQ0FBQ2IsZ0JBQUQsRUFBa0IsQ0FBQ0QsS0FBRCxDQUFsQixDQUE3QjtBQUVDLE1BQU1lLGNBQWMsR0FBR0QsOENBQU8sQ0FBQyxZQUFJO0FBQy9CLFFBQU1GLE1BQXdCLEdBQUcsRUFBakM7QUFDQVosU0FBSyxDQUFDUyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFRO0FBQ25CLFVBQU1NLEtBQUssR0FBR0osTUFBTSxDQUFDRixJQUFJLENBQUNDLEtBQU4sQ0FBcEI7O0FBQ0MsVUFBRyxDQUFDSyxLQUFKLEVBQVU7QUFDTjtBQUNoQjtBQUNBO0FBQ2dCSixjQUFNLFdBQUlGLElBQUksQ0FBQ0MsS0FBVCxFQUFOLEdBQTBCLENBQTFCO0FBQ0gsT0FMRCxNQUtLO0FBQ0RDLGNBQU0sV0FBSUYsSUFBSSxDQUFDQyxLQUFULEVBQU4sR0FBMEJLLEtBQUssR0FBRyxDQUFsQztBQUNIO0FBR0osS0FaRDtBQWFBLFdBQU9KLE1BQVA7QUFFSCxHQWpCNkIsRUFpQjVCLENBQUNaLEtBQUQsQ0FqQjRCLENBQTlCO0FBb0JBLHNCQUNJLDhEQUFDLFNBQUQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFBLHFEQUNXO0FBQUEscUJBQU9BLEtBQUssQ0FBQ2lCLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQXJGRDs7R0FBTWxCLFE7O01BQUFBLFE7QUF1Rk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWYwZGVmNDYzMzM5NzRmYTNlOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlTWVtbyx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b2RvczpUb2RvVHlwZVtdXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgLnRvZG8tbGlzdC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC50b2RvLWxpc3QtbGFzdC10b2Rve1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYFxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgVG9kb0xpc3Q6UmVhY3QuRkM8SVByb3BzPiA9ICh7dG9kb3N9KSA9PiB7XHJcblxyXG4gICAgdHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XHJcbiAgICAgICAgW2tleTpzdHJpbmddOm51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgbGV0IHJlZCA9IDA7XHJcbiAgICAgICAgbGV0IG9yYW5nZSA9IDA7XHJcbiAgICAgICAgbGV0IHllbGxvdyA9IDA7XHJcbiAgICAgICAgbGV0IGdyZWVuID0gMDtcclxuICAgICAgICBsZXQgYmx1ZSA9IDA7XHJcbiAgICAgICAgbGV0IG5hdnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbyk9PntcclxuICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2godG9kby5jb2xvcil7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBvcmFuZ2UgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInllbGxvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHllbGxvdyArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGdyZWVuICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJibHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYmx1ZSArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmF2eVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5hdnkgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWQsXHJcbiAgICAgICAgICAgIG9yYW5nZSxcclxuICAgICAgICAgICAgeWVsbG93LFxyXG4gICAgICAgICAgICBncmVlbixcclxuICAgICAgICAgICAgYmx1ZSxcclxuICAgICAgICAgICAgbmF2eVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbdG9kb3NdKVxyXG4gICAgY29uc3QgY29sb3JzIDogT2JqZWN0SW5kZXhUeXBlID0ge31cclxuICBcclxuXHJcbiAgIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKGdldFRvZG9Db2xvck51bXMsW3RvZG9zXSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0NvbG9yTnVtczIgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgY29sb3JzIDogT2JqZWN0SW5kZXhUeXBlID0ge31cclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdO1xyXG4gICAgICAgICAgICBpZighdmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgLyoq7KG07J6s7ZWY7KeA7JWK64qUIO2CpOudvOuptFxyXG4gICAgICAgICAgICAgICAgICogXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29sb3JzO1xyXG4gICAgICBcclxuICAgIH0sW3RvZG9zXSlcclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndG9kby1saXN0LWxhc3QtdG9kbyc+XHJcbiAgICAgICAgICAgICAgICAgICAg64Ko7J2AIFRPRE88c3Bhbj57dG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
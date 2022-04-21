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
})(["width:100%;.todo-num{margin-left :12px;}.todo-list-header{padding:12px;border-bottom :1px solid ", ";.todo-list-last-todo{margin:0 0 8px;font-size:14px;span{margin-left :12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right :8px;p{font-size :14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color :", "}.bg-green{background-color :", "}.bg.navy{background-color :", ";}.bg-red{background-color :", ";}.bg-yellow{background-color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.yellow);
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
          lineNumber: 150,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJ1c2VNZW1vIiwidG9kb0NvbG9yTnVtczIiLCJjb2xvcnMiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0EsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1a0JBUXlCQyx5REFSekIsRUFxQ2NBLHlEQXJDZCxFQXdDY0EsMERBeENkLEVBMkNjQSwyREEzQ2QsRUE4Q2NBLHdEQTlDZCxFQWlEYUEsMkRBakRiLENBQWY7S0FBTUYsUzs7QUF3RE4sSUFBTUcsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBYTtBQUFBOztBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQU0zQyxNQUFNQyxnQkFBZ0IsR0FBR0Msa0RBQVcsQ0FBQyxZQUFLO0FBQ3RDLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUVBUixTQUFLLENBQUNTLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVE7QUFFbEIsY0FBT0EsSUFBSSxDQUFDQyxLQUFaO0FBQ0ksYUFBSyxLQUFMO0FBQ0lSLGFBQUcsSUFBSSxDQUFQO0FBQ0E7O0FBQ0osYUFBSyxRQUFMO0FBQ0lDLGdCQUFNLElBQUksQ0FBVjtBQUNBOztBQUNKLGFBQUssUUFBTDtBQUNJQyxnQkFBTSxJQUFHLENBQVQ7QUFDQTs7QUFDSixhQUFLLE9BQUw7QUFDSUMsZUFBSyxJQUFJLENBQVQ7QUFDQTs7QUFDSixhQUFLLE1BQUw7QUFDSUMsY0FBSSxJQUFHLENBQVA7QUFDQTs7QUFDSixhQUFLLE1BQUw7QUFDSUMsY0FBSSxJQUFHLENBQVA7QUFDQTs7QUFDQTtBQUNJO0FBcEJaO0FBd0JILEtBMUJEO0FBMkJBLFdBQU87QUFDSEwsU0FBRyxFQUFIQSxHQURHO0FBRUhDLFlBQU0sRUFBTkEsTUFGRztBQUdIQyxZQUFNLEVBQU5BLE1BSEc7QUFJSEMsV0FBSyxFQUFMQSxLQUpHO0FBS0hDLFVBQUksRUFBSkEsSUFMRztBQU1IQyxVQUFJLEVBQUpBO0FBTkcsS0FBUDtBQVNILEdBNUNtQyxFQTRDbEMsQ0FBQ1IsS0FBRCxDQTVDa0MsQ0FBcEM7QUFnREQsTUFBTVksYUFBYSxHQUFHQyw4Q0FBTyxDQUFDWixnQkFBRCxFQUFrQixDQUFDRCxLQUFELENBQWxCLENBQTdCO0FBRUMsTUFBTWMsY0FBYyxHQUFHRCw4Q0FBTyxDQUFDLFlBQUk7QUFDL0IsUUFBTUUsTUFBd0IsR0FBRyxFQUFqQztBQUNBZixTQUFLLENBQUNTLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVE7QUFDbkIsVUFBTU0sS0FBSyxHQUFHRCxNQUFNLENBQUNMLElBQUksQ0FBQ0MsS0FBTixDQUFwQjs7QUFDQyxVQUFHLENBQUNLLEtBQUosRUFBVTtBQUNOO0FBQ2hCO0FBQ0E7QUFDZ0JELGNBQU0sV0FBSUwsSUFBSSxDQUFDQyxLQUFULEVBQU4sR0FBMEIsQ0FBMUI7QUFDSCxPQUxELE1BS0s7QUFDREksY0FBTSxXQUFJTCxJQUFJLENBQUNDLEtBQVQsRUFBTixHQUEwQkssS0FBSyxHQUFHLENBQWxDO0FBQ0g7QUFHSixLQVpEO0FBYUEsV0FBT0QsTUFBUDtBQUVILEdBakI2QixFQWlCNUIsQ0FBQ2YsS0FBRCxDQWpCNEIsQ0FBOUI7QUFtQkFpQixTQUFPLENBQUNDLEdBQVIsQ0FBWUosY0FBWjtBQUdBLHNCQUNJLDhEQUFDLFNBQUQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFBLHFEQUNXO0FBQUEscUJBQU9kLEtBQUssQ0FBQ21CLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQXZGRDs7R0FBTXBCLFE7O01BQUFBLFE7QUF5Rk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJhZGRjMmZhYWVmMDRiZDcyMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlTWVtbyx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b2RvczpUb2RvVHlwZVtdXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIC50b2RvLW51bXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRvZG8tbGlzdC1sYXN0LXRvZG97XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3Jze1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodCA6IDhweDtcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9ye1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmctYmx1ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogJHtwYWxldHRlLmJsdWV9XHJcbiAgICB9XHJcbiAgICAuYmctZ3JlZW57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICR7cGFsZXR0ZS5ncmVlbn1cclxuICAgIH1cclxuICAgIC5iZy5uYXZ5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICAgIH1cclxuICAgIC5iZy1yZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICR7cGFsZXR0ZS5yZWR9O1xyXG4gICAgfVxyXG4gICAgLmJnLXllbGxvd3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcclxuICAgIH0gICBcclxuICAgIGBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFRvZG9MaXN0OlJlYWN0LkZDPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xyXG5cclxuICAgIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gICAgICAgIFtrZXk6c3RyaW5nXTpudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGxldCByZWQgPSAwO1xyXG4gICAgICAgIGxldCBvcmFuZ2UgPSAwO1xyXG4gICAgICAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gICAgICAgIGxldCBncmVlbiA9IDA7XHJcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xyXG4gICAgICAgIGxldCBuYXZ5ID0gMDtcclxuICAgIFxyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pPT57XHJcbiAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRvZG8uY29sb3Ipe1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB5ZWxsb3cgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsdWUgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hdnlcIjpcclxuICAgICAgICAgICAgICAgICAgICBuYXZ5ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkLFxyXG4gICAgICAgICAgICBvcmFuZ2UsXHJcbiAgICAgICAgICAgIHllbGxvdyxcclxuICAgICAgICAgICAgZ3JlZW4sXHJcbiAgICAgICAgICAgIGJsdWUsXHJcbiAgICAgICAgICAgIG5hdnlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3RvZG9zXSlcclxuICBcclxuICBcclxuXHJcbiAgIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKGdldFRvZG9Db2xvck51bXMsW3RvZG9zXSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0NvbG9yTnVtczIgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgY29sb3JzIDogT2JqZWN0SW5kZXhUeXBlID0ge31cclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdXHJcbiAgICAgICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAvKirsobTsnqztlZjsp4DslYrripQg7YKk652866m0XHJcbiAgICAgICAgICAgICAgICAgKiBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb2xvcnNcclxuICAgICAgXHJcbiAgICB9LFt0b2Rvc10pXHJcblxyXG4gICAgY29uc29sZS5sb2codG9kb0NvbG9yTnVtczIpXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RvZG8tbGlzdC1sYXN0LXRvZG8nPlxyXG4gICAgICAgICAgICAgICAgICAgIOuCqOydgCBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
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
})(["width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid ", ";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:", ";}.bg-green{background-color:", ";}.bg-navy{background-color:", ";}.bg-orange{background-color:", ";}.bg-red{background-color:", ";}.bg-yellow{background-color:", ";palette .todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid ", ";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:", ";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:", ";}}.todo-check-mark{fill:", ";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid ", ";background-color:transparent;outline:none;}}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray);
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
          lineNumber: 211,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
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
            lineNumber: 217,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [todoColorNums2[color], "\uAC1C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 208,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJ1c2VNZW1vIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJ0b2RvQ29sb3JOdW1zMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHd3Q0FVZ0JDLHlEQVZoQixFQXdDU0EseURBeENULEVBMkNTQSwwREEzQ1QsRUE4Q1NBLHlEQTlDVCxFQWlEU0EsMkRBakRULEVBb0RTQSx3REFwRFQsRUF1RFNBLDJEQXZEVCxFQWlFa0JBLHlEQWpFbEIsRUE2RUlBLHlEQTdFSixFQWlHS0EsNkRBakdMLEVBcUdHQSwrREFyR0gsRUEyR2VBLHlEQTNHZixDQUFmO0tBQU1GLFM7O0FBc0hOLElBQU1HLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFNM0MsTUFBTUMsZ0JBQWdCLEdBQUdDLGtEQUFXLENBQUMsWUFBSztBQUN0QyxRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFFBQUlDLElBQUksR0FBRyxDQUFYO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQVg7QUFFQVIsU0FBSyxDQUFDUyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFRO0FBRWxCLGNBQU9BLElBQUksQ0FBQ0MsS0FBWjtBQUNJLGFBQUssS0FBTDtBQUNJUixhQUFHLElBQUksQ0FBUDtBQUNBOztBQUNKLGFBQUssUUFBTDtBQUNJQyxnQkFBTSxJQUFJLENBQVY7QUFDQTs7QUFDSixhQUFLLFFBQUw7QUFDSUMsZ0JBQU0sSUFBRyxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxPQUFMO0FBQ0lDLGVBQUssSUFBSSxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxNQUFMO0FBQ0lDLGNBQUksSUFBRyxDQUFQO0FBQ0E7O0FBQ0osYUFBSyxNQUFMO0FBQ0lDLGNBQUksSUFBRyxDQUFQO0FBQ0E7O0FBQ0E7QUFDSTtBQXBCWjtBQXdCSCxLQTFCRDtBQTJCQSxXQUFPO0FBQ0hMLFNBQUcsRUFBSEEsR0FERztBQUVIQyxZQUFNLEVBQU5BLE1BRkc7QUFHSEMsWUFBTSxFQUFOQSxNQUhHO0FBSUhDLFdBQUssRUFBTEEsS0FKRztBQUtIQyxVQUFJLEVBQUpBLElBTEc7QUFNSEMsVUFBSSxFQUFKQTtBQU5HLEtBQVA7QUFTSCxHQTVDbUMsRUE0Q2xDLENBQUNSLEtBQUQsQ0E1Q2tDLENBQXBDO0FBa0RBLE1BQU1ZLGFBQWEsR0FBR0MsOENBQU8sQ0FBQyxZQUFJO0FBQzlCLFFBQU1DLE1BQXdCLEdBQUcsRUFBakM7QUFDQWQsU0FBSyxDQUFDUyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFRO0FBQ25CLFVBQU1LLEtBQUssR0FBR0QsTUFBTSxDQUFDSixJQUFJLENBQUNDLEtBQU4sQ0FBcEI7O0FBQ0MsVUFBRyxDQUFDSSxLQUFKLEVBQVU7QUFDTjtBQUNoQjtBQUNBO0FBQ2dCRCxjQUFNLFdBQUlKLElBQUksQ0FBQ0MsS0FBVCxFQUFOLEdBQTBCLENBQTFCO0FBQ0gsT0FMRCxNQUtLO0FBQ0RHLGNBQU0sV0FBSUosSUFBSSxDQUFDQyxLQUFULEVBQU4sR0FBMEJJLEtBQUssR0FBRyxDQUFsQztBQUNIO0FBR0osS0FaRDtBQWFBLFdBQU9ELE1BQVA7QUFFSCxHQWpCNEIsRUFpQjNCLENBQUNkLEtBQUQsQ0FqQjJCLENBQTdCO0FBcUJBLHNCQUNJLDhEQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFBLHFEQUNXO0FBQUEscUJBQU9BLEtBQUssQ0FBQ2dCLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsZ0JBQ0tDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixhQUFaLEVBQTJCTyxHQUEzQixDQUErQixVQUFDUixLQUFELEVBQU9TLEtBQVA7QUFBQSw0QkFDNUI7QUFBSyxtQkFBUyxFQUFDLDRCQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyw0Q0FBcUNULEtBQXJDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsdUJBQUlVLGNBQWMsQ0FBQ1YsS0FBRCxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxXQUFpRFMsS0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFENEI7QUFBQSxPQUEvQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQTlGRDs7R0FBTXJCLFE7O01BQUFBLFE7QUFnR04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjY1OTQ3NjQwNjA1YmQ5ZWVkNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlTWVtbyx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b2RvczpUb2RvVHlwZVtdXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRvZG8tbnVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvZG8tbGlzdC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYmctYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XHJcbiAgfVxyXG4gIC5iZy1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xyXG4gIH1cclxuICAuYmctbmF2eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XHJcbiAgfVxyXG4gIC5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgfVxyXG4gIC5iZy1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XHJcbiAgfVxyXG4gIC5iZy15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XHJcbiAgcGFsZXR0ZVxyXG5cclxuICAudG9kby1saXN0IHtcclxuICAgIC50b2RvLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgICAudG9kby1sZWZ0LXNpZGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnRvZG8tY29sb3ItYmxvY2sge1xyXG4gICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja2VkLXRvZG8tdGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLXRleHQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50b2RvLXJpZ2h0LXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLXRyYXNoLWNhbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9yZWR9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby1jaGVjay1tYXJrIHtcclxuICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuY29uc3QgVG9kb0xpc3Q6UmVhY3QuRkM8SVByb3BzPiA9ICh7dG9kb3N9KSA9PiB7XHJcblxyXG4gICAgdHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XHJcbiAgICAgICAgW2tleTpzdHJpbmddOm51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgbGV0IHJlZCA9IDA7XHJcbiAgICAgICAgbGV0IG9yYW5nZSA9IDA7XHJcbiAgICAgICAgbGV0IHllbGxvdyA9IDA7XHJcbiAgICAgICAgbGV0IGdyZWVuID0gMDtcclxuICAgICAgICBsZXQgYmx1ZSA9IDA7XHJcbiAgICAgICAgbGV0IG5hdnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbyk9PntcclxuICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2godG9kby5jb2xvcil7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBvcmFuZ2UgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInllbGxvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHllbGxvdyArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGdyZWVuICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJibHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYmx1ZSArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmF2eVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5hdnkgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWQsXHJcbiAgICAgICAgICAgIG9yYW5nZSxcclxuICAgICAgICAgICAgeWVsbG93LFxyXG4gICAgICAgICAgICBncmVlbixcclxuICAgICAgICAgICAgYmx1ZSxcclxuICAgICAgICAgICAgbmF2eVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbdG9kb3NdKVxyXG4gIFxyXG4gIFxyXG5cclxuICAgXHJcblxyXG4gICAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCBjb2xvcnMgOiBPYmplY3RJbmRleFR5cGUgPSB7fVxyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pPT57XHJcbiAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl1cclxuICAgICAgICAgICAgaWYoIXZhbHVlKXtcclxuICAgICAgICAgICAgICAgIC8qKuyhtOyerO2VmOyngOyViuuKlCDtgqTrnbzrqbRcclxuICAgICAgICAgICAgICAgICAqIFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDFcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yc1xyXG4gICAgICBcclxuICAgIH0sW3RvZG9zXSlcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RvZG8tbGlzdC1sYXN0LXRvZG8nPlxyXG4gICAgICAgICAgICAgICAgICAgIOuCqOydgCBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtcykubWFwKChjb2xvcixpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlci1jb2xvci1udW0nIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3IgYmctJHtjb2xvcn1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1zMltjb2xvcl196rCcPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
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
})(["width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid ", ";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:", ";}.bg-green{background-color:", ";}.bg-navy{background-color:", ";}.bg-orange{background-color:", ";}.bg-red{background-color:", ";}.bg-yellow{background-color:", ";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid ", ";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:", ";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:", ";}}.todo-check-mark{fill:", ";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid ", ";background-color:transparent;outline:none;}}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray);
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
  }, [todos]); //* 색깔 객체 구하기 2

  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var colors = {};
    todos.forEach(function (todo) {
      var value = colors[todo.color];

      if (!value) {
        //* 존재하지않던 key라면
        colors["".concat(todo.color)] = 1;
      } else {
        //* 존재하는 키라면
        colors["".concat(todo.color)] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740TODO", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [todos.length, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "todo-list-header-colors",
        children: Object.keys(todoColorNums).map(function (color, index) {
          return (
            /*#__PURE__*/
            //키를 classname 에 적용
            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "todo-list-header-color-num",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "todo-list-header-round-color bg-".concat(color)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [todoColorNums[color], "\uAC1C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 13
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 13
            }, _this)
          );
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "todo-list",
      children: todos.map(function (todo) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "todo-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "todo-color-block bg-".concat(todo.color)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "todo-text ".concat(todo.checked ? "checked-todo-text" : ""),
              children: todo.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 15
          }, _this)
        }, todo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 14
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJ1c2VNZW1vIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVNBLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsaXdDQVVnQkMseURBVmhCLEVBd0NTQSx5REF4Q1QsRUEyQ1NBLDBEQTNDVCxFQThDU0EseURBOUNULEVBaURTQSwyREFqRFQsRUFvRFNBLHdEQXBEVCxFQXVEU0EsMkRBdkRULEVBZ0VrQkEseURBaEVsQixFQTRFSUEseURBNUVKLEVBZ0dLQSw2REFoR0wsRUFvR0dBLCtEQXBHSCxFQTBHZUEseURBMUdmLENBQWY7S0FBTUYsUzs7QUFxSE4sSUFBTUcsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBYTtBQUFBOztBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQU0zQyxNQUFNQyxnQkFBZ0IsR0FBR0Msa0RBQVcsQ0FBQyxZQUFLO0FBQ3RDLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUVBUixTQUFLLENB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WDtBQUFBLHdCQUtHWCxJQUFJLENBQUNZO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxXQUErQlosSUFBSSxDQUFDYSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBWUssT0FkQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtDSCxDQTFHRDs7R0FBTXhCLFE7O01BQUFBLFE7QUE0R04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTc1MzRmNThlZmMwZmIyODc4OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlTWVtbyx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b2RvczpUb2RvVHlwZVtdXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRvZG8tbnVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvZG8tbGlzdC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYmctYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XHJcbiAgfVxyXG4gIC5iZy1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xyXG4gIH1cclxuICAuYmctbmF2eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XHJcbiAgfVxyXG4gIC5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgfVxyXG4gIC5iZy1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XHJcbiAgfVxyXG4gIC5iZy15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XHJcbiAgfVxyXG4gIC50b2RvLWxpc3Qge1xyXG4gICAgLnRvZG8taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAgIC50b2RvLWxlZnQtc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAudG9kby1jb2xvci1ibG9jayB7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcclxuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tdGV4dCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tdHJhc2gtY2FuIHtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWNoZWNrLW1hcmsge1xyXG4gICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBUb2RvTGlzdDpSZWFjdC5GQzxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcclxuXHJcbiAgICB0eXBlIE9iamVjdEluZGV4VHlwZSA9IHtcclxuICAgICAgICBba2V5OnN0cmluZ106bnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBsZXQgcmVkID0gMDtcclxuICAgICAgICBsZXQgb3JhbmdlID0gMDtcclxuICAgICAgICBsZXQgeWVsbG93ID0gMDtcclxuICAgICAgICBsZXQgZ3JlZW4gPSAwO1xyXG4gICAgICAgIGxldCBibHVlID0gMDtcclxuICAgICAgICBsZXQgbmF2eSA9IDA7XHJcbiAgICBcclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCh0b2RvLmNvbG9yKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9yYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yYW5nZSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgeWVsbG93ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JlZW4gKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICBibHVlICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2eSArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZCxcclxuICAgICAgICAgICAgb3JhbmdlLFxyXG4gICAgICAgICAgICB5ZWxsb3csXHJcbiAgICAgICAgICAgIGdyZWVuLFxyXG4gICAgICAgICAgICBibHVlLFxyXG4gICAgICAgICAgICBuYXZ5XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt0b2Rvc10pXHJcbiAgXHJcbiAgXHJcblxyXG4gICBcclxuICAvLyog7IOJ6rmUIOqwneyytCDqtaztlZjquLAgMlxyXG4gIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yczogT2JqZWN0SW5kZXhUeXBlID0ge307XHJcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdO1xyXG4gICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgLy8qIOyhtOyerO2VmOyngOyViuuNmCBrZXnrnbzrqbRcclxuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8qIOyhtOyerO2VmOuKlCDtgqTrnbzrqbRcclxuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29sb3JzO1xyXG4gIH0sIFt0b2Rvc10pO1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1saXN0LWxhc3QtdG9kb1wiPlxyXG4gICAgICAgICAgICDrgqjsnYBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtcykubWFwKChjb2xvciwgaW5kZXgpID0+ICgvL+2CpOulvCBjbGFzc25hbWUg7JeQIOyggeyaqVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XHJcbiAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1zW2NvbG9yXX3qsJw8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSd0b2RvLWxpc3QnPlxyXG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJ0b2RvLWl0ZW1cIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tY29sb3ItYmxvY2sgYmctJHt0b2RvLmNvbG9yfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0b2RvLXRleHQgJHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvLmNoZWNrZWQgPyBcImNoZWNrZWQtdG9kby10ZXh0XCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dG9kby50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9
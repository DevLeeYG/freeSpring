(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "C:\\WorkSpace\\typenext\\components\\TodoList.tsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "TodoList__Container",
  componentId: "sc-1t8agvw-0"
})(["width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid ", ";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:", ";}.bg-green{background-color:", ";}.bg-navy{background-color:", ";}.bg-orange{background-color:", ";}.bg-red{background-color:", ";}.bg-yellow{background-color:", ";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid ", ";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:", ";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:", ";}}.todo-check-mark{fill:", ";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid ", ";background-color:transparent;outline:none;}}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.blue, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.navy, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray);

const TodoList = ({
  todos
}) => {
  const getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach(todo => {
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
      red,
      orange,
      yellow,
      green,
      blue,
      navy
    };
  }, [todos]); //* 색깔 객체 구하기 2

  const todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const colors = {};
    todos.forEach(todo => {
      const value = colors[todo.color];

      if (!value) {
        //* 존재하지않던 key라면
        colors[`${todo.color}`] = 1;
      } else {
        //* 존재하는 키라면
        colors[`${todo.color}`] = value + 1;
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "todo-list-header-colors",
        children: Object.keys(todoColorNums).map((color, index) =>
        /*#__PURE__*/
        //키를 classname 에 적용
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "todo-list-header-color-num",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `todo-list-header-round-color bg-${color}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [todoColorNums[color], "\uAC1C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "todo-list",
      children: todos.map(todo => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "todo-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "todo-left-side",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `todo-color-block bg-${todo.color}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: `todo-text ${todo.checked ? "checked-todo-text" : ""}`,
              children: todo.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 15
          }, undefined)
        }, todo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 14
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");

var _jsxFileName = "C:\\WorkSpace\\typenext\\pages\\index.tsx";


const todos = [{
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
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1orlsb6-0"
})(["padding:20px;"]);

const index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__.default, {
    todos: todos
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vc3R5bGVzL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsInBhbGV0dGUiLCJUb2RvTGlzdCIsInRvZG9zIiwiZ2V0VG9kb0NvbG9yTnVtcyIsInVzZUNhbGxiYWNrIiwicmVkIiwib3JhbmdlIiwieWVsbG93IiwiZ3JlZW4iLCJibHVlIiwibmF2eSIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwidXNlTWVtbyIsImNvbG9ycyIsInZhbHVlIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4IiwiY2hlY2tlZCIsInRleHQiLCJpZCIsImdyYXkiLCJkZWVwX3JlZCIsImRlZXBfZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0EsTUFBTUEsU0FBUyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpd0NBVWdCQyx5REFWaEIsRUF3Q1NBLHlEQXhDVCxFQTJDU0EsMERBM0NULEVBOENTQSx5REE5Q1QsRUFpRFNBLDJEQWpEVCxFQW9EU0Esd0RBcERULEVBdURTQSwyREF2RFQsRUFnRWtCQSx5REFoRWxCLEVBNEVJQSx5REE1RUosRUFnR0tBLDZEQWhHTCxFQW9HR0EsK0RBcEdILEVBMEdlQSx5REExR2YsQ0FBZjs7QUFxSEEsTUFBTUMsUUFBeUIsR0FBRyxD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Q0UsSUFBRSxFQUFDLENBQUo7QUFBTUQsTUFBSSxFQUFDLFNBQVg7QUFBc0JYLE9BQUssRUFBRSxNQUE3QjtBQUFxQ1UsU0FBTyxFQUFDO0FBQTdDLENBTHNCLEVBTXRCO0FBQUNFLElBQUUsRUFBQyxDQUFKO0FBQU1ELE1BQUksRUFBQyxTQUFYO0FBQXNCWCxPQUFLLEVBQUUsTUFBN0I7QUFBcUNVLFNBQU8sRUFBQztBQUE3QyxDQU5zQixDQUExQjtBQVNBLE1BQU16QixTQUFTLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFCQUFmOztBQUlBLE1BQU11QixLQUFlLEdBQUcsTUFBTTtBQUUxQixzQkFBTyw4REFBQyx5REFBRDtBQUFVLFNBQUssRUFBRXBCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUdILENBTEQ7O0FBT0EsK0RBQWVvQixLQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pCQSwrREFBZTtBQUNYakIsS0FBRyxFQUFDLFNBRE87QUFFWEMsUUFBTSxFQUFDLFNBRkk7QUFHWEMsUUFBTSxFQUFDLFNBSEk7QUFJWEMsT0FBSyxFQUFDLFNBSks7QUFLWEMsTUFBSSxFQUFDLFNBTE07QUFNWEMsTUFBSSxFQUFDLFNBTk07QUFPWGdCLE1BQUksRUFBQyxTQVBNO0FBUVhDLFVBQVEsRUFBQyxTQVJFO0FBU1hDLFlBQVUsRUFBQztBQVRBLENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlTWVtbyx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b2RvczpUb2RvVHlwZVtdXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRvZG8tbnVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvZG8tbGlzdC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYmctYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XHJcbiAgfVxyXG4gIC5iZy1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xyXG4gIH1cclxuICAuYmctbmF2eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XHJcbiAgfVxyXG4gIC5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgfVxyXG4gIC5iZy1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XHJcbiAgfVxyXG4gIC5iZy15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XHJcbiAgfVxyXG4gIC50b2RvLWxpc3Qge1xyXG4gICAgLnRvZG8taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAgIC50b2RvLWxlZnQtc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAudG9kby1jb2xvci1ibG9jayB7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcclxuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tdGV4dCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tdHJhc2gtY2FuIHtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWNoZWNrLW1hcmsge1xyXG4gICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBUb2RvTGlzdDpSZWFjdC5GQzxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcclxuXHJcbiAgICB0eXBlIE9iamVjdEluZGV4VHlwZSA9IHtcclxuICAgICAgICBba2V5OnN0cmluZ106bnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBsZXQgcmVkID0gMDtcclxuICAgICAgICBsZXQgb3JhbmdlID0gMDtcclxuICAgICAgICBsZXQgeWVsbG93ID0gMDtcclxuICAgICAgICBsZXQgZ3JlZW4gPSAwO1xyXG4gICAgICAgIGxldCBibHVlID0gMDtcclxuICAgICAgICBsZXQgbmF2eSA9IDA7XHJcbiAgICBcclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCh0b2RvLmNvbG9yKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9yYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yYW5nZSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgeWVsbG93ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JlZW4gKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICBibHVlICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2eSArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZCxcclxuICAgICAgICAgICAgb3JhbmdlLFxyXG4gICAgICAgICAgICB5ZWxsb3csXHJcbiAgICAgICAgICAgIGdyZWVuLFxyXG4gICAgICAgICAgICBibHVlLFxyXG4gICAgICAgICAgICBuYXZ5XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt0b2Rvc10pXHJcbiAgXHJcbiAgXHJcblxyXG4gICBcclxuICAvLyog7IOJ6rmUIOqwneyytCDqtaztlZjquLAgMlxyXG4gIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yczogT2JqZWN0SW5kZXhUeXBlID0ge307XHJcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdO1xyXG4gICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgLy8qIOyhtOyerO2VmOyngOyViuuNmCBrZXnrnbzrqbRcclxuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8qIOyhtOyerO2VmOuKlCDtgqTrnbzrqbRcclxuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29sb3JzO1xyXG4gIH0sIFt0b2Rvc10pO1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1saXN0LWxhc3QtdG9kb1wiPlxyXG4gICAgICAgICAgICDrgqjsnYBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtcykubWFwKChjb2xvciwgaW5kZXgpID0+ICgvL+2CpOulvCBjbGFzc25hbWUg7JeQIOyggeyaqVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XHJcbiAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1zW2NvbG9yXX3qsJw8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSd0b2RvLWxpc3QnPlxyXG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJ0b2RvLWl0ZW1cIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1sZWZ0LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRvZG8tdGV4dCAke1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uY2hlY2tlZCA/IFwiY2hlY2tlZC10b2RvLXRleHRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBbXHJcbiAgICB7aWQ6MSx0ZXh0Olwi66eI7Yq4IOqwgOyEnCDsnqXrs7TquLBcIiAsY29sb3I6IFwicmVkXCIsIGNoZWNrZWQ6ZmFsc2V9LFxyXG4gICAge2lkOjIsdGV4dDpcIuyImO2VmSDsiJnsoJztlZjquLBcIiAsY29sb3I6IFwib3JhbmdlXCIsIGNoZWNrZWQ6ZmFsc2V9LFxyXG4gICAge2lkOjMsdGV4dDpcIuy9lOuUqe2VmOq4sFwiICxjb2xvcjogXCJ5ZWxsb3dcIiwgY2hlY2tlZDpmYWxzZX0sXHJcbiAgICB7aWQ6NCx0ZXh0Olwi64Sl7Iqk7Yq4IOqzteu2gO2VmOq4sFwiICxjb2xvcjogXCJncmVlblwiLCBjaGVja2VkOmZhbHNlfSxcclxuICAgIHtpZDo1LHRleHQ6XCLsmpTrpqwg7Jew7Iq17ZWY6riwXCIgLGNvbG9yOiBcImJsdWVcIiwgY2hlY2tlZDpmYWxzZX0sXHJcbiAgICB7aWQ6Nix0ZXh0Olwi67aE66as7IiY6rGwIO2VmOq4sFwiICxjb2xvcjogXCJuYXZ5XCIsIGNoZWNrZWQ6ZmFsc2V9XHJcbl1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MjBweDtcclxuYFxyXG5cclxuY29uc3QgaW5kZXggOk5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30vPlxyXG5cclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJlZDpcIiNGRkFGQjBcIixcclxuICAgIG9yYW5nZTpcIiNGRkMyODJcIixcclxuICAgIHllbGxvdzpcIiNGQ0ZGQjBcIixcclxuICAgIGdyZWVuOlwiI0UyRkZBRlwiLFxyXG4gICAgYmx1ZTpcIiNBRUU0RkZcIixcclxuICAgIG5hdnk6XCIjQjVDN0VEXCIsXHJcbiAgICBncmF5OlwiI0U1RTVFNVwiLFxyXG4gICAgZGVlcF9yZWQ6XCIjRjM1NDU2XCIsXHJcbiAgICBkZWVwX2dyZWVuOlwiIzQ3RTc3NFwiLFxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
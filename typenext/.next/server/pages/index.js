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
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "@mui/icons-material/Delete");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Check */ "@mui/icons-material/Check");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__);


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
          lineNumber: 206,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "todo-list-header-colors",
        children: Object.keys(todoColorNums).map((color, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "todo-list-header-color-num",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `todo-list-header-round-color bg-${color}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [todoColorNums[color], "\uAC1C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 17
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "todo-list",
      children: todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "todo-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "todo-right-side",
          children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default()), {
              onClick: () => {},
              className: "todo-trash-can"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default()), {
              onClick: () => {},
              className: "todo-check-mark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 21
            }, undefined)]
          }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "todo-button"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 15
        }, undefined)]
      }, todo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 203,
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
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");

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
  checked: true
}];

const index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__.default, {
    todos: todos
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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

/***/ "@mui/icons-material/Check":
/*!********************************************!*\
  !*** external "@mui/icons-material/Check" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/icons-material/Check");;

/***/ }),

/***/ "@mui/icons-material/Delete":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Delete" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/icons-material/Delete");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vc3R5bGVzL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja1wiIiwid2VicGFjazovL25leHQtdG9kby9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlXCIiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsInBhbGV0dGUiLCJUb2RvTGlzdCIsInRvZG9zIiwiZ2V0VG9kb0NvbG9yTnVtcyIsInVzZUNhbGxiYWNrIiwicmVkIiwib3JhbmdlIiwieWVsbG93IiwiZ3JlZW4iLCJibHVlIiwibmF2eSIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwidXNlTWVtbyIsImNvbG9ycyIsInZhbHVlIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4IiwiY2hlY2tlZCIsInRleHQiLCJpZCIsImdyYXkiLCJkZWVwX3JlZCIsImRlZXBfZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0EsTUFBTUEsU0FBUyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpd0NBVWdCQyx5REFWaEIsRUF3Q1NBLHlEQXhDVCxFQTJDU0EsMERBM0NULEVBOENTQSx5REE5Q1QsRUFpRFNBLDJEQWpEVCxFQW9EU0Esd0RBcERULEVBdURTQSwyREF2RFQsRUFnRWtCQSx5REFoRWxCLEVBNEVJQSx5REE1RUosRUFnR0tBLDZEQWhHTCxFQW9HR0EsK0RBcEdILEVBMEdlQSx5REExR2YsQ0FBZjs7QUFxSEEsTUFBTUMsUUFBeUIsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhO0FBTTNDLFFBQU1DLGdCQUFnQixHQUFHQyxrREFBVyxDQUFDLE1BQUs7QUFDdEMsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLFFBQUlDLElBQUksR0FBRyxDQUFYO0FBRUFSLFNBQUssQ0FBQ1MsT0FBTixDQUFlQyxJQUFELElBQVE7QUFFbEIsY0FBT0EsSUFBSSxDQUFDQyxLQUFaO0FBQ0ksYUFBSyxLQUFMO0FBQ0lSLGFBQUcsSUFBSSxDQUFQO0FBQ0E7O0FBQ0osYUFBSyxRQUFMO0FBQ0lDLGdCQUFNLElBQUksQ0FBVjtBQUNBOztBQUNKLGFBQUssUUFBTDtBQUNJQyxnQkFBTSxJQUFHLENBQVQ7QUFDQTs7QUFDSixhQUFLLE9BQUw7QUFDSUMsZUFBSyxJQUFJLENBQVQ7QUFDQTs7QUFDSixhQUFLLE1BQUw7QUFDSUMsY0FBSSxJQUFHLENBQVA7QUFDQTs7QUFDSixhQUFLLE1BQUw7QUFDSUMsY0FBSSxJQUFHLENBQVA7QUFDQTs7QUFDQTtBQUNJO0FBcEJaO0FBd0JILEtBMUJEO0FBMkJBLFdBQU87QUFDSEwsU0FERztBQUVIQyxZQUZHO0FBR0hDLFlBSEc7QUFJSEMsV0FKRztBQUtIQyxVQUxHO0FBTUhDO0FBTkcsS0FBUDtBQVNILEdBNUNtQyxFQTRDbEMsQ0FBQ1IsS0FBRCxDQTVDa0MsQ0FBcEMsQ0FOMkMsQ0F1RDdDOztBQUNBLFFBQU1ZLGFBQWEsR0FBR0MsOENBQU8sQ0FBQyxNQUFNO0FBQ2xDLFVBQU1DLE1BQXVCLEdBQUcsRUFBaEM7QUFDQWQsU0FBSyxDQUFDUyxPQUFOLENBQWVDLElBQUQsSUFBVTtBQUN0QixZQUFNSyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0osSUFBSSxDQUFDQyxLQUFOLENBQXBCOztBQUNBLFVBQUksQ0FBQ0ksS0FBTCxFQUFZO0FBQ1Y7QUFDQUQsY0FBTSxDQUFFLEdBQUVKLElBQUksQ0FBQ0MsS0FBTSxFQUFmLENBQU4sR0FBMEIsQ0FBMUI7QUFDRCxPQUhELE1BR087QUFDTDtBQUNBRyxjQUFNLENBQUUsR0FBRUosSUFBSSxDQUFDQyxLQUFNLEVBQWYsQ0FBTixHQUEwQkksS0FBSyxHQUFHLENBQWxDO0FBQ0Q7QUFDRixLQVREO0FBVUEsV0FBT0QsTUFBUDtBQUNELEdBYjRCLEVBYTFCLENBQUNkLEtBQUQsQ0FiMEIsQ0FBN0I7QUFnQkUsc0JBQ0ksOERBQUMsU0FBRDtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUEsb0RBQ1E7QUFBQSxxQkFBT0EsS0FBSyxDQUFDZ0IsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsa0JBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixhQUFaLEVBQTJCTyxHQUEzQixDQUErQixDQUFDUixLQUFELEVBQVFTLEtBQVIsa0JBQzlCO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRyxtQ0FBa0NULEtBQU07QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsdUJBQUlDLGFBQWEsQ0FBQ0QsS0FBRCxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxXQUFpRFMsS0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBY0E7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBLGdCQUNHcEIsS0FBSyxDQUFDbUIsR0FBTixDQUFXVCxJQUFELGlCQUNUO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFHLHVCQUFzQkEsSUFBSSxDQUFDQyxLQUFNO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUNFLHFCQUFTLEVBQUcsYUFDVkQsSUFBSSxDQUFDVyxPQUFMLEdBQWUsbUJBQWYsR0FBcUMsRUFDdEMsRUFISDtBQUFBLHNCQUtHWCxJQUFJLENBQUNZO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFXRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxxQkFDR1osSUFBSSxDQUFDVyxPQUFMLGlCQUNDO0FBQUEsb0NBQ0UsOERBQUMsbUVBQUQ7QUFDQSxxQkFBTyxFQUFFLE1BQUksQ0FBRSxDQURmO0FBRUUsdUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFNRSw4REFBQyxrRUFBRDtBQUNJLHFCQUFPLEVBQUUsTUFBSSxDQUFFLENBRG5CO0FBRUUsdUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQSwwQkFGSixFQWVHLENBQUNYLElBQUksQ0FBQ1csT0FBTixpQkFDQztBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEY7QUFBQSxTQUErQlgsSUFBSSxDQUFDYSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXdESCxDQWhJRDs7QUFrSUEsK0RBQWV4QixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalFBO0FBR0EsTUFBTUMsS0FBaUIsR0FBRyxDQUN0QjtBQUFDdUIsSUFBRSxFQUFDLENBQUo7QUFBTUQsTUFBSSxFQUFDLFdBQVg7QUFBd0JYLE9BQUssRUFBRSxLQUEvQjtBQUFzQ1UsU0FBTyxFQUFDO0FBQTlDLENBRHNCLEVBRXRCO0FBQUNFLElBQUUsRUFBQyxDQUFKO0FBQU1ELE1BQUksRUFBQyxTQUFYO0FBQXNCWCxPQUFLLEVBQUUsUUFBN0I7QUFBdUNVLFNBQU8sRUFBQztBQUEvQyxDQUZzQixFQUd0QjtBQUFDRSxJQUFFLEVBQUMsQ0FBSjtBQUFNRCxNQUFJLEVBQUMsTUFBWDtBQUFtQlgsT0FBSyxFQUFFLFFBQTFCO0FBQW9DVSxTQUFPLEVBQUM7QUFBNUMsQ0FIc0IsRUFJdEI7QUFBQ0UsSUFBRSxFQUFDLENBQUo7QUFBTUQsTUFBSSxFQUFDLFVBQVg7QUFBdUJYLE9BQUssRUFBRSxPQUE5QjtBQUF1Q1UsU0FBTyxFQUFDO0FBQS9DLENBSnNCLEVBS3RCO0FBQUNFLElBQUUsRUFBQyxDQUFKO0FBQU1ELE1BQUksRUFBQyxTQUFYO0FBQXNCWCxPQUFLLEVBQUUsTUFBN0I7QUFBcUNVLFNBQU8sRUFBQztBQUE3QyxDQUxzQixFQU10QjtBQUFDRSxJQUFFLEVBQUMsQ0FBSjtBQUFNRCxNQUFJLEVBQUMsU0FBWDtBQUFzQlgsT0FBSyxFQUFFLE1BQTdCO0FBQXFDVSxTQUFPLEVBQUM7QUFBN0MsQ0FOc0IsQ0FBMUI7O0FBV0EsTUFBTUQsS0FBZSxHQUFHLE1BQU07QUFFMUIsc0JBQU8sOERBQUMseURBQUQ7QUFBVSxTQUFLLEVBQUVwQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFHSCxDQUxEOztBQU9BLCtEQUFlb0IsS0FBZixFOzs7Ozs7Ozs7Ozs7QUN2QkEsK0RBQWU7QUFDWGpCLEtBQUcsRUFBQyxTQURPO0FBRVhDLFFBQU0sRUFBQyxTQUZJO0FBR1hDLFFBQU0sRUFBQyxTQUhJO0FBSVhDLE9BQUssRUFBQyxTQUpLO0FBS1hDLE1BQUksRUFBQyxTQUxNO0FBTVhDLE1BQUksRUFBQyxTQU5NO0FBT1hnQixNQUFJLEVBQUMsU0FQTTtBQVFYQyxVQUFRLEVBQUMsU0FSRTtBQVNYQyxZQUFVLEVBQUM7QUFUQSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZU1lbW8sdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL3N0eWxlcy9wYWxldHRlJztcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tICcuLi90eXBlcy90b2RvJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2snO1xyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHRvZG9zOlRvZG9UeXBlW11cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAudG9kby1udW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iZy1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcclxuICB9XHJcbiAgLmJnLWdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XHJcbiAgfVxyXG4gIC5iZy1uYXZ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcclxuICB9XHJcbiAgLmJnLW9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICB9XHJcbiAgLmJnLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcclxuICB9XHJcbiAgLmJnLXllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcclxuICB9XHJcbiAgLnRvZG8tbGlzdCB7XHJcbiAgICAudG9kby1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG5cclxuICAgICAgLnRvZG8tbGVmdC1zaWRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC50b2RvLWNvbG9yLWJsb2NrIHtcclxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2tlZC10b2RvLXRleHQge1xyXG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby10ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudG9kby1yaWdodC1zaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby10cmFzaC1jYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfcmVkfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tY2hlY2stbWFyayB7XHJcbiAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9ncmVlbn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbmNvbnN0IFRvZG9MaXN0OlJlYWN0LkZDPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xyXG5cclxuICAgIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gICAgICAgIFtrZXk6c3RyaW5nXTpudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGxldCByZWQgPSAwO1xyXG4gICAgICAgIGxldCBvcmFuZ2UgPSAwO1xyXG4gICAgICAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gICAgICAgIGxldCBncmVlbiA9IDA7XHJcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xyXG4gICAgICAgIGxldCBuYXZ5ID0gMDtcclxuICAgIFxyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pPT57XHJcbiAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRvZG8uY29sb3Ipe1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB5ZWxsb3cgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsdWUgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hdnlcIjpcclxuICAgICAgICAgICAgICAgICAgICBuYXZ5ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkLFxyXG4gICAgICAgICAgICBvcmFuZ2UsXHJcbiAgICAgICAgICAgIHllbGxvdyxcclxuICAgICAgICAgICAgZ3JlZW4sXHJcbiAgICAgICAgICAgIGJsdWUsXHJcbiAgICAgICAgICAgIG5hdnlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3RvZG9zXSlcclxuICBcclxuICBcclxuXHJcbiAgIFxyXG4gIC8vKiDsg4nquZQg6rCd7LK0IOq1rO2VmOq4sCAyXHJcbiAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fTtcclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XHJcbiAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAvLyog7KG07J6s7ZWY7KeA7JWK642YIGtleeudvOuptFxyXG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyog7KG07J6s7ZWY64qUIO2CpOudvOuptFxyXG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb2xvcnM7XHJcbiAgfSwgW3RvZG9zXSk7XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1saXN0LWxhc3QtdG9kb1wiPlxyXG4gICAgICAgICAgICDrgqjsnYBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0b2RvQ29sb3JOdW1zKS5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1jb2xvci1udW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8cD57dG9kb0NvbG9yTnVtc1tjb2xvcl196rCcPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cclxuICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvZG8taXRlbVwiIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxlZnQtc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWNvbG9yLWJsb2NrIGJnLSR7dG9kby5jb2xvcn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby5jaGVja2VkID8gXCJjaGVja2VkLXRvZG8tdGV4dFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RvZG8udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tcmlnaHQtc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAge3RvZG8uY2hlY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e319XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2RvLXRyYXNoLWNhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e319XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2RvLWNoZWNrLW1hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHshdG9kby5jaGVja2VkICYmIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZG8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1RvZG9MaXN0XCI7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3RvZG9cIjtcclxuXHJcbmNvbnN0IHRvZG9zOiBUb2RvVHlwZVtdID0gW1xyXG4gICAge2lkOjEsdGV4dDpcIuuniO2KuCDqsIDshJwg7J6l67O06riwXCIgLGNvbG9yOiBcInJlZFwiLCBjaGVja2VkOmZhbHNlfSxcclxuICAgIHtpZDoyLHRleHQ6XCLsiJjtlZkg7IiZ7KCc7ZWY6riwXCIgLGNvbG9yOiBcIm9yYW5nZVwiLCBjaGVja2VkOmZhbHNlfSxcclxuICAgIHtpZDozLHRleHQ6XCLsvZTrlKntlZjquLBcIiAsY29sb3I6IFwieWVsbG93XCIsIGNoZWNrZWQ6ZmFsc2V9LFxyXG4gICAge2lkOjQsdGV4dDpcIuuEpeyKpO2KuCDqs7XrtoDtlZjquLBcIiAsY29sb3I6IFwiZ3JlZW5cIiwgY2hlY2tlZDpmYWxzZX0sXHJcbiAgICB7aWQ6NSx0ZXh0Olwi7JqU66asIOyXsOyKte2VmOq4sFwiICxjb2xvcjogXCJibHVlXCIsIGNoZWNrZWQ6ZmFsc2V9LFxyXG4gICAge2lkOjYsdGV4dDpcIuu2hOumrOyImOqxsCDtlZjquLBcIiAsY29sb3I6IFwibmF2eVwiLCBjaGVja2VkOnRydWV9XHJcbl1cclxuXHJcblxyXG5cclxuY29uc3QgaW5kZXggOk5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30vPlxyXG5cclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJlZDpcIiNGRkFGQjBcIixcclxuICAgIG9yYW5nZTpcIiNGRkMyODJcIixcclxuICAgIHllbGxvdzpcIiNGQ0ZGQjBcIixcclxuICAgIGdyZWVuOlwiI0UyRkZBRlwiLFxyXG4gICAgYmx1ZTpcIiNBRUU0RkZcIixcclxuICAgIG5hdnk6XCIjQjVDN0VEXCIsXHJcbiAgICBncmF5OlwiI0U1RTVFNVwiLFxyXG4gICAgZGVlcF9yZWQ6XCIjRjM1NDU2XCIsXHJcbiAgICBkZWVwX2dyZWVuOlwiIzQ3RTc3NFwiLFxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
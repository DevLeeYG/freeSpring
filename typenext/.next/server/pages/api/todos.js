(function() {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "GET") {
    try {
      const todos = await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0___default().readFile("data/todos.json", (err, data) => {
          if (err) {
            return reject(err.message);
          }

          const todosData = data.toString();

          if (!todosData) {
            return resolve([]);
          }

          const todos = JSON.parse(data.toString());
          return resolve(todos);
        });
      });
      res.status(200).send(todos);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
});

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9hcGkvdG9kb3MudHMiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwiZnNcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnMiLCJlcnIiLCJkYXRhIiwibWVzc2FnZSIsInRvZG9zRGF0YSIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwic2VuZCIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFHQSwrREFBZSxPQUFPQSxHQUFQLEVBQTBCQyxHQUExQixLQUFpRDtBQUM5RCxNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFsQixFQUF3QjtBQUNwQixRQUFHO0FBQ0MsWUFBTUMsS0FBSyxHQUFHLE1BQU0sSUFBSUMsT0FBSixDQUF3QixDQUFDQyxPQUFELEVBQVNDLE1BQVQsS0FBa0I7QUFDMURDLDBEQUFBLENBQVksaUJBQVosRUFBOEIsQ0FBQ0MsR0FBRCxFQUFLQyxJQUFMLEtBQVk7QUFDdEMsY0FBR0QsR0FBSCxFQUFPO0FBQ0gsbUJBQU9GLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDRSxPQUFMLENBQWI7QUFDSDs7QUFDRCxnQkFBTUMsU0FBUyxHQUFHRixJQUFJLENBQUNHLFFBQUwsRUFBbEI7O0FBQ0EsY0FBRyxDQUFDRCxTQUFKLEVBQWM7QUFDVixtQkFBT04sT0FBTyxDQUFDLEVBQUQsQ0FBZDtBQUNIOztBQUNELGdCQUFNRixLQUFLLEdBQUdVLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxJQUFJLENBQUNHLFFBQUwsRUFBWCxDQUFkO0FBQ0EsaUJBQU9QLE9BQU8sQ0FBQ0YsS0FBRCxDQUFkO0FBQ0gsU0FWRDtBQVdILE9BWm1CLENBQXBCO0FBYUFGLFNBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCYixLQUFyQjtBQUNILEtBZkQsQ0FlQyxPQUFNYyxDQUFOLEVBQVE7QUFDTEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQWhCLFNBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCQyxDQUFyQjtBQUNIO0FBQ0o7QUFDRixDQXRCRCxFOzs7Ozs7Ozs7OztBQ05BLGdDIiwiZmlsZSI6InBhZ2VzL2FwaS90b2Rvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlKSA9PntcclxuICBpZihyZXEubWV0aG9kID09PSBcIkdFVFwiKXtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgICAgY29uc3QgdG9kb3MgPSBhd2FpdCBuZXcgUHJvbWlzZTxUb2RvVHlwZVtdPigocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgICAgZnMucmVhZEZpbGUoXCJkYXRhL3RvZG9zLmpzb25cIiwoZXJyLGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0b2Rvc0RhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmKCF0b2Rvc0RhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoW10pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodG9kb3MpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQodG9kb3MpO1xyXG4gICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZSlcclxuICAgICAgfVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
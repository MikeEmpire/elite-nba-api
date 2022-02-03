"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodaysGames = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _getTodaysDate = _interopRequireDefault(require("../common/get-todays-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getTodaysGames = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, res, next) {
    var todaysDate, url, _yield$axios$get, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _getTodaysDate["default"])();

          case 3:
            todaysDate = _context.sent;
            url = "https://data.nba.net/10s/prod/v1/".concat(todaysDate, "/scoreboard.json");
            _context.next = 7;
            return _axios["default"].get(url);

          case 7:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", res.status(200).send({
              data: data,
              message: "Hit!"
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function getTodaysGames(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTodaysGames = getTodaysGames;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9nYW1lc19zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbImdldFRvZGF5c0dhbWVzIiwiXyIsInJlcyIsIm5leHQiLCJ0b2RheXNEYXRlIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7Ozs7QUFHTyxJQUFNQSxjQUFjO0FBQUEscUVBQUcsaUJBQzVCQyxDQUQ0QixFQUU1QkMsR0FGNEIsRUFHNUJDLElBSDRCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTUQsZ0NBTkM7O0FBQUE7QUFNcEJDLFlBQUFBLFVBTm9CO0FBT3BCQyxZQUFBQSxHQVBvQiw4Q0FPc0JELFVBUHRCO0FBQUE7QUFBQSxtQkFRbUJFLGtCQUFNQyxHQUFOLENBQVVGLEdBQVYsQ0FSbkI7O0FBQUE7QUFBQTtBQVFsQkcsWUFBQUEsSUFSa0Isb0JBUWxCQSxJQVJrQjtBQUFBLDZDQVNuQk4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUYsY0FBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFHLGNBQUFBLE9BQU8sRUFBRTtBQUFqQixhQUFyQixDQVRtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FXbkJSLElBQUksYUFYZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFkSCxjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCBnZXRUb2RheXNEYXRlIGZyb20gXCIuLi9jb21tb24vZ2V0LXRvZGF5cy1kYXRlXCI7XG5pbXBvcnQgSUdBTUVfREFUQSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9nYW1laW5mby5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IGdldFRvZGF5c0dhbWVzID0gYXN5bmMgKFxuICBfOiBhbnksXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9kYXlzRGF0ZSA9IGF3YWl0IGdldFRvZGF5c0RhdGUoKTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kYXRhLm5iYS5uZXQvMTBzL3Byb2QvdjEvJHt0b2RheXNEYXRlfS9zY29yZWJvYXJkLmpzb25gO1xuICAgIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IElHQU1FX0RBVEEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGRhdGEsIG1lc3NhZ2U6IFwiSGl0IVwiIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV4dChlcnIpO1xuICB9XG59O1xuIl19
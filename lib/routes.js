"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _players = _interopRequireDefault(require("./routes/players"));

var _error = require("./middleware/error.middleware");

var _notFound = require("./middleware/not-found.middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.get("/", function (_, res) {
    res.send("what it do");
  });
  app.use("/api/players", _players["default"]);
  app.use(_error.errorHandler);
  app.use(_notFound.notFoundHandler);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMudHMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwiXyIsInJlcyIsInNlbmQiLCJ1c2UiLCJwbGF5ZXJzIiwiZXJyb3JIYW5kbGVyIiwibm90Rm91bmRIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7ZUFFZSxrQkFBQ0EsR0FBRCxFQUFzQjtBQUNuQ0EsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLENBQUQsRUFBSUMsR0FBSixFQUFZO0FBQ3ZCQSxJQUFBQSxHQUFHLENBQUNDLElBQUosQ0FBUyxZQUFUO0FBQ0QsR0FGRDtBQUlBSixFQUFBQSxHQUFHLENBQUNLLEdBQUosQ0FBUSxjQUFSLEVBQXdCQyxtQkFBeEI7QUFFQU4sRUFBQUEsR0FBRyxDQUFDSyxHQUFKLENBQVFFLG1CQUFSO0FBQ0FQLEVBQUFBLEdBQUcsQ0FBQ0ssR0FBSixDQUFRRyx5QkFBUjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCBwbGF5ZXJzIGZyb20gXCIuL3JvdXRlcy9wbGF5ZXJzXCI7XG5cbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gXCIuL21pZGRsZXdhcmUvZXJyb3IubWlkZGxld2FyZVwiO1xuaW1wb3J0IHsgbm90Rm91bmRIYW5kbGVyIH0gZnJvbSBcIi4vbWlkZGxld2FyZS9ub3QtZm91bmQubWlkZGxld2FyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBBcHBsaWNhdGlvbikgPT4ge1xuICBhcHAuZ2V0KFwiL1wiLCAoXywgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmQoXCJ3aGF0IGl0IGRvXCIpO1xuICB9KTtcblxuICBhcHAudXNlKFwiL2FwaS9wbGF5ZXJzXCIsIHBsYXllcnMpO1xuXG4gIGFwcC51c2UoZXJyb3JIYW5kbGVyKTtcbiAgYXBwLnVzZShub3RGb3VuZEhhbmRsZXIpO1xufTtcbiJdfQ==
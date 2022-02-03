"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _players = _interopRequireDefault(require("./routes/players"));

var _games = _interopRequireDefault(require("./routes/games"));

var _error = require("./middleware/error.middleware");

var _notFound = require("./middleware/not-found.middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.get("/", function (_, res) {
    res.send("what it do");
  });
  app.use("/api/games", _games["default"]);
  app.use("/api/players", _players["default"]);
  app.use(_error.errorHandler);
  app.use(_notFound.notFoundHandler);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMudHMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwiXyIsInJlcyIsInNlbmQiLCJ1c2UiLCJnYW1lcyIsInBsYXllcnMiLCJlcnJvckhhbmRsZXIiLCJub3RGb3VuZEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztlQUVlLGtCQUFDQSxHQUFELEVBQXNCO0FBQ25DQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxHQUFKLEVBQVk7QUFDdkJBLElBQUFBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLFlBQVQ7QUFDRCxHQUZEO0FBSUFKLEVBQUFBLEdBQUcsQ0FBQ0ssR0FBSixDQUFRLFlBQVIsRUFBc0JDLGlCQUF0QjtBQUVBTixFQUFBQSxHQUFHLENBQUNLLEdBQUosQ0FBUSxjQUFSLEVBQXdCRSxtQkFBeEI7QUFFQVAsRUFBQUEsR0FBRyxDQUFDSyxHQUFKLENBQVFHLG1CQUFSO0FBQ0FSLEVBQUFBLEdBQUcsQ0FBQ0ssR0FBSixDQUFRSSx5QkFBUjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCBwbGF5ZXJzIGZyb20gXCIuL3JvdXRlcy9wbGF5ZXJzXCI7XG5pbXBvcnQgZ2FtZXMgZnJvbSBcIi4vcm91dGVzL2dhbWVzXCI7XG5cbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gXCIuL21pZGRsZXdhcmUvZXJyb3IubWlkZGxld2FyZVwiO1xuaW1wb3J0IHsgbm90Rm91bmRIYW5kbGVyIH0gZnJvbSBcIi4vbWlkZGxld2FyZS9ub3QtZm91bmQubWlkZGxld2FyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBBcHBsaWNhdGlvbikgPT4ge1xuICBhcHAuZ2V0KFwiL1wiLCAoXywgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmQoXCJ3aGF0IGl0IGRvXCIpO1xuICB9KTtcblxuICBhcHAudXNlKFwiL2FwaS9nYW1lc1wiLCBnYW1lcyk7XG5cbiAgYXBwLnVzZShcIi9hcGkvcGxheWVyc1wiLCBwbGF5ZXJzKTtcblxuICBhcHAudXNlKGVycm9ySGFuZGxlcik7XG4gIGFwcC51c2Uobm90Rm91bmRIYW5kbGVyKTtcbn07XG4iXX0=
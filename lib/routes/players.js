"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _players_service = require("../services/players_service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", _players_service.getPlayerSeasonAverage);
router.get("/all", _players_service.getAllPlayers);
router.get("/gamelog", _players_service.gameLastTenGameStats);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcGxheWVycy50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsImdldEFsbFBsYXllcnMiLCJnYW1lTGFzdFRlbkdhbWVTdGF0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBTUEsSUFBTUEsTUFBTSxHQUFHQyxvQkFBUUMsTUFBUixFQUFmOztBQUVBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxHQUFYLEVBQWdCQyx1Q0FBaEI7QUFFQUosTUFBTSxDQUFDRyxHQUFQLENBQVcsTUFBWCxFQUFtQkUsOEJBQW5CO0FBRUFMLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQVgsRUFBdUJHLHFDQUF2QjtlQUVlTixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHtcbiAgZ2FtZUxhc3RUZW5HYW1lU3RhdHMsXG4gIGdldEFsbFBsYXllcnMsXG4gIGdldFBsYXllclNlYXNvbkF2ZXJhZ2UsXG59IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2VcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldChcIi9cIiwgZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSk7XG5cbnJvdXRlci5nZXQoXCIvYWxsXCIsIGdldEFsbFBsYXllcnMpO1xuXG5yb3V0ZXIuZ2V0KFwiL2dhbWVsb2dcIiwgZ2FtZUxhc3RUZW5HYW1lU3RhdHMpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=
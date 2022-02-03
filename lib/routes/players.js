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
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcGxheWVycy50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsImdldEFsbFBsYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUtBLElBQU1BLE1BQU0sR0FBR0Msb0JBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsR0FBWCxFQUFnQkMsdUNBQWhCO0FBRUFKLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLE1BQVgsRUFBbUJFLDhCQUFuQjtlQUVlTCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHtcbiAgZ2V0QWxsUGxheWVycyxcbiAgZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSxcbn0gZnJvbSBcIi4uL3NlcnZpY2VzL3BsYXllcnNfc2VydmljZVwiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KFwiL1wiLCBnZXRQbGF5ZXJTZWFzb25BdmVyYWdlKTtcblxucm91dGVyLmdldChcIi9hbGxcIiwgZ2V0QWxsUGxheWVycyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
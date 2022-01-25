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
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcGxheWVycy50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxvQkFBUUMsTUFBUixFQUFmOztBQUVBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxHQUFYLEVBQWdCQyx1Q0FBaEI7ZUFFZUosTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGdldFBsYXllclNlYXNvbkF2ZXJhZ2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGxheWVyc19zZXJ2aWNlXCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoXCIvXCIsIGdldFBsYXllclNlYXNvbkF2ZXJhZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=
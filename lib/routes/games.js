"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _games_service = require("../services/games_service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", _games_service.getTodaysGames);
router.get("/v2", _games_service.gameTodaysGamesV2);
router.get("/stats", _games_service.getGameStats);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvZ2FtZXMudHMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsImdldFRvZGF5c0dhbWVzIiwiZ2FtZVRvZGF5c0dhbWVzVjIiLCJnZXRHYW1lU3RhdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQU1BLElBQU1BLE1BQU0sR0FBR0Msb0JBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsR0FBWCxFQUFnQkMsNkJBQWhCO0FBRUFKLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLEtBQVgsRUFBa0JFLGdDQUFsQjtBQUVBTCxNQUFNLENBQUNHLEdBQVAsQ0FBVyxRQUFYLEVBQXFCRywyQkFBckI7ZUFFZU4sTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7XG4gIGdhbWVUb2RheXNHYW1lc1YyLFxuICBnZXRHYW1lU3RhdHMsXG4gIGdldFRvZGF5c0dhbWVzLFxufSBmcm9tIFwiLi4vc2VydmljZXMvZ2FtZXNfc2VydmljZVwiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KFwiL1wiLCBnZXRUb2RheXNHYW1lcyk7XG5cbnJvdXRlci5nZXQoXCIvdjJcIiwgZ2FtZVRvZGF5c0dhbWVzVjIpO1xuXG5yb3V0ZXIuZ2V0KFwiL3N0YXRzXCIsIGdldEdhbWVTdGF0cyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
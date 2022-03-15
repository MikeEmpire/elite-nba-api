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
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvZ2FtZXMudHMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsImdldFRvZGF5c0dhbWVzIiwiZ2FtZVRvZGF5c0dhbWVzVjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0Msb0JBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsR0FBWCxFQUFnQkMsNkJBQWhCO0FBRUFKLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLEtBQVgsRUFBa0JFLGdDQUFsQjtlQUVlTCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHsgZ2FtZVRvZGF5c0dhbWVzVjIsIGdldFRvZGF5c0dhbWVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dhbWVzX3NlcnZpY2VcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldChcIi9cIiwgZ2V0VG9kYXlzR2FtZXMpO1xuXG5yb3V0ZXIuZ2V0KFwiL3YyXCIsIGdhbWVUb2RheXNHYW1lc1YyKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19
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
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvZ2FtZXMudHMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsImdldFRvZGF5c0dhbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWY7O0FBRUFGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLEdBQVgsRUFBZ0JDLDZCQUFoQjtlQUVlSixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHsgZ2V0VG9kYXlzR2FtZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2FtZXNfc2VydmljZVwiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KFwiL1wiLCBnZXRUb2RheXNHYW1lcyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
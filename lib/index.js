"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PORT = void 0;

var dotenv = _interopRequireWildcard(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
/**
 * App Variables
 */


var PORT = parseInt(process.env.PORT, 10);
exports.PORT = PORT;
var app = (0, _express["default"])();
/**
 *  App Configuration
 */

app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.use(_express["default"].json());
/**
 * Server Activation
 */

(0, _routes["default"])(app);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkb3RlbnYiLCJjb25maWciLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImV4aXQiLCJwYXJzZUludCIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFQUEsTUFBTSxDQUFDQyxNQUFQOztBQUVBLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQWpCLEVBQXVCO0FBQ3JCRixFQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUVPLElBQU1ELElBQVksR0FBR0UsUUFBUSxDQUFDSixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBYixFQUE2QixFQUE3QixDQUE3Qjs7QUFFUCxJQUFNRyxHQUFnQixHQUFHLDBCQUF6QjtBQUVBO0FBQ0E7QUFDQTs7QUFFQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEseUJBQVI7QUFDQUQsR0FBRyxDQUFDQyxHQUFKLENBQVEsdUJBQVI7QUFDQUQsR0FBRyxDQUFDQyxHQUFKLENBQVFDLG9CQUFRQyxJQUFSLEVBQVI7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQU9ILEdBQVA7ZUFFZUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5pbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGhlbG1ldCBmcm9tIFwiaGVsbWV0XCI7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG5cbmRvdGVudi5jb25maWcoKTtcblxuaWYgKCFwcm9jZXNzLmVudi5QT1JUKSB7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn1cblxuLyoqXG4gKiBBcHAgVmFyaWFibGVzXG4gKi9cblxuZXhwb3J0IGNvbnN0IFBPUlQ6IG51bWJlciA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQgYXMgc3RyaW5nLCAxMCk7XG5cbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XG5cbi8qKlxuICogIEFwcCBDb25maWd1cmF0aW9uXG4gKi9cblxuYXBwLnVzZShoZWxtZXQoKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aXZhdGlvblxuICovXG5cbnJvdXRlcyhhcHApO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXX0=
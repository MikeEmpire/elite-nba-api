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
  app.use("/", function (req, res, next) {
    return res.status(200).send({
      message: "hello"
    });
  });
  app.use("/api/players", _players["default"]);
  app.use(_error.errorHandler);
  app.use(_notFound.notFoundHandler);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMudHMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwicGxheWVycyIsImVycm9ySGFuZGxlciIsIm5vdEZvdW5kSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7O2VBRWUsa0JBQUNBLEdBQUQsRUFBc0I7QUFDbkNBLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDQyxHQUFELEVBQWVDLEdBQWYsRUFBOEJDLElBQTlCO0FBQUEsV0FDWEQsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FEVztBQUFBLEdBQWI7QUFJQVAsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsY0FBUixFQUF3Qk8sbUJBQXhCO0FBRUFSLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRUSxtQkFBUjtBQUNBVCxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUVMseUJBQVI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb24sIE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgcGxheWVycyBmcm9tIFwiLi9yb3V0ZXMvcGxheWVyc1wiO1xuXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi9taWRkbGV3YXJlL2Vycm9yLm1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IG5vdEZvdW5kSGFuZGxlciB9IGZyb20gXCIuL21pZGRsZXdhcmUvbm90LWZvdW5kLm1pZGRsZXdhcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogQXBwbGljYXRpb24pID0+IHtcbiAgYXBwLnVzZShcIi9cIiwgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PlxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJoZWxsb1wiIH0pXG4gICk7XG5cbiAgYXBwLnVzZShcIi9hcGkvcGxheWVyc1wiLCBwbGF5ZXJzKTtcblxuICBhcHAudXNlKGVycm9ySGFuZGxlcik7XG4gIGFwcC51c2Uobm90Rm91bmRIYW5kbGVyKTtcbn07XG4iXX0=
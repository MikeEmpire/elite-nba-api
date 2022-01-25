"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerSeasonAverage = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _playerIds = _interopRequireDefault(require("../constants/playerIds"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPlayerSeasonAverage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var pName, player_id, url, params, _yield$axios$get, outerData, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            pName = req.query.player_name;
            player_id = _playerIds["default"][pName];

            if (player_id) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(500).send({
              message: "unable to find player with corresponding ID"
            }));

          case 5:
            url = "".concat(_constants.BALL_DONT_LIE_URL, "/season_averages");
            params = {
              season: 2021,
              player_ids: [player_id]
            };
            _context.next = 9;
            return _axios["default"].get(url, {
              params: params
            });

          case 9:
            _yield$axios$get = _context.sent;
            outerData = _yield$axios$get.data;
            data = outerData.data;
            return _context.abrupt("return", res.status(200).send({
              data: data,
              message: "Success"
            }));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", next(_context.t0));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function getPlayerSeasonAverage(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPlayerSeasonAverage = getPlayerSeasonAverage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsInJlcSIsInJlcyIsIm5leHQiLCJwTmFtZSIsInF1ZXJ5IiwicGxheWVyX25hbWUiLCJwbGF5ZXJfaWQiLCJwbGF5ZXJJZHMiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInVybCIsIkJBTExfRE9OVF9MSUVfVVJMIiwicGFyYW1zIiwic2Vhc29uIiwicGxheWVyX2lkcyIsImF4aW9zIiwiZ2V0Iiwib3V0ZXJEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFFTyxJQUFNQSxzQkFBc0I7QUFBQSxxRUFBRyxpQkFDcENDLEdBRG9DLEVBRXBDQyxHQUZvQyxFQUdwQ0MsSUFIb0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTTVCQyxZQUFBQSxLQU40QixHQU1wQkgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLFdBTlU7QUFPNUJDLFlBQUFBLFNBUDRCLEdBT2hCQyxzQkFBVUosS0FBVixDQVBnQjs7QUFBQSxnQkFRN0JHLFNBUjZCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVV6QkwsR0FBRyxDQUNQTyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFGRCxDQVZ5Qjs7QUFBQTtBQWM1QkMsWUFBQUEsR0FkNEIsYUFjWEMsNEJBZFc7QUFlNUJDLFlBQUFBLE1BZjRCLEdBZVg7QUFDckJDLGNBQUFBLE1BQU0sRUFBRSxJQURhO0FBRXJCQyxjQUFBQSxVQUFVLEVBQUUsQ0FBQ1QsU0FBRDtBQUZTLGFBZlc7QUFBQTtBQUFBLG1CQW1CQVUsa0JBQU1DLEdBQU4sQ0FBVU4sR0FBVixFQUFlO0FBQUVFLGNBQUFBLE1BQU0sRUFBTkE7QUFBRixhQUFmLENBbkJBOztBQUFBO0FBQUE7QUFtQnBCSyxZQUFBQSxTQW5Cb0Isb0JBbUIxQkMsSUFuQjBCO0FBb0IxQkEsWUFBQUEsSUFwQjBCLEdBb0JRRCxTQXBCUixDQW9CMUJDLElBcEIwQjtBQUFBLDZDQXFCM0JsQixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFVSxjQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUVQsY0FBQUEsT0FBTyxFQUFFO0FBQWpCLGFBQXJCLENBckIyQjs7QUFBQTtBQUFBO0FBQUE7QUF1QmxDVSxZQUFBQSxPQUFPLENBQUNDLEdBQVI7QUF2QmtDLDZDQXdCM0JuQixJQUFJLGFBeEJ1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0Qkgsc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEdBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBwbGF5ZXJJZHMgZnJvbSBcIi4uL2NvbnN0YW50cy9wbGF5ZXJJZHNcIjtcbmltcG9ydCBJUExBWUVSX1NUQVRTIGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYXllclN0YXRzLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQkFMTF9ET05UX0xJRV9VUkwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXJTZWFzb25BdmVyYWdlID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcE5hbWUgPSByZXEucXVlcnkucGxheWVyX25hbWUgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHBsYXllcl9pZCA9IHBsYXllcklkc1twTmFtZV07XG4gICAgaWYgKCFwbGF5ZXJfaWQpIHtcbiAgICAgIC8vIFRPRE86IHVzZSBhcGkgdG8gZmluZCBwbGF5ZXJcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJ1bmFibGUgdG8gZmluZCBwbGF5ZXIgd2l0aCBjb3JyZXNwb25kaW5nIElEXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gYCR7QkFMTF9ET05UX0xJRV9VUkx9L3NlYXNvbl9hdmVyYWdlc2A7XG4gICAgY29uc3QgcGFyYW1zOiBvYmplY3QgPSB7XG4gICAgICBzZWFzb246IDIwMjEsXG4gICAgICBwbGF5ZXJfaWRzOiBbcGxheWVyX2lkXSxcbiAgICB9O1xuICAgIGNvbnN0IHsgZGF0YTogb3V0ZXJEYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7IHBhcmFtcyB9KTtcbiAgICBjb25zdCB7IGRhdGEgfTogeyBkYXRhOiBJUExBWUVSX1NUQVRTIH0gPSBvdXRlckRhdGE7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZGF0YSwgbWVzc2FnZTogXCJTdWNjZXNzXCIgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcbiJdfQ==
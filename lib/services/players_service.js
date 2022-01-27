"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerSeasonAverage = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _playerIds = require("../constants/playerIds");

var _constants = require("../constants");

var _getPlayerImageUrl = _interopRequireDefault(require("../common/get-player-image-url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPlayerSeasonAverage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var pName, player_id, nba_js_id, player_image_url, url, params, _yield$axios$get, outerData, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            pName = req.query.player_name;
            player_id = _playerIds.playerIds[pName.toLowerCase()];
            nba_js_id = _playerIds.NBA_JS_IDS[pName.toLowerCase()];

            if (player_id) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(500).send({
              message: "unable to find player with corresponding ID"
            }));

          case 6:
            player_image_url = (0, _getPlayerImageUrl["default"])(nba_js_id);
            url = "".concat(_constants.BALL_DONT_LIE_URL, "/season_averages");
            params = {
              season: 2021,
              player_ids: [player_id]
            };
            _context.next = 11;
            return _axios["default"].get(url, {
              params: params
            });

          case 11:
            _yield$axios$get = _context.sent;
            outerData = _yield$axios$get.data;
            data = outerData.data;
            return _context.abrupt("return", res.status(200).send({
              data: data,
              player_image_url: player_image_url,
              message: "Success"
            }));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function getPlayerSeasonAverage(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPlayerSeasonAverage = getPlayerSeasonAverage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsInJlcSIsInJlcyIsIm5leHQiLCJwTmFtZSIsInF1ZXJ5IiwicGxheWVyX25hbWUiLCJwbGF5ZXJfaWQiLCJwbGF5ZXJJZHMiLCJ0b0xvd2VyQ2FzZSIsIm5iYV9qc19pZCIsIk5CQV9KU19JRFMiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInBsYXllcl9pbWFnZV91cmwiLCJ1cmwiLCJCQUxMX0RPTlRfTElFX1VSTCIsInBhcmFtcyIsInNlYXNvbiIsInBsYXllcl9pZHMiLCJheGlvcyIsImdldCIsIm91dGVyRGF0YSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSxzQkFBc0I7QUFBQSxxRUFBRyxpQkFDcENDLEdBRG9DLEVBRXBDQyxHQUZvQyxFQUdwQ0MsSUFIb0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTTVCQyxZQUFBQSxLQU40QixHQU1wQkgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLFdBTlU7QUFRNUJDLFlBQUFBLFNBUjRCLEdBUVJDLHFCQUFVSixLQUFLLENBQUNLLFdBQU4sRUFBVixDQVJRO0FBUzVCQyxZQUFBQSxTQVQ0QixHQVNSQyxzQkFBV1AsS0FBSyxDQUFDSyxXQUFOLEVBQVgsQ0FUUTs7QUFBQSxnQkFVN0JGLFNBVjZCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVd6QkwsR0FBRyxDQUNQVSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFGRCxDQVh5Qjs7QUFBQTtBQWU1QkMsWUFBQUEsZ0JBZjRCLEdBZUQsbUNBQWtCTCxTQUFsQixDQWZDO0FBZ0I1Qk0sWUFBQUEsR0FoQjRCLGFBZ0JYQyw0QkFoQlc7QUFpQjVCQyxZQUFBQSxNQWpCNEIsR0FpQlg7QUFDckJDLGNBQUFBLE1BQU0sRUFBRSxJQURhO0FBRXJCQyxjQUFBQSxVQUFVLEVBQUUsQ0FBQ2IsU0FBRDtBQUZTLGFBakJXO0FBQUE7QUFBQSxtQkFxQkFjLGtCQUFNQyxHQUFOLENBQVVOLEdBQVYsRUFBZTtBQUFFRSxjQUFBQSxNQUFNLEVBQU5BO0FBQUYsYUFBZixDQXJCQTs7QUFBQTtBQUFBO0FBcUJwQkssWUFBQUEsU0FyQm9CLG9CQXFCMUJDLElBckIwQjtBQXNCMUJBLFlBQUFBLElBdEIwQixHQXNCUUQsU0F0QlIsQ0FzQjFCQyxJQXRCMEI7QUFBQSw2Q0F1QjNCdEIsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVcsY0FBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFULGNBQUFBLGdCQUFnQixFQUFoQkEsZ0JBQVI7QUFBMEJELGNBQUFBLE9BQU8sRUFBRTtBQUFuQyxhQUFyQixDQXZCMkI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBeUIzQlgsSUFBSSxhQXpCdUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdEJILHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxHQUE1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7IHBsYXllcklkcywgTkJBX0pTX0lEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvcGxheWVySWRzXCI7XG5pbXBvcnQgSVBMQVlFUl9TVEFUUyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGF5ZXJTdGF0cy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEJBTExfRE9OVF9MSUVfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGdldFBsYXllckltYWdlVXJsIGZyb20gXCIuLi9jb21tb24vZ2V0LXBsYXllci1pbWFnZS11cmxcIjtcblxuZXhwb3J0IGNvbnN0IGdldFBsYXllclNlYXNvbkF2ZXJhZ2UgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwTmFtZSA9IHJlcS5xdWVyeS5wbGF5ZXJfbmFtZSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCBwbGF5ZXJfaWQ6IE51bWJlciA9IHBsYXllcklkc1twTmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBjb25zdCBuYmFfanNfaWQ6IE51bWJlciA9IE5CQV9KU19JRFNbcE5hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKCFwbGF5ZXJfaWQpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJ1bmFibGUgdG8gZmluZCBwbGF5ZXIgd2l0aCBjb3JyZXNwb25kaW5nIElEXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXllcl9pbWFnZV91cmw6IHN0cmluZyA9IGdldFBsYXllckltYWdlVXJsKG5iYV9qc19pZCk7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgJHtCQUxMX0RPTlRfTElFX1VSTH0vc2Vhc29uX2F2ZXJhZ2VzYDtcbiAgICBjb25zdCBwYXJhbXM6IG9iamVjdCA9IHtcbiAgICAgIHNlYXNvbjogMjAyMSxcbiAgICAgIHBsYXllcl9pZHM6IFtwbGF5ZXJfaWRdLFxuICAgIH07XG4gICAgY29uc3QgeyBkYXRhOiBvdXRlckRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zIH0pO1xuICAgIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IElQTEFZRVJfU1RBVFMgfSA9IG91dGVyRGF0YTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkYXRhLCBwbGF5ZXJfaW1hZ2VfdXJsLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcbiJdfQ==
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerSeasonAverage = exports.getAllPlayers = void 0;

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

var getAllPlayers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var url, _yield$axios$get2, data, players;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            url = "http://data.nba.net/data/10s/prod/v1/2021/players.json";
            _context2.next = 4;
            return _axios["default"].get(url);

          case 4:
            _yield$axios$get2 = _context2.sent;
            data = _yield$axios$get2.data;
            players = data.league.standard;
            return _context2.abrupt("return", res.status(200).send({
              players: players,
              message: "Success"
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", next(_context2.t0));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getAllPlayers(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllPlayers = getAllPlayers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsInJlcSIsInJlcyIsIm5leHQiLCJwTmFtZSIsInF1ZXJ5IiwicGxheWVyX25hbWUiLCJwbGF5ZXJfaWQiLCJwbGF5ZXJJZHMiLCJ0b0xvd2VyQ2FzZSIsIm5iYV9qc19pZCIsIk5CQV9KU19JRFMiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInBsYXllcl9pbWFnZV91cmwiLCJ1cmwiLCJCQUxMX0RPTlRfTElFX1VSTCIsInBhcmFtcyIsInNlYXNvbiIsInBsYXllcl9pZHMiLCJheGlvcyIsImdldCIsIm91dGVyRGF0YSIsImRhdGEiLCJnZXRBbGxQbGF5ZXJzIiwicGxheWVycyIsImxlYWd1ZSIsInN0YW5kYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBR08sSUFBTUEsc0JBQXNCO0FBQUEscUVBQUcsaUJBQ3BDQyxHQURvQyxFQUVwQ0MsR0FGb0MsRUFHcENDLElBSG9DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU01QkMsWUFBQUEsS0FONEIsR0FNcEJILEdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxXQU5VO0FBUTVCQyxZQUFBQSxTQVI0QixHQVFSQyxxQkFBVUosS0FBSyxDQUFDSyxXQUFOLEVBQVYsQ0FSUTtBQVM1QkMsWUFBQUEsU0FUNEIsR0FTUkMsc0JBQVdQLEtBQUssQ0FBQ0ssV0FBTixFQUFYLENBVFE7O0FBQUEsZ0JBVTdCRixTQVY2QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FXekJMLEdBQUcsQ0FDUFUsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBRkQsQ0FYeUI7O0FBQUE7QUFlNUJDLFlBQUFBLGdCQWY0QixHQWVELG1DQUFrQkwsU0FBbEIsQ0FmQztBQWdCNUJNLFlBQUFBLEdBaEI0QixhQWdCWEMsNEJBaEJXO0FBaUI1QkMsWUFBQUEsTUFqQjRCLEdBaUJYO0FBQ3JCQyxjQUFBQSxNQUFNLEVBQUUsSUFEYTtBQUVyQkMsY0FBQUEsVUFBVSxFQUFFLENBQUNiLFNBQUQ7QUFGUyxhQWpCVztBQUFBO0FBQUEsbUJBcUJBYyxrQkFBTUMsR0FBTixDQUFVTixHQUFWLEVBQWU7QUFBRUUsY0FBQUEsTUFBTSxFQUFOQTtBQUFGLGFBQWYsQ0FyQkE7O0FBQUE7QUFBQTtBQXFCcEJLLFlBQUFBLFNBckJvQixvQkFxQjFCQyxJQXJCMEI7QUFzQjFCQSxZQUFBQSxJQXRCMEIsR0FzQlFELFNBdEJSLENBc0IxQkMsSUF0QjBCO0FBQUEsNkNBdUIzQnRCLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVXLGNBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRVCxjQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUFSO0FBQTBCRCxjQUFBQSxPQUFPLEVBQUU7QUFBbkMsYUFBckIsQ0F2QjJCOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQXlCM0JYLElBQUksYUF6QnVCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRCSCxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsR0FBNUI7Ozs7QUE2QkEsSUFBTXlCLGFBQWE7QUFBQSxzRUFBRyxrQkFDM0J4QixHQUQyQixFQUUzQkMsR0FGMkIsRUFHM0JDLElBSDJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1uQmEsWUFBQUEsR0FObUIsR0FPdkIsd0RBUHVCO0FBQUE7QUFBQSxtQkFRc0JLLGtCQUFNQyxHQUFOLENBQVVOLEdBQVYsQ0FSdEI7O0FBQUE7QUFBQTtBQVFqQlEsWUFBQUEsSUFSaUIscUJBUWpCQSxJQVJpQjtBQVNQRSxZQUFBQSxPQVRPLEdBU0tGLElBQUksQ0FBQ0csTUFUVixDQVNqQkMsUUFUaUI7QUFBQSw4Q0FVbEIxQixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFYSxjQUFBQSxPQUFPLEVBQVBBLE9BQUY7QUFBV1osY0FBQUEsT0FBTyxFQUFFO0FBQXBCLGFBQXJCLENBVmtCOztBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQVlsQlgsSUFBSSxjQVpjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJzQixhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3MsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHsgcGxheWVySWRzLCBOQkFfSlNfSURTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9wbGF5ZXJJZHNcIjtcbmltcG9ydCBJUExBWUVSX1NUQVRTIGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYXllclN0YXRzLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQkFMTF9ET05UX0xJRV9VUkwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgZ2V0UGxheWVySW1hZ2VVcmwgZnJvbSBcIi4uL2NvbW1vbi9nZXQtcGxheWVyLWltYWdlLXVybFwiO1xuaW1wb3J0IElBTExfUExBWUVSUyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9hbGxQbGF5ZXJzUmVzcG9uc2UuaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXJTZWFzb25BdmVyYWdlID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcE5hbWUgPSByZXEucXVlcnkucGxheWVyX25hbWUgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgcGxheWVyX2lkOiBOdW1iZXIgPSBwbGF5ZXJJZHNbcE5hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgY29uc3QgbmJhX2pzX2lkOiBOdW1iZXIgPSBOQkFfSlNfSURTW3BOYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICghcGxheWVyX2lkKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6IFwidW5hYmxlIHRvIGZpbmQgcGxheWVyIHdpdGggY29ycmVzcG9uZGluZyBJRFwiIH0pO1xuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJfaW1hZ2VfdXJsOiBzdHJpbmcgPSBnZXRQbGF5ZXJJbWFnZVVybChuYmFfanNfaWQpO1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gYCR7QkFMTF9ET05UX0xJRV9VUkx9L3NlYXNvbl9hdmVyYWdlc2A7XG4gICAgY29uc3QgcGFyYW1zOiBvYmplY3QgPSB7XG4gICAgICBzZWFzb246IDIwMjEsXG4gICAgICBwbGF5ZXJfaWRzOiBbcGxheWVyX2lkXSxcbiAgICB9O1xuICAgIGNvbnN0IHsgZGF0YTogb3V0ZXJEYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7IHBhcmFtcyB9KTtcbiAgICBjb25zdCB7IGRhdGEgfTogeyBkYXRhOiBJUExBWUVSX1NUQVRTIH0gPSBvdXRlckRhdGE7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZGF0YSwgcGxheWVyX2ltYWdlX3VybCwgbWVzc2FnZTogXCJTdWNjZXNzXCIgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQbGF5ZXJzID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPVxuICAgICAgXCJodHRwOi8vZGF0YS5uYmEubmV0L2RhdGEvMTBzL3Byb2QvdjEvMjAyMS9wbGF5ZXJzLmpzb25cIjtcbiAgICBjb25zdCB7IGRhdGEgfTogeyBkYXRhOiBJQUxMX1BMQVlFUlMgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIGNvbnN0IHsgc3RhbmRhcmQ6IHBsYXllcnMgfSA9IGRhdGEubGVhZ3VlO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHBsYXllcnMsIG1lc3NhZ2U6IFwiU3VjY2Vzc1wiIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV4dChlcnIpO1xuICB9XG59O1xuIl19
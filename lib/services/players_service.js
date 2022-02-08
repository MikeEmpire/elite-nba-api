"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerSeasonAverage = exports.getAllPlayers = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _playerIds = require("../constants/playerIds");

var _getPlayerImageUrl = _interopRequireDefault(require("../common/get-player-image-url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPlayerSeasonAverage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var pName, nba_js_id, player_image_url, url, _yield$axios$get, outerData, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            pName = req.query.player_name;
            nba_js_id = _playerIds.NBA_JS_IDS[pName.toLowerCase()];

            if (nba_js_id) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(500).send({
              message: "unable to find player with corresponding ID"
            }));

          case 5:
            player_image_url = (0, _getPlayerImageUrl["default"])(nba_js_id);
            url = "http://data.nba.net/prod/v1/2021/players/".concat(nba_js_id, "_profile.json");
            _context.next = 9;
            return _axios["default"].get(url);

          case 9:
            _yield$axios$get = _context.sent;
            outerData = _yield$axios$get.data;
            data = outerData.league;
            return _context.abrupt("return", res.status(200).send({
              data: data,
              player_image_url: player_image_url,
              message: "Success"
            }));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 18:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsInJlcSIsInJlcyIsIm5leHQiLCJwTmFtZSIsInF1ZXJ5IiwicGxheWVyX25hbWUiLCJuYmFfanNfaWQiLCJOQkFfSlNfSURTIiwidG9Mb3dlckNhc2UiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInBsYXllcl9pbWFnZV91cmwiLCJ1cmwiLCJheGlvcyIsImdldCIsIm91dGVyRGF0YSIsImRhdGEiLCJsZWFndWUiLCJnZXRBbGxQbGF5ZXJzIiwicGxheWVycyIsInN0YW5kYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBR08sSUFBTUEsc0JBQXNCO0FBQUEscUVBQUcsaUJBQ3BDQyxHQURvQyxFQUVwQ0MsR0FGb0MsRUFHcENDLElBSG9DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU01QkMsWUFBQUEsS0FONEIsR0FNcEJILEdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxXQU5VO0FBUTVCQyxZQUFBQSxTQVI0QixHQVFSQyxzQkFBV0osS0FBSyxDQUFDSyxXQUFOLEVBQVgsQ0FSUTs7QUFBQSxnQkFTN0JGLFNBVDZCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVV6QkwsR0FBRyxDQUNQUSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFGRCxDQVZ5Qjs7QUFBQTtBQWM1QkMsWUFBQUEsZ0JBZDRCLEdBY0QsbUNBQWtCTixTQUFsQixDQWRDO0FBZTVCTyxZQUFBQSxHQWY0QixzREFlOEJQLFNBZjlCO0FBQUE7QUFBQSxtQkFnQkFRLGtCQUFNQyxHQUFOLENBQVVGLEdBQVYsQ0FoQkE7O0FBQUE7QUFBQTtBQWdCcEJHLFlBQUFBLFNBaEJvQixvQkFnQjFCQyxJQWhCMEI7QUFpQmxCQSxZQUFBQSxJQWpCa0IsR0FpQmtCRCxTQWpCbEIsQ0FpQjFCRSxNQWpCMEI7QUFBQSw2Q0FrQjNCakIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRU8sY0FBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFMLGNBQUFBLGdCQUFnQixFQUFoQkEsZ0JBQVI7QUFBMEJELGNBQUFBLE9BQU8sRUFBRTtBQUFuQyxhQUFyQixDQWxCMkI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBb0IzQlQsSUFBSSxhQXBCdUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdEJILHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxHQUE1Qjs7OztBQXdCQSxJQUFNb0IsYUFBYTtBQUFBLHNFQUFHLGtCQUMzQm5CLEdBRDJCLEVBRTNCQyxHQUYyQixFQUczQkMsSUFIMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTW5CVyxZQUFBQSxHQU5tQixHQU92Qix3REFQdUI7QUFBQTtBQUFBLG1CQVFzQkMsa0JBQU1DLEdBQU4sQ0FBVUYsR0FBVixDQVJ0Qjs7QUFBQTtBQUFBO0FBUWpCSSxZQUFBQSxJQVJpQixxQkFRakJBLElBUmlCO0FBU1BHLFlBQUFBLE9BVE8sR0FTS0gsSUFBSSxDQUFDQyxNQVRWLENBU2pCRyxRQVRpQjtBQUFBLDhDQVVsQnBCLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVVLGNBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXVCxjQUFBQSxPQUFPLEVBQUU7QUFBcEIsYUFBckIsQ0FWa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBWWxCVCxJQUFJLGNBWmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYmlCLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHsgTkJBX0pTX0lEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvcGxheWVySWRzXCI7XG5pbXBvcnQgSVBMQVlFUl9TVEFUUyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGF5ZXJTdGF0cy5pbnRlcmZhY2VcIjtcbmltcG9ydCBnZXRQbGF5ZXJJbWFnZVVybCBmcm9tIFwiLi4vY29tbW9uL2dldC1wbGF5ZXItaW1hZ2UtdXJsXCI7XG5pbXBvcnQgSUFMTF9QTEFZRVJTIGZyb20gXCIuLi9pbnRlcmZhY2VzL2FsbFBsYXllcnNSZXNwb25zZS5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IGdldFBsYXllclNlYXNvbkF2ZXJhZ2UgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwTmFtZSA9IHJlcS5xdWVyeS5wbGF5ZXJfbmFtZSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCBuYmFfanNfaWQ6IE51bWJlciA9IE5CQV9KU19JRFNbcE5hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKCFuYmFfanNfaWQpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJ1bmFibGUgdG8gZmluZCBwbGF5ZXIgd2l0aCBjb3JyZXNwb25kaW5nIElEXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXllcl9pbWFnZV91cmw6IHN0cmluZyA9IGdldFBsYXllckltYWdlVXJsKG5iYV9qc19pZCk7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgaHR0cDovL2RhdGEubmJhLm5ldC9wcm9kL3YxLzIwMjEvcGxheWVycy8ke25iYV9qc19pZH1fcHJvZmlsZS5qc29uYDtcbiAgICBjb25zdCB7IGRhdGE6IG91dGVyRGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgY29uc3QgeyBsZWFndWU6IGRhdGEgfTogeyBsZWFndWU6IElQTEFZRVJfU1RBVFMgfSA9IG91dGVyRGF0YTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkYXRhLCBwbGF5ZXJfaW1hZ2VfdXJsLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFBsYXllcnMgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9XG4gICAgICBcImh0dHA6Ly9kYXRhLm5iYS5uZXQvZGF0YS8xMHMvcHJvZC92MS8yMDIxL3BsYXllcnMuanNvblwiO1xuICAgIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IElBTExfUExBWUVSUyB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgY29uc3QgeyBzdGFuZGFyZDogcGxheWVycyB9ID0gZGF0YS5sZWFndWU7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcGxheWVycywgbWVzc2FnZTogXCJTdWNjZXNzXCIgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXh0KGVycik7XG4gIH1cbn07XG4iXX0=
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
    var pName, nba_js_id, player_image_url, url, _yield$axios$get, outerData, stats;

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
            stats = outerData.league.standard.stats;
            return _context.abrupt("return", res.status(200).send({
              stats: stats,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsInJlcSIsInJlcyIsIm5leHQiLCJwTmFtZSIsInF1ZXJ5IiwicGxheWVyX25hbWUiLCJuYmFfanNfaWQiLCJOQkFfSlNfSURTIiwidG9Mb3dlckNhc2UiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInBsYXllcl9pbWFnZV91cmwiLCJ1cmwiLCJheGlvcyIsImdldCIsIm91dGVyRGF0YSIsImRhdGEiLCJzdGF0cyIsImxlYWd1ZSIsInN0YW5kYXJkIiwiZ2V0QWxsUGxheWVycyIsInBsYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFHTyxJQUFNQSxzQkFBc0I7QUFBQSxxRUFBRyxpQkFDcENDLEdBRG9DLEVBRXBDQyxHQUZvQyxFQUdwQ0MsSUFIb0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTTVCQyxZQUFBQSxLQU40QixHQU1wQkgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLFdBTlU7QUFRNUJDLFlBQUFBLFNBUjRCLEdBUVJDLHNCQUFXSixLQUFLLENBQUNLLFdBQU4sRUFBWCxDQVJROztBQUFBLGdCQVM3QkYsU0FUNkI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBVXpCTCxHQUFHLENBQ1BRLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUZELENBVnlCOztBQUFBO0FBYzVCQyxZQUFBQSxnQkFkNEIsR0FjRCxtQ0FBa0JOLFNBQWxCLENBZEM7QUFlNUJPLFlBQUFBLEdBZjRCLHNEQWU4QlAsU0FmOUI7QUFBQTtBQUFBLG1CQWdCQVEsa0JBQU1DLEdBQU4sQ0FBVUYsR0FBVixDQWhCQTs7QUFBQTtBQUFBO0FBZ0JwQkcsWUFBQUEsU0FoQm9CLG9CQWdCMUJDLElBaEIwQjtBQWlCMUJDLFlBQUFBLEtBakIwQixHQWlCVUYsU0FBUyxDQUFDRyxNQUFWLENBQWlCQyxRQWpCM0IsQ0FpQjFCRixLQWpCMEI7QUFBQSw2Q0FrQjNCakIsR0FBRyxDQUNQUSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRVEsY0FBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNOLGNBQUFBLGdCQUFnQixFQUFoQkEsZ0JBQVQ7QUFBMkJELGNBQUFBLE9BQU8sRUFBRTtBQUFwQyxhQUZELENBbEIyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FzQjNCVCxJQUFJLGFBdEJ1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0Qkgsc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEdBQTVCOzs7O0FBMEJBLElBQU1zQixhQUFhO0FBQUEsc0VBQUcsa0JBQzNCckIsR0FEMkIsRUFFM0JDLEdBRjJCLEVBRzNCQyxJQUgyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNbkJXLFlBQUFBLEdBTm1CLEdBT3ZCLHdEQVB1QjtBQUFBO0FBQUEsbUJBUXNCQyxrQkFBTUMsR0FBTixDQUFVRixHQUFWLENBUnRCOztBQUFBO0FBQUE7QUFRakJJLFlBQUFBLElBUmlCLHFCQVFqQkEsSUFSaUI7QUFTUEssWUFBQUEsT0FUTyxHQVNLTCxJQUFJLENBQUNFLE1BVFYsQ0FTakJDLFFBVGlCO0FBQUEsOENBVWxCbkIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVksY0FBQUEsT0FBTyxFQUFQQSxPQUFGO0FBQVdYLGNBQUFBLE9BQU8sRUFBRTtBQUFwQixhQUFyQixDQVZrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FZbEJULElBQUksY0FaYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFibUIsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyBOQkFfSlNfSURTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9wbGF5ZXJJZHNcIjtcbmltcG9ydCBJUExBWUVSX1NUQVRTIGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYXllclN0YXRzLmludGVyZmFjZVwiO1xuaW1wb3J0IGdldFBsYXllckltYWdlVXJsIGZyb20gXCIuLi9jb21tb24vZ2V0LXBsYXllci1pbWFnZS11cmxcIjtcbmltcG9ydCBJQUxMX1BMQVlFUlMgZnJvbSBcIi4uL2ludGVyZmFjZXMvYWxsUGxheWVyc1Jlc3BvbnNlLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSA9IGFzeW5jIChcbiAgcmVxOiBSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb25cbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBOYW1lID0gcmVxLnF1ZXJ5LnBsYXllcl9uYW1lIGFzIHN0cmluZztcblxuICAgIGNvbnN0IG5iYV9qc19pZDogTnVtYmVyID0gTkJBX0pTX0lEU1twTmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAoIW5iYV9qc19pZCkge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDUwMClcbiAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcInVuYWJsZSB0byBmaW5kIHBsYXllciB3aXRoIGNvcnJlc3BvbmRpbmcgSURcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgcGxheWVyX2ltYWdlX3VybDogc3RyaW5nID0gZ2V0UGxheWVySW1hZ2VVcmwobmJhX2pzX2lkKTtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwOi8vZGF0YS5uYmEubmV0L3Byb2QvdjEvMjAyMS9wbGF5ZXJzLyR7bmJhX2pzX2lkfV9wcm9maWxlLmpzb25gO1xuICAgIGNvbnN0IHsgZGF0YTogb3V0ZXJEYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICBjb25zdCB7IHN0YXRzIH06IHsgc3RhdHM6IElQTEFZRVJfU1RBVFMgfSA9IG91dGVyRGF0YS5sZWFndWUuc3RhbmRhcmQ7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cygyMDApXG4gICAgICAuc2VuZCh7IHN0YXRzLCBwbGF5ZXJfaW1hZ2VfdXJsLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFBsYXllcnMgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9XG4gICAgICBcImh0dHA6Ly9kYXRhLm5iYS5uZXQvZGF0YS8xMHMvcHJvZC92MS8yMDIxL3BsYXllcnMuanNvblwiO1xuICAgIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IElBTExfUExBWUVSUyB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgY29uc3QgeyBzdGFuZGFyZDogcGxheWVycyB9ID0gZGF0YS5sZWFndWU7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcGxheWVycywgbWVzc2FnZTogXCJTdWNjZXNzXCIgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXh0KGVycik7XG4gIH1cbn07XG4iXX0=
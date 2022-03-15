"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodaysGames = exports.gameTodaysGamesV2 = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _getTodaysDate = _interopRequireDefault(require("../common/get-todays-date"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getTodaysGames = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var queryDate, todaysDate, url, _yield$axios$get, data, dataCopy, i, hTeamId, vTeamId, hAdditionalInfo, vAdditionalInfo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            queryDate = req.query.date;
            todaysDate = (0, _getTodaysDate["default"])(queryDate);
            url = "https://data.nba.net/10s/prod/v1/".concat(todaysDate, "/scoreboard.json");
            _context.next = 6;
            return _axios["default"].get(url);

          case 6:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            // TODO: Consolidate hash map function below into external function / service
            dataCopy = JSON.parse(JSON.stringify(data));

            for (i = 0; i < data.games.length; i++) {
              hTeamId = dataCopy.games[i].hTeam.teamId;
              vTeamId = dataCopy.games[i].vTeam.teamId;
              hAdditionalInfo = _constants.TEAM_HASHMAP[hTeamId];
              vAdditionalInfo = _constants.TEAM_HASHMAP[vTeamId];
              dataCopy.games[i].vTeam.additionalInfo = vAdditionalInfo;
              dataCopy.games[i].hTeam.additionalInfo = hAdditionalInfo;
            }

            return _context.abrupt("return", res.status(200).send({
              data: dataCopy,
              message: "Hit!"
            }));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function getTodaysGames(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTodaysGames = getTodaysGames;

var gameTodaysGamesV2 = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var url, _yield$axios$get2, data, games;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            url = "https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json";
            _context2.next = 4;
            return _axios["default"].get(url);

          case 4:
            _yield$axios$get2 = _context2.sent;
            data = _yield$axios$get2.data;
            games = data.scoreboard.games;
            return _context2.abrupt("return", res.status(200).send({
              games: games
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

  return function gameTodaysGamesV2(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.gameTodaysGamesV2 = gameTodaysGamesV2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9nYW1lc19zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbImdldFRvZGF5c0dhbWVzIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5RGF0ZSIsInF1ZXJ5IiwiZGF0ZSIsInRvZGF5c0RhdGUiLCJ1cmwiLCJheGlvcyIsImdldCIsImRhdGEiLCJkYXRhQ29weSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImkiLCJnYW1lcyIsImxlbmd0aCIsImhUZWFtSWQiLCJoVGVhbSIsInRlYW1JZCIsInZUZWFtSWQiLCJ2VGVhbSIsImhBZGRpdGlvbmFsSW5mbyIsIlRFQU1fSEFTSE1BUCIsInZBZGRpdGlvbmFsSW5mbyIsImFkZGl0aW9uYWxJbmZvIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJnYW1lVG9kYXlzR2FtZXNWMiIsInNjb3JlYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7QUFJTyxJQUFNQSxjQUFjO0FBQUEscUVBQUcsaUJBQzVCQyxHQUQ0QixFQUU1QkMsR0FGNEIsRUFHNUJDLElBSDRCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1wQkMsWUFBQUEsU0FOb0IsR0FNQUgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLElBTlY7QUFPcEJDLFlBQUFBLFVBUG9CLEdBT1AsK0JBQWNILFNBQWQsQ0FQTztBQVFwQkksWUFBQUEsR0FSb0IsOENBUXNCRCxVQVJ0QjtBQUFBO0FBQUEsbUJBU21CRSxrQkFBTUMsR0FBTixDQUFVRixHQUFWLENBVG5COztBQUFBO0FBQUE7QUFTbEJHLFlBQUFBLElBVGtCLG9CQVNsQkEsSUFUa0I7QUFVMUI7QUFDTUMsWUFBQUEsUUFYb0IsR0FXR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSixJQUFmLENBQVgsQ0FYSDs7QUFZMUIsaUJBQVNLLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxNQUEvQixFQUF1Q0YsQ0FBQyxFQUF4QyxFQUE0QztBQUNwQ0csY0FBQUEsT0FEb0MsR0FDbEJQLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCSSxLQUFsQixDQUF3QkMsTUFETjtBQUVwQ0MsY0FBQUEsT0FGb0MsR0FFbEJWLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCTyxLQUFsQixDQUF3QkYsTUFGTjtBQUdwQ0csY0FBQUEsZUFIb0MsR0FHbEJDLHdCQUFhTixPQUFiLENBSGtCO0FBSXBDTyxjQUFBQSxlQUpvQyxHQUlsQkQsd0JBQWFILE9BQWIsQ0FKa0I7QUFLMUNWLGNBQUFBLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCTyxLQUFsQixDQUF3QkksY0FBeEIsR0FBeUNELGVBQXpDO0FBQ0FkLGNBQUFBLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCSSxLQUFsQixDQUF3Qk8sY0FBeEIsR0FBeUNILGVBQXpDO0FBQ0Q7O0FBbkJ5Qiw2Q0FvQm5CdEIsR0FBRyxDQUFDMEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVsQixjQUFBQSxJQUFJLEVBQUVDLFFBQVI7QUFBa0JrQixjQUFBQSxPQUFPLEVBQUU7QUFBM0IsYUFBckIsQ0FwQm1COztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQXNCbkIzQixJQUFJLGFBdEJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRILGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7Ozs7QUEwQkEsSUFBTStCLGlCQUFpQjtBQUFBLHNFQUFHLGtCQUMvQjlCLEdBRCtCLEVBRS9CQyxHQUYrQixFQUcvQkMsSUFIK0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXZCSyxZQUFBQSxHQU51QjtBQUFBO0FBQUEsbUJBT3VCQyxrQkFBTUMsR0FBTixDQUFVRixHQUFWLENBUHZCOztBQUFBO0FBQUE7QUFPckJHLFlBQUFBLElBUHFCLHFCQU9yQkEsSUFQcUI7QUFRckJNLFlBQUFBLEtBUnFCLEdBUVhOLElBQUksQ0FBQ3FCLFVBUk0sQ0FRckJmLEtBUnFCO0FBQUEsOENBU3RCZixHQUFHLENBQUMwQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVosY0FBQUEsS0FBSyxFQUFMQTtBQUFGLGFBQXJCLENBVHNCOztBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQVd0QmQsSUFBSSxjQVhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQjRCLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxHQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFJlc3BvbnNlLCBSZXF1ZXN0LCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgZ2V0VG9kYXlzRGF0ZSBmcm9tIFwiLi4vY29tbW9uL2dldC10b2RheXMtZGF0ZVwiO1xuaW1wb3J0IHsgVEVBTV9IQVNITUFQIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IElHQU1FX0RBVEEgZnJvbSBcIi4uL2ludGVyZmFjZXMvZ2FtZWluZm8uaW50ZXJmYWNlXCI7XG5pbXBvcnQgU0NIRURVTEVfUkVTUE9OU0UgZnJvbSBcIi4uL2ludGVyZmFjZXMvbmJhR2FtZUluZm8uaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRUb2RheXNHYW1lcyA9IGFzeW5jIChcbiAgcmVxOiBSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb25cbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHF1ZXJ5RGF0ZTogc3RyaW5nID0gcmVxLnF1ZXJ5LmRhdGUgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRvZGF5c0RhdGUgPSBnZXRUb2RheXNEYXRlKHF1ZXJ5RGF0ZSk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZGF0YS5uYmEubmV0LzEwcy9wcm9kL3YxLyR7dG9kYXlzRGF0ZX0vc2NvcmVib2FyZC5qc29uYDtcbiAgICBjb25zdCB7IGRhdGEgfTogeyBkYXRhOiBJR0FNRV9EQVRBIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICAvLyBUT0RPOiBDb25zb2xpZGF0ZSBoYXNoIG1hcCBmdW5jdGlvbiBiZWxvdyBpbnRvIGV4dGVybmFsIGZ1bmN0aW9uIC8gc2VydmljZVxuICAgIGNvbnN0IGRhdGFDb3B5OiBJR0FNRV9EQVRBID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmdhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBoVGVhbUlkOiBzdHJpbmcgPSBkYXRhQ29weS5nYW1lc1tpXS5oVGVhbS50ZWFtSWQgYXMgc3RyaW5nO1xuICAgICAgY29uc3QgdlRlYW1JZDogc3RyaW5nID0gZGF0YUNvcHkuZ2FtZXNbaV0udlRlYW0udGVhbUlkIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IGhBZGRpdGlvbmFsSW5mbyA9IFRFQU1fSEFTSE1BUFtoVGVhbUlkXTtcbiAgICAgIGNvbnN0IHZBZGRpdGlvbmFsSW5mbyA9IFRFQU1fSEFTSE1BUFt2VGVhbUlkXTtcbiAgICAgIGRhdGFDb3B5LmdhbWVzW2ldLnZUZWFtLmFkZGl0aW9uYWxJbmZvID0gdkFkZGl0aW9uYWxJbmZvO1xuICAgICAgZGF0YUNvcHkuZ2FtZXNbaV0uaFRlYW0uYWRkaXRpb25hbEluZm8gPSBoQWRkaXRpb25hbEluZm87XG4gICAgfVxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGRhdGE6IGRhdGFDb3B5LCBtZXNzYWdlOiBcIkhpdCFcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWVUb2RheXNHYW1lc1YyID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vY2RuLm5iYS5jb20vc3RhdGljL2pzb24vbGl2ZURhdGEvc2NvcmVib2FyZC90b2RheXNTY29yZWJvYXJkXzAwLmpzb25gO1xuICAgIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IFNDSEVEVUxFX1JFU1BPTlNFIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICBjb25zdCB7IGdhbWVzIH0gPSBkYXRhLnNjb3JlYm9hcmQ7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZ2FtZXMgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXh0KGVycik7XG4gIH1cbn07XG4iXX0=
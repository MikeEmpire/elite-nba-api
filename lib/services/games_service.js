"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodaysGames = exports.getGameStats = exports.gameTodaysGamesV2 = void 0;

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

var getGameStats = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var gameStatus, _req$query, date, code, url;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            gameStatus = "";
            _req$query = req.query, date = _req$query.date, code = _req$query.code;
            url = "https://data.nba.net/10s/prod/v1/".concat(date, "/").concat(code, "_boxscore.json");
            return _context3.abrupt("return", _axios["default"].get(url).then(function (schedule) {
              if (schedule.status !== 200) {
                return res.status(400).send({
                  message: "error!"
                });
              }

              var gameData = schedule.data;
              var gamePeriod = gameData.basicGameData.period.current;

              if (gamePeriod !== 0) {
                var expandedUrl = "https://cdn.nba.com/static/json/liveData/boxscore/boxscore_".concat(code, ".json");
                return _axios["default"].get(expandedUrl).then(function (boxscore) {
                  return res.status(200).send({
                    basicData: gameData,
                    boxscore: boxscore
                  });
                });
              }

              return res.status(200).send({
                basicData: gameData
              });
            }));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getGameStats(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getGameStats = getGameStats;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9nYW1lc19zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbImdldFRvZGF5c0dhbWVzIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5RGF0ZSIsInF1ZXJ5IiwiZGF0ZSIsInRvZGF5c0RhdGUiLCJ1cmwiLCJheGlvcyIsImdldCIsImRhdGEiLCJkYXRhQ29weSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImkiLCJnYW1lcyIsImxlbmd0aCIsImhUZWFtSWQiLCJoVGVhbSIsInRlYW1JZCIsInZUZWFtSWQiLCJ2VGVhbSIsImhBZGRpdGlvbmFsSW5mbyIsIlRFQU1fSEFTSE1BUCIsInZBZGRpdGlvbmFsSW5mbyIsImFkZGl0aW9uYWxJbmZvIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJnYW1lVG9kYXlzR2FtZXNWMiIsInNjb3JlYm9hcmQiLCJnZXRHYW1lU3RhdHMiLCJnYW1lU3RhdHVzIiwiY29kZSIsInRoZW4iLCJzY2hlZHVsZSIsImdhbWVEYXRhIiwiZ2FtZVBlcmlvZCIsImJhc2ljR2FtZURhdGEiLCJwZXJpb2QiLCJjdXJyZW50IiwiZXhwYW5kZWRVcmwiLCJib3hzY29yZSIsImJhc2ljRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7OztBQUtPLElBQU1BLGNBQWM7QUFBQSxxRUFBRyxpQkFDNUJDLEdBRDRCLEVBRTVCQyxHQUY0QixFQUc1QkMsSUFINEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXBCQyxZQUFBQSxTQU5vQixHQU1BSCxHQUFHLENBQUNJLEtBQUosQ0FBVUMsSUFOVjtBQU9wQkMsWUFBQUEsVUFQb0IsR0FPUCwrQkFBY0gsU0FBZCxDQVBPO0FBUXBCSSxZQUFBQSxHQVJvQiw4Q0FRc0JELFVBUnRCO0FBQUE7QUFBQSxtQkFTbUJFLGtCQUFNQyxHQUFOLENBQVVGLEdBQVYsQ0FUbkI7O0FBQUE7QUFBQTtBQVNsQkcsWUFBQUEsSUFUa0Isb0JBU2xCQSxJQVRrQjtBQVUxQjtBQUNNQyxZQUFBQSxRQVhvQixHQVdHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVKLElBQWYsQ0FBWCxDQVhIOztBQVkxQixpQkFBU0ssQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVdDLE1BQS9CLEVBQXVDRixDQUFDLEVBQXhDLEVBQTRDO0FBQ3BDRyxjQUFBQSxPQURvQyxHQUNsQlAsUUFBUSxDQUFDSyxLQUFULENBQWVELENBQWYsRUFBa0JJLEtBQWxCLENBQXdCQyxNQUROO0FBRXBDQyxjQUFBQSxPQUZvQyxHQUVsQlYsUUFBUSxDQUFDSyxLQUFULENBQWVELENBQWYsRUFBa0JPLEtBQWxCLENBQXdCRixNQUZOO0FBR3BDRyxjQUFBQSxlQUhvQyxHQUdsQkMsd0JBQWFOLE9BQWIsQ0FIa0I7QUFJcENPLGNBQUFBLGVBSm9DLEdBSWxCRCx3QkFBYUgsT0FBYixDQUprQjtBQUsxQ1YsY0FBQUEsUUFBUSxDQUFDSyxLQUFULENBQWVELENBQWYsRUFBa0JPLEtBQWxCLENBQXdCSSxjQUF4QixHQUF5Q0QsZUFBekM7QUFDQWQsY0FBQUEsUUFBUSxDQUFDSyxLQUFULENBQWVELENBQWYsRUFBa0JJLEtBQWxCLENBQXdCTyxjQUF4QixHQUF5Q0gsZUFBekM7QUFDRDs7QUFuQnlCLDZDQW9CbkJ0QixHQUFHLENBQUMwQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRWxCLGNBQUFBLElBQUksRUFBRUMsUUFBUjtBQUFrQmtCLGNBQUFBLE9BQU8sRUFBRTtBQUEzQixhQUFyQixDQXBCbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBc0JuQjNCLElBQUksYUF0QmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZEgsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQjs7OztBQTBCQSxJQUFNK0IsaUJBQWlCO0FBQUEsc0VBQUcsa0JBQy9COUIsR0FEK0IsRUFFL0JDLEdBRitCLEVBRy9CQyxJQUgrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNdkJLLFlBQUFBLEdBTnVCO0FBQUE7QUFBQSxtQkFPdUJDLGtCQUFNQyxHQUFOLENBQVVGLEdBQVYsQ0FQdkI7O0FBQUE7QUFBQTtBQU9yQkcsWUFBQUEsSUFQcUIscUJBT3JCQSxJQVBxQjtBQVFyQk0sWUFBQUEsS0FScUIsR0FRWE4sSUFBSSxDQUFDcUIsVUFSTSxDQVFyQmYsS0FScUI7QUFBQSw4Q0FTdEJmLEdBQUcsQ0FBQzBCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFWixjQUFBQSxLQUFLLEVBQUxBO0FBQUYsYUFBckIsQ0FUc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBV3RCZCxJQUFJLGNBWGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWpCNEIsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEdBQXZCOzs7O0FBbUJBLElBQU1FLFlBQVk7QUFBQSxzRUFBRyxrQkFDMUJoQyxHQUQwQixFQUUxQkMsR0FGMEIsRUFHMUJDLElBSDBCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1wQitCLFlBQUFBLFVBTm9CLEdBTUMsRUFORDtBQUFBLHlCQU9EakMsR0FBRyxDQUFDSSxLQVBILEVBT2hCQyxJQVBnQixjQU9oQkEsSUFQZ0IsRUFPVjZCLElBUFUsY0FPVkEsSUFQVTtBQVFsQjNCLFlBQUFBLEdBUmtCLDhDQVF3QkYsSUFSeEIsY0FRZ0M2QixJQVJoQztBQUFBLDhDQVNqQjFCLGtCQUFNQyxHQUFOLENBQVVGLEdBQVYsRUFBZTRCLElBQWYsQ0FBb0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ3ZDLGtCQUFJQSxRQUFRLENBQUNULE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsdUJBQU8xQixHQUFHLENBQUMwQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFyQixDQUFQO0FBQ0Q7O0FBQ0Qsa0JBQU1RLFFBQXdCLEdBQUdELFFBQVEsQ0FBQzFCLElBQTFDO0FBRUEsa0JBQU00QixVQUFVLEdBQUdELFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QkMsTUFBdkIsQ0FBOEJDLE9BQWpEOztBQUNBLGtCQUFJSCxVQUFVLEtBQUssQ0FBbkIsRUFBc0I7QUFDcEIsb0JBQU1JLFdBQVcsd0VBQWlFUixJQUFqRSxVQUFqQjtBQUNBLHVCQUFPMUIsa0JBQU1DLEdBQU4sQ0FBVWlDLFdBQVYsRUFBdUJQLElBQXZCLENBQTRCLFVBQUNRLFFBQUQsRUFBYztBQUMvQyx5QkFBTzFDLEdBQUcsQ0FBQzBCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFZ0Isb0JBQUFBLFNBQVMsRUFBRVAsUUFBYjtBQUF1Qk0sb0JBQUFBLFFBQVEsRUFBUkE7QUFBdkIsbUJBQXJCLENBQVA7QUFDRCxpQkFGTSxDQUFQO0FBR0Q7O0FBRUQscUJBQU8xQyxHQUFHLENBQUMwQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRWdCLGdCQUFBQSxTQUFTLEVBQUVQO0FBQWIsZUFBckIsQ0FBUDtBQUNELGFBZk0sQ0FUaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBMEJqQm5DLElBQUksY0ExQmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWjhCLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBSZXNwb25zZSwgUmVxdWVzdCwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IGdldFRvZGF5c0RhdGUgZnJvbSBcIi4uL2NvbW1vbi9nZXQtdG9kYXlzLWRhdGVcIjtcbmltcG9ydCB7IFRFQU1fSEFTSE1BUCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBHQU1FX0JPWF9TQ09SRSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9nYW1lQm94U2NvcmUuaW50ZXJmYWNlXCI7XG5pbXBvcnQgSUdBTUVfREFUQSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9nYW1laW5mby5pbnRlcmZhY2VcIjtcbmltcG9ydCBTQ0hFRFVMRV9SRVNQT05TRSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9uYmFHYW1lSW5mby5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IGdldFRvZGF5c0dhbWVzID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVlcnlEYXRlOiBzdHJpbmcgPSByZXEucXVlcnkuZGF0ZSBhcyBzdHJpbmc7XG4gICAgY29uc3QgdG9kYXlzRGF0ZSA9IGdldFRvZGF5c0RhdGUocXVlcnlEYXRlKTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kYXRhLm5iYS5uZXQvMTBzL3Byb2QvdjEvJHt0b2RheXNEYXRlfS9zY29yZWJvYXJkLmpzb25gO1xuICAgIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IElHQU1FX0RBVEEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIC8vIFRPRE86IENvbnNvbGlkYXRlIGhhc2ggbWFwIGZ1bmN0aW9uIGJlbG93IGludG8gZXh0ZXJuYWwgZnVuY3Rpb24gLyBzZXJ2aWNlXG4gICAgY29uc3QgZGF0YUNvcHk6IElHQU1FX0RBVEEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZ2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGhUZWFtSWQ6IHN0cmluZyA9IGRhdGFDb3B5LmdhbWVzW2ldLmhUZWFtLnRlYW1JZCBhcyBzdHJpbmc7XG4gICAgICBjb25zdCB2VGVhbUlkOiBzdHJpbmcgPSBkYXRhQ29weS5nYW1lc1tpXS52VGVhbS50ZWFtSWQgYXMgc3RyaW5nO1xuICAgICAgY29uc3QgaEFkZGl0aW9uYWxJbmZvID0gVEVBTV9IQVNITUFQW2hUZWFtSWRdO1xuICAgICAgY29uc3QgdkFkZGl0aW9uYWxJbmZvID0gVEVBTV9IQVNITUFQW3ZUZWFtSWRdO1xuICAgICAgZGF0YUNvcHkuZ2FtZXNbaV0udlRlYW0uYWRkaXRpb25hbEluZm8gPSB2QWRkaXRpb25hbEluZm87XG4gICAgICBkYXRhQ29weS5nYW1lc1tpXS5oVGVhbS5hZGRpdGlvbmFsSW5mbyA9IGhBZGRpdGlvbmFsSW5mbztcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZGF0YTogZGF0YUNvcHksIG1lc3NhZ2U6IFwiSGl0IVwiIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZVRvZGF5c0dhbWVzVjIgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jZG4ubmJhLmNvbS9zdGF0aWMvanNvbi9saXZlRGF0YS9zY29yZWJvYXJkL3RvZGF5c1Njb3JlYm9hcmRfMDAuanNvbmA7XG4gICAgY29uc3QgeyBkYXRhIH06IHsgZGF0YTogU0NIRURVTEVfUkVTUE9OU0UgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIGNvbnN0IHsgZ2FtZXMgfSA9IGRhdGEuc2NvcmVib2FyZDtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBnYW1lcyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcblxudHlwZSBHYW1lUGFyYW1zID0ge1xuICBkYXRlOiBTdHJpbmc7XG4gIGNvZGU6IFN0cmluZztcbn07XG5leHBvcnQgY29uc3QgZ2V0R2FtZVN0YXRzID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3Q8e30sIHt9LCB7fSwgR2FtZVBhcmFtcz4sXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGdhbWVTdGF0dXM6IFN0cmluZyA9IFwiXCI7XG4gICAgY29uc3QgeyBkYXRlLCBjb2RlIH0gPSByZXEucXVlcnk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZGF0YS5uYmEubmV0LzEwcy9wcm9kL3YxLyR7ZGF0ZX0vJHtjb2RlfV9ib3hzY29yZS5qc29uYDtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCkudGhlbigoc2NoZWR1bGUpID0+IHtcbiAgICAgIGlmIChzY2hlZHVsZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcImVycm9yIVwiIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgZ2FtZURhdGE6IEdBTUVfQk9YX1NDT1JFID0gc2NoZWR1bGUuZGF0YTtcblxuICAgICAgY29uc3QgZ2FtZVBlcmlvZCA9IGdhbWVEYXRhLmJhc2ljR2FtZURhdGEucGVyaW9kLmN1cnJlbnQ7XG4gICAgICBpZiAoZ2FtZVBlcmlvZCAhPT0gMCkge1xuICAgICAgICBjb25zdCBleHBhbmRlZFVybCA9IGBodHRwczovL2Nkbi5uYmEuY29tL3N0YXRpYy9qc29uL2xpdmVEYXRhL2JveHNjb3JlL2JveHNjb3JlXyR7Y29kZX0uanNvbmA7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoZXhwYW5kZWRVcmwpLnRoZW4oKGJveHNjb3JlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgYmFzaWNEYXRhOiBnYW1lRGF0YSwgYm94c2NvcmUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBiYXNpY0RhdGE6IGdhbWVEYXRhIH0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV4dChlcnIpO1xuICB9XG59O1xuIl19
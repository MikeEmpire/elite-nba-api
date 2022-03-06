"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodaysGames = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9nYW1lc19zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbImdldFRvZGF5c0dhbWVzIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5RGF0ZSIsInF1ZXJ5IiwiZGF0ZSIsInRvZGF5c0RhdGUiLCJ1cmwiLCJheGlvcyIsImdldCIsImRhdGEiLCJkYXRhQ29weSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImkiLCJnYW1lcyIsImxlbmd0aCIsImhUZWFtSWQiLCJoVGVhbSIsInRlYW1JZCIsInZUZWFtSWQiLCJ2VGVhbSIsImhBZGRpdGlvbmFsSW5mbyIsIlRFQU1fSEFTSE1BUCIsInZBZGRpdGlvbmFsSW5mbyIsImFkZGl0aW9uYWxJbmZvIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7QUFHTyxJQUFNQSxjQUFjO0FBQUEscUVBQUcsaUJBQzVCQyxHQUQ0QixFQUU1QkMsR0FGNEIsRUFHNUJDLElBSDRCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1wQkMsWUFBQUEsU0FOb0IsR0FNQUgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLElBTlY7QUFPcEJDLFlBQUFBLFVBUG9CLEdBT1AsK0JBQWNILFNBQWQsQ0FQTztBQVFwQkksWUFBQUEsR0FSb0IsOENBUXNCRCxVQVJ0QjtBQUFBO0FBQUEsbUJBU21CRSxrQkFBTUMsR0FBTixDQUFVRixHQUFWLENBVG5COztBQUFBO0FBQUE7QUFTbEJHLFlBQUFBLElBVGtCLG9CQVNsQkEsSUFUa0I7QUFVMUI7QUFDTUMsWUFBQUEsUUFYb0IsR0FXR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSixJQUFmLENBQVgsQ0FYSDs7QUFZMUIsaUJBQVNLLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxNQUEvQixFQUF1Q0YsQ0FBQyxFQUF4QyxFQUE0QztBQUNwQ0csY0FBQUEsT0FEb0MsR0FDbEJQLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCSSxLQUFsQixDQUF3QkMsTUFETjtBQUVwQ0MsY0FBQUEsT0FGb0MsR0FFbEJWLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCTyxLQUFsQixDQUF3QkYsTUFGTjtBQUdwQ0csY0FBQUEsZUFIb0MsR0FHbEJDLHdCQUFhTixPQUFiLENBSGtCO0FBSXBDTyxjQUFBQSxlQUpvQyxHQUlsQkQsd0JBQWFILE9BQWIsQ0FKa0I7QUFLMUNWLGNBQUFBLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCTyxLQUFsQixDQUF3QkksY0FBeEIsR0FBeUNELGVBQXpDO0FBQ0FkLGNBQUFBLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRCxDQUFmLEVBQWtCSSxLQUFsQixDQUF3Qk8sY0FBeEIsR0FBeUNILGVBQXpDO0FBQ0Q7O0FBbkJ5Qiw2Q0FvQm5CdEIsR0FBRyxDQUFDMEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVsQixjQUFBQSxJQUFJLEVBQUVDLFFBQVI7QUFBa0JrQixjQUFBQSxPQUFPLEVBQUU7QUFBM0IsYUFBckIsQ0FwQm1COztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQXNCbkIzQixJQUFJLGFBdEJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRILGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBSZXNwb25zZSwgUmVxdWVzdCwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IGdldFRvZGF5c0RhdGUgZnJvbSBcIi4uL2NvbW1vbi9nZXQtdG9kYXlzLWRhdGVcIjtcbmltcG9ydCB7IFRFQU1fSEFTSE1BUCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBJR0FNRV9EQVRBIGZyb20gXCIuLi9pbnRlcmZhY2VzL2dhbWVpbmZvLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0VG9kYXlzR2FtZXMgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWVyeURhdGU6IHN0cmluZyA9IHJlcS5xdWVyeS5kYXRlIGFzIHN0cmluZztcbiAgICBjb25zdCB0b2RheXNEYXRlID0gZ2V0VG9kYXlzRGF0ZShxdWVyeURhdGUpO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2RhdGEubmJhLm5ldC8xMHMvcHJvZC92MS8ke3RvZGF5c0RhdGV9L3Njb3JlYm9hcmQuanNvbmA7XG4gICAgY29uc3QgeyBkYXRhIH06IHsgZGF0YTogSUdBTUVfREFUQSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgLy8gVE9ETzogQ29uc29saWRhdGUgaGFzaCBtYXAgZnVuY3Rpb24gYmVsb3cgaW50byBleHRlcm5hbCBmdW5jdGlvbiAvIHNlcnZpY2VcbiAgICBjb25zdCBkYXRhQ29weTogSUdBTUVfREFUQSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5nYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaFRlYW1JZDogc3RyaW5nID0gZGF0YUNvcHkuZ2FtZXNbaV0uaFRlYW0udGVhbUlkIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IHZUZWFtSWQ6IHN0cmluZyA9IGRhdGFDb3B5LmdhbWVzW2ldLnZUZWFtLnRlYW1JZCBhcyBzdHJpbmc7XG4gICAgICBjb25zdCBoQWRkaXRpb25hbEluZm8gPSBURUFNX0hBU0hNQVBbaFRlYW1JZF07XG4gICAgICBjb25zdCB2QWRkaXRpb25hbEluZm8gPSBURUFNX0hBU0hNQVBbdlRlYW1JZF07XG4gICAgICBkYXRhQ29weS5nYW1lc1tpXS52VGVhbS5hZGRpdGlvbmFsSW5mbyA9IHZBZGRpdGlvbmFsSW5mbztcbiAgICAgIGRhdGFDb3B5LmdhbWVzW2ldLmhUZWFtLmFkZGl0aW9uYWxJbmZvID0gaEFkZGl0aW9uYWxJbmZvO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkYXRhOiBkYXRhQ29weSwgbWVzc2FnZTogXCJIaXQhXCIgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXh0KGVycik7XG4gIH1cbn07XG4iXX0=
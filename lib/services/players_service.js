"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerSeasonAverage = exports.getAllPlayers = exports.gameLastTenGameStats = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _playerIds = require("../constants/playerIds");

var _getPlayerImageUrl = _interopRequireDefault(require("../common/get-player-image-url"));

var _sanitizeQueryString = _interopRequireDefault(require("../common/sanitize-query-string"));

var _sanitizeTableText = _interopRequireDefault(require("../common/sanitize-table-text"));

var _genFoxUrl = _interopRequireDefault(require("../common/gen-fox-url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            nba_js_id = _playerIds.NBA_JS_IDS[(0, _sanitizeQueryString["default"])(pName)];

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

var gameLastTenGameStats = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var firstName, lastName, fName, lName, url, cheerioRes, $, games, headers, _tableSelector;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            firstName = req.query.first_name;
            lastName = req.query.last_name;

            if (!(!firstName || !lastName)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(500).send({
              message: "Please provide the player's name "
            }));

          case 5:
            fName = (0, _sanitizeQueryString["default"])(firstName);
            lName = (0, _sanitizeQueryString["default"])(lastName);
            url = (0, _genFoxUrl["default"])(fName, lName);
            _context3.next = 10;
            return _requestPromise["default"].get(url);

          case 10:
            cheerioRes = _context3.sent;
            $ = _cheerio["default"].load(cheerioRes);
            games = [];
            headers = ["date", "opp", "min", "pts", "fg", "3fg", "ft", "OffReb", "DefReb", "Reb", "Ast", "Stl", "Blk", "PF", "TO", "+/-"];
            _tableSelector = "#__layout > div > div.fscom-main-content > div.gamelog-full > div.table-wrapper-container.bifrost-table.carousel-wrapper > div.table-wrapper.carousel-container.table-carousel > div > table > tbody > tr";
            $(_tableSelector).each(function (_, e) {
              var _rows = $(e).find("td");

              var dataObj = {
                date: "",
                opp: "",
                min: "",
                pts: "",
                fg: "",
                "3fg": "",
                ft: "",
                OffReb: "",
                DefReb: "",
                Reb: "",
                Ast: "",
                Stl: "",
                Blk: "",
                PF: "",
                TO: "",
                "+/-": ""
              };
              $(_rows).each(function (index, e) {
                var objKey = headers[index];

                var _cheerioText = $(e).text().replace(/\s\s+/g, " ").trim();

                var _text = (0, _sanitizeTableText["default"])(_cheerioText);

                dataObj = _objectSpread(_objectSpread({}, dataObj), {}, _defineProperty({}, objKey, _text));
              });
              games.push(dataObj);
            });
            return _context3.abrupt("return", res.status(200).send({
              gamelog: games,
              message: "Success"
            }));

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 19]]);
  }));

  return function gameLastTenGameStats(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.gameLastTenGameStats = gameLastTenGameStats;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsInJlcSIsInJlcyIsIm5leHQiLCJwTmFtZSIsInF1ZXJ5IiwicGxheWVyX25hbWUiLCJuYmFfanNfaWQiLCJOQkFfSlNfSURTIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJwbGF5ZXJfaW1hZ2VfdXJsIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJvdXRlckRhdGEiLCJkYXRhIiwic3RhdHMiLCJsZWFndWUiLCJzdGFuZGFyZCIsImdldEFsbFBsYXllcnMiLCJwbGF5ZXJzIiwiZ2FtZUxhc3RUZW5HYW1lU3RhdHMiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdE5hbWUiLCJsYXN0X25hbWUiLCJmTmFtZSIsImxOYW1lIiwicmVxdWVzdFAiLCJjaGVlcmlvUmVzIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZ2FtZXMiLCJoZWFkZXJzIiwiX3RhYmxlU2VsZWN0b3IiLCJlYWNoIiwiXyIsImUiLCJfcm93cyIsImZpbmQiLCJkYXRhT2JqIiwiZGF0ZSIsIm9wcCIsIm1pbiIsInB0cyIsImZnIiwiZnQiLCJPZmZSZWIiLCJEZWZSZWIiLCJSZWIiLCJBc3QiLCJTdGwiLCJCbGsiLCJQRiIsIlRPIiwiaW5kZXgiLCJvYmpLZXkiLCJfY2hlZXJpb1RleHQiLCJ0ZXh0IiwicmVwbGFjZSIsInRyaW0iLCJfdGV4dCIsInB1c2giLCJnYW1lbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsc0JBQXNCO0FBQUEscUVBQUcsaUJBQ3BDQyxHQURvQyxFQUVwQ0MsR0FGb0MsRUFHcENDLElBSG9DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU01QkMsWUFBQUEsS0FONEIsR0FNcEJILEdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxXQU5VO0FBUTVCQyxZQUFBQSxTQVI0QixHQVFSQyxzQkFBVyxxQ0FBb0JKLEtBQXBCLENBQVgsQ0FSUTs7QUFBQSxnQkFTN0JHLFNBVDZCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVV6QkwsR0FBRyxDQUNQTyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFGRCxDQVZ5Qjs7QUFBQTtBQWM1QkMsWUFBQUEsZ0JBZDRCLEdBY0QsbUNBQWtCTCxTQUFsQixDQWRDO0FBZTVCTSxZQUFBQSxHQWY0QixzREFlOEJOLFNBZjlCO0FBQUE7QUFBQSxtQkFnQkFPLGtCQUFNQyxHQUFOLENBQVVGLEdBQVYsQ0FoQkE7O0FBQUE7QUFBQTtBQWdCcEJHLFlBQUFBLFNBaEJvQixvQkFnQjFCQyxJQWhCMEI7QUFpQjFCQyxZQUFBQSxLQWpCMEIsR0FpQlVGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQkMsUUFqQjNCLENBaUIxQkYsS0FqQjBCO0FBQUEsNkNBa0IzQmhCLEdBQUcsQ0FDUE8sTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVRLGNBQUFBLEtBQUssRUFBTEEsS0FBRjtBQUFTTixjQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUFUO0FBQTJCRCxjQUFBQSxPQUFPLEVBQUU7QUFBcEMsYUFGRCxDQWxCMkI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBc0IzQlIsSUFBSSxhQXRCdUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdEJILHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxHQUE1Qjs7OztBQTBCQSxJQUFNcUIsYUFBYTtBQUFBLHNFQUFHLGtCQUMzQnBCLEdBRDJCLEVBRTNCQyxHQUYyQixFQUczQkMsSUFIMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTW5CVSxZQUFBQSxHQU5tQixHQU92Qix3REFQdUI7QUFBQTtBQUFBLG1CQVFzQkMsa0JBQU1DLEdBQU4sQ0FBVUYsR0FBVixDQVJ0Qjs7QUFBQTtBQUFBO0FBUWpCSSxZQUFBQSxJQVJpQixxQkFRakJBLElBUmlCO0FBU1BLLFlBQUFBLE9BVE8sR0FTS0wsSUFBSSxDQUFDRSxNQVRWLENBU2pCQyxRQVRpQjtBQUFBLDhDQVVsQmxCLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVZLGNBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXWCxjQUFBQSxPQUFPLEVBQUU7QUFBcEIsYUFBckIsQ0FWa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBWWxCUixJQUFJLGNBWmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYmtCLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7Ozs7QUFnQkEsSUFBTUUsb0JBQW9CO0FBQUEsc0VBQUcsa0JBQ2xDdEIsR0FEa0MsRUFFbENDLEdBRmtDLEVBR2xDQyxJQUhrQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNMUJxQixZQUFBQSxTQU4wQixHQU1kdkIsR0FBRyxDQUFDSSxLQUFKLENBQVVvQixVQU5JO0FBTzFCQyxZQUFBQSxRQVAwQixHQU9mekIsR0FBRyxDQUFDSSxLQUFKLENBQVVzQixTQVBLOztBQUFBLGtCQVE1QixDQUFDSCxTQUFELElBQWMsQ0FBQ0UsUUFSYTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FTdkJ4QixHQUFHLENBQ1BPLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUZELENBVHVCOztBQUFBO0FBYTFCaUIsWUFBQUEsS0FiMEIsR0FhbEIscUNBQW9CSixTQUFwQixDQWJrQjtBQWMxQkssWUFBQUEsS0FkMEIsR0FjbEIscUNBQW9CSCxRQUFwQixDQWRrQjtBQWUxQmIsWUFBQUEsR0FmMEIsR0FlWiwyQkFBVWUsS0FBVixFQUFpQkMsS0FBakIsQ0FmWTtBQUFBO0FBQUEsbUJBZ0JQQywyQkFBU2YsR0FBVCxDQUFhRixHQUFiLENBaEJPOztBQUFBO0FBZ0IxQmtCLFlBQUFBLFVBaEIwQjtBQWlCMUJDLFlBQUFBLENBakIwQixHQWlCdEJDLG9CQUFRQyxJQUFSLENBQWFILFVBQWIsQ0FqQnNCO0FBa0IxQkksWUFBQUEsS0FsQjBCLEdBa0JDLEVBbEJEO0FBbUIxQkMsWUFBQUEsT0FuQjBCLEdBbUJELENBQzdCLE1BRDZCLEVBRTdCLEtBRjZCLEVBRzdCLEtBSDZCLEVBSTdCLEtBSjZCLEVBSzdCLElBTDZCLEVBTTdCLEtBTjZCLEVBTzdCLElBUDZCLEVBUTdCLFFBUjZCLEVBUzdCLFFBVDZCLEVBVTdCLEtBVjZCLEVBVzdCLEtBWDZCLEVBWTdCLEtBWjZCLEVBYTdCLEtBYjZCLEVBYzdCLElBZDZCLEVBZTdCLElBZjZCLEVBZ0I3QixLQWhCNkIsQ0FuQkM7QUFxQzFCQyxZQUFBQSxjQXJDMEIsR0FzQzlCLDJNQXRDOEI7QUF1Q2hDTCxZQUFBQSxDQUFDLENBQUNLLGNBQUQsQ0FBRCxDQUFrQkMsSUFBbEIsQ0FBdUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDL0Isa0JBQU1DLEtBQUssR0FBR1QsQ0FBQyxDQUFDUSxDQUFELENBQUQsQ0FBS0UsSUFBTCxDQUFVLElBQVYsQ0FBZDs7QUFDQSxrQkFBSUMsT0FBd0IsR0FBRztBQUM3QkMsZ0JBQUFBLElBQUksRUFBRSxFQUR1QjtBQUU3QkMsZ0JBQUFBLEdBQUcsRUFBRSxFQUZ3QjtBQUc3QkMsZ0JBQUFBLEdBQUcsRUFBRSxFQUh3QjtBQUk3QkMsZ0JBQUFBLEdBQUcsRUFBRSxFQUp3QjtBQUs3QkMsZ0JBQUFBLEVBQUUsRUFBRSxFQUx5QjtBQU03Qix1QkFBTyxFQU5zQjtBQU83QkMsZ0JBQUFBLEVBQUUsRUFBRSxFQVB5QjtBQVE3QkMsZ0JBQUFBLE1BQU0sRUFBRSxFQVJxQjtBQVM3QkMsZ0JBQUFBLE1BQU0sRUFBRSxFQVRxQjtBQVU3QkMsZ0JBQUFBLEdBQUcsRUFBRSxFQVZ3QjtBQVc3QkMsZ0JBQUFBLEdBQUcsRUFBRSxFQVh3QjtBQVk3QkMsZ0JBQUFBLEdBQUcsRUFBRSxFQVp3QjtBQWE3QkMsZ0JBQUFBLEdBQUcsRUFBRSxFQWJ3QjtBQWM3QkMsZ0JBQUFBLEVBQUUsRUFBRSxFQWR5QjtBQWU3QkMsZ0JBQUFBLEVBQUUsRUFBRSxFQWZ5QjtBQWdCN0IsdUJBQU87QUFoQnNCLGVBQS9CO0FBa0JBekIsY0FBQUEsQ0FBQyxDQUFDUyxLQUFELENBQUQsQ0FBU0gsSUFBVCxDQUFjLFVBQUNvQixLQUFELEVBQVFsQixDQUFSLEVBQW9CO0FBQ2hDLG9CQUFNbUIsTUFBYyxHQUFHdkIsT0FBTyxDQUFDc0IsS0FBRCxDQUE5Qjs7QUFDQSxvQkFBTUUsWUFBb0IsR0FBRzVCLENBQUMsQ0FBQ1EsQ0FBRCxDQUFELENBQUtxQixJQUFMLEdBQVlDLE9BQVosQ0FBb0IsUUFBcEIsRUFBOEIsR0FBOUIsRUFBbUNDLElBQW5DLEVBQTdCOztBQUNBLG9CQUFNQyxLQUFhLEdBQUcsbUNBQWtCSixZQUFsQixDQUF0Qjs7QUFDQWpCLGdCQUFBQSxPQUFPLG1DQUNGQSxPQURFLDJCQUVKZ0IsTUFGSSxFQUVLSyxLQUZMLEVBQVA7QUFJRCxlQVJEO0FBU0E3QixjQUFBQSxLQUFLLENBQUM4QixJQUFOLENBQVd0QixPQUFYO0FBQ0QsYUE5QkQ7QUF2Q2dDLDhDQXNFekJ6QyxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFd0QsY0FBQUEsT0FBTyxFQUFFL0IsS0FBWDtBQUFrQnhCLGNBQUFBLE9BQU8sRUFBRTtBQUEzQixhQUFyQixDQXRFeUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBd0V6QlIsSUFBSSxjQXhFcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBcEJvQixvQkFBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjaGVlcmlvLCB7IENoZWVyaW8gfSBmcm9tIFwiY2hlZXJpb1wiO1xuaW1wb3J0IHJlcXVlc3RQIGZyb20gXCJyZXF1ZXN0LXByb21pc2VcIjtcblxuaW1wb3J0IHsgTkJBX0pTX0lEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvcGxheWVySWRzXCI7XG5pbXBvcnQgSVBMQVlFUl9TVEFUUyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGF5ZXJTdGF0cy5pbnRlcmZhY2VcIjtcbmltcG9ydCBnZXRQbGF5ZXJJbWFnZVVybCBmcm9tIFwiLi4vY29tbW9uL2dldC1wbGF5ZXItaW1hZ2UtdXJsXCI7XG5pbXBvcnQgSUFMTF9QTEFZRVJTIGZyb20gXCIuLi9pbnRlcmZhY2VzL2FsbFBsYXllcnNSZXNwb25zZS5pbnRlcmZhY2VcIjtcbmltcG9ydCBJR0FNRV9MT0dfU1RBVFMgZnJvbSBcIi4uL2ludGVyZmFjZXMvZ2FtZUxvZ1N0YXRzLmludGVyZmFjZVwiO1xuaW1wb3J0IHNhbml0aXplUXVlcnlTdHJpbmcgZnJvbSBcIi4uL2NvbW1vbi9zYW5pdGl6ZS1xdWVyeS1zdHJpbmdcIjtcbmltcG9ydCBzYW5pdGl6ZVRhYmxlVGV4dCBmcm9tIFwiLi4vY29tbW9uL3Nhbml0aXplLXRhYmxlLXRleHRcIjtcbmltcG9ydCBnZW5Gb3hVcmwgZnJvbSBcIi4uL2NvbW1vbi9nZW4tZm94LXVybFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSA9IGFzeW5jIChcbiAgcmVxOiBSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb25cbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBOYW1lID0gcmVxLnF1ZXJ5LnBsYXllcl9uYW1lIGFzIHN0cmluZztcblxuICAgIGNvbnN0IG5iYV9qc19pZDogTnVtYmVyID0gTkJBX0pTX0lEU1tzYW5pdGl6ZVF1ZXJ5U3RyaW5nKHBOYW1lKV07XG4gICAgaWYgKCFuYmFfanNfaWQpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJ1bmFibGUgdG8gZmluZCBwbGF5ZXIgd2l0aCBjb3JyZXNwb25kaW5nIElEXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXllcl9pbWFnZV91cmw6IHN0cmluZyA9IGdldFBsYXllckltYWdlVXJsKG5iYV9qc19pZCk7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgaHR0cDovL2RhdGEubmJhLm5ldC9wcm9kL3YxLzIwMjEvcGxheWVycy8ke25iYV9qc19pZH1fcHJvZmlsZS5qc29uYDtcbiAgICBjb25zdCB7IGRhdGE6IG91dGVyRGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgY29uc3QgeyBzdGF0cyB9OiB7IHN0YXRzOiBJUExBWUVSX1NUQVRTIH0gPSBvdXRlckRhdGEubGVhZ3VlLnN0YW5kYXJkO1xuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgLnNlbmQoeyBzdGF0cywgcGxheWVyX2ltYWdlX3VybCwgbWVzc2FnZTogXCJTdWNjZXNzXCIgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQbGF5ZXJzID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPVxuICAgICAgXCJodHRwOi8vZGF0YS5uYmEubmV0L2RhdGEvMTBzL3Byb2QvdjEvMjAyMS9wbGF5ZXJzLmpzb25cIjtcbiAgICBjb25zdCB7IGRhdGEgfTogeyBkYXRhOiBJQUxMX1BMQVlFUlMgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIGNvbnN0IHsgc3RhbmRhcmQ6IHBsYXllcnMgfSA9IGRhdGEubGVhZ3VlO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHBsYXllcnMsIG1lc3NhZ2U6IFwiU3VjY2Vzc1wiIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZUxhc3RUZW5HYW1lU3RhdHMgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSByZXEucXVlcnkuZmlyc3RfbmFtZSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbGFzdE5hbWUgPSByZXEucXVlcnkubGFzdF9uYW1lIGFzIHN0cmluZztcbiAgICBpZiAoIWZpcnN0TmFtZSB8fCAhbGFzdE5hbWUpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJQbGVhc2UgcHJvdmlkZSB0aGUgcGxheWVyJ3MgbmFtZSBcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgZk5hbWUgPSBzYW5pdGl6ZVF1ZXJ5U3RyaW5nKGZpcnN0TmFtZSk7XG4gICAgY29uc3QgbE5hbWUgPSBzYW5pdGl6ZVF1ZXJ5U3RyaW5nKGxhc3ROYW1lKTtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IGdlbkZveFVybChmTmFtZSwgbE5hbWUpO1xuICAgIGNvbnN0IGNoZWVyaW9SZXMgPSBhd2FpdCByZXF1ZXN0UC5nZXQodXJsKTtcbiAgICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGNoZWVyaW9SZXMpO1xuICAgIGNvbnN0IGdhbWVzOiBJR0FNRV9MT0dfU1RBVFNbXSA9IFtdO1xuICAgIGNvbnN0IGhlYWRlcnM6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICBcImRhdGVcIixcbiAgICAgIFwib3BwXCIsXG4gICAgICBcIm1pblwiLFxuICAgICAgXCJwdHNcIixcbiAgICAgIFwiZmdcIixcbiAgICAgIFwiM2ZnXCIsXG4gICAgICBcImZ0XCIsXG4gICAgICBcIk9mZlJlYlwiLFxuICAgICAgXCJEZWZSZWJcIixcbiAgICAgIFwiUmViXCIsXG4gICAgICBcIkFzdFwiLFxuICAgICAgXCJTdGxcIixcbiAgICAgIFwiQmxrXCIsXG4gICAgICBcIlBGXCIsXG4gICAgICBcIlRPXCIsXG4gICAgICBcIisvLVwiLFxuICAgIF07XG4gICAgY29uc3QgX3RhYmxlU2VsZWN0b3IgPVxuICAgICAgXCIjX19sYXlvdXQgPiBkaXYgPiBkaXYuZnNjb20tbWFpbi1jb250ZW50ID4gZGl2LmdhbWVsb2ctZnVsbCA+IGRpdi50YWJsZS13cmFwcGVyLWNvbnRhaW5lci5iaWZyb3N0LXRhYmxlLmNhcm91c2VsLXdyYXBwZXIgPiBkaXYudGFibGUtd3JhcHBlci5jYXJvdXNlbC1jb250YWluZXIudGFibGUtY2Fyb3VzZWwgPiBkaXYgPiB0YWJsZSA+IHRib2R5ID4gdHJcIjtcbiAgICAkKF90YWJsZVNlbGVjdG9yKS5lYWNoKChfLCBlKSA9PiB7XG4gICAgICBjb25zdCBfcm93cyA9ICQoZSkuZmluZChcInRkXCIpO1xuICAgICAgbGV0IGRhdGFPYmo6IElHQU1FX0xPR19TVEFUUyA9IHtcbiAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgb3BwOiBcIlwiLFxuICAgICAgICBtaW46IFwiXCIsXG4gICAgICAgIHB0czogXCJcIixcbiAgICAgICAgZmc6IFwiXCIsXG4gICAgICAgIFwiM2ZnXCI6IFwiXCIsXG4gICAgICAgIGZ0OiBcIlwiLFxuICAgICAgICBPZmZSZWI6IFwiXCIsXG4gICAgICAgIERlZlJlYjogXCJcIixcbiAgICAgICAgUmViOiBcIlwiLFxuICAgICAgICBBc3Q6IFwiXCIsXG4gICAgICAgIFN0bDogXCJcIixcbiAgICAgICAgQmxrOiBcIlwiLFxuICAgICAgICBQRjogXCJcIixcbiAgICAgICAgVE86IFwiXCIsXG4gICAgICAgIFwiKy8tXCI6IFwiXCIsXG4gICAgICB9O1xuICAgICAgJChfcm93cykuZWFjaCgoaW5kZXgsIGUpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3Qgb2JqS2V5OiBzdHJpbmcgPSBoZWFkZXJzW2luZGV4XTtcbiAgICAgICAgY29uc3QgX2NoZWVyaW9UZXh0OiBzdHJpbmcgPSAkKGUpLnRleHQoKS5yZXBsYWNlKC9cXHNcXHMrL2csIFwiIFwiKS50cmltKCk7XG4gICAgICAgIGNvbnN0IF90ZXh0OiBzdHJpbmcgPSBzYW5pdGl6ZVRhYmxlVGV4dChfY2hlZXJpb1RleHQpO1xuICAgICAgICBkYXRhT2JqID0ge1xuICAgICAgICAgIC4uLmRhdGFPYmosXG4gICAgICAgICAgW29iaktleV06IF90ZXh0LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBnYW1lcy5wdXNoKGRhdGFPYmopO1xuICAgIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGdhbWVsb2c6IGdhbWVzLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcbiJdfQ==
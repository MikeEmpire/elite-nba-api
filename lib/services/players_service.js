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
            headers = ["date", "opp", "min", "pts", "fg", "3fg", "ft", "OffReb", "DefReb", "Reb", "Ast", "Stl", "Blk", "PF", "TO", "plusMinus"];
            _tableSelector = "#__layout > div > div.fscom-main-content > div.gamelog-full > div.table-wrapper-container.bifrost-table.carousel-wrapper > div.table-wrapper.carousel-container.table-carousel > div > table > tbody > tr";
            $(_tableSelector).each(function (_, e) {
              var _rows = $(e).find("td");

              var dataObj = {
                date: "",
                opp: "",
                min: "",
                pts: "",
                fg: "",
                threeFg: "",
                ft: "",
                offReb: "",
                defReb: "",
                reb: "",
                ast: "",
                stl: "",
                blk: "",
                pf: "",
                to: "",
                plusMinus: ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wbGF5ZXJzX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0UGxheWVyU2Vhc29uQXZlcmFnZSIsInJlcSIsInJlcyIsIm5leHQiLCJwTmFtZSIsInF1ZXJ5IiwicGxheWVyX25hbWUiLCJuYmFfanNfaWQiLCJOQkFfSlNfSURTIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJwbGF5ZXJfaW1hZ2VfdXJsIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJvdXRlckRhdGEiLCJkYXRhIiwic3RhdHMiLCJsZWFndWUiLCJzdGFuZGFyZCIsImdldEFsbFBsYXllcnMiLCJwbGF5ZXJzIiwiZ2FtZUxhc3RUZW5HYW1lU3RhdHMiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdE5hbWUiLCJsYXN0X25hbWUiLCJmTmFtZSIsImxOYW1lIiwicmVxdWVzdFAiLCJjaGVlcmlvUmVzIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZ2FtZXMiLCJoZWFkZXJzIiwiX3RhYmxlU2VsZWN0b3IiLCJlYWNoIiwiXyIsImUiLCJfcm93cyIsImZpbmQiLCJkYXRhT2JqIiwiZGF0ZSIsIm9wcCIsIm1pbiIsInB0cyIsImZnIiwidGhyZWVGZyIsImZ0Iiwib2ZmUmViIiwiZGVmUmViIiwicmViIiwiYXN0Iiwic3RsIiwiYmxrIiwicGYiLCJ0byIsInBsdXNNaW51cyIsImluZGV4Iiwib2JqS2V5IiwiX2NoZWVyaW9UZXh0IiwidGV4dCIsInJlcGxhY2UiLCJ0cmltIiwiX3RleHQiLCJwdXNoIiwiZ2FtZWxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUdBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHNCQUFzQjtBQUFBLHFFQUFHLGlCQUNwQ0MsR0FEb0MsRUFFcENDLEdBRm9DLEVBR3BDQyxJQUhvQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNNUJDLFlBQUFB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dCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY2hlZXJpbywgeyBDaGVlcmlvIH0gZnJvbSBcImNoZWVyaW9cIjtcbmltcG9ydCByZXF1ZXN0UCBmcm9tIFwicmVxdWVzdC1wcm9taXNlXCI7XG5cbmltcG9ydCB7IE5CQV9KU19JRFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3BsYXllcklkc1wiO1xuaW1wb3J0IElQTEFZRVJfU1RBVFMgZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxheWVyU3RhdHMuaW50ZXJmYWNlXCI7XG5pbXBvcnQgZ2V0UGxheWVySW1hZ2VVcmwgZnJvbSBcIi4uL2NvbW1vbi9nZXQtcGxheWVyLWltYWdlLXVybFwiO1xuaW1wb3J0IElBTExfUExBWUVSUyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9hbGxQbGF5ZXJzUmVzcG9uc2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQgSUdBTUVfTE9HX1NUQVRTIGZyb20gXCIuLi9pbnRlcmZhY2VzL2dhbWVMb2dTdGF0cy5pbnRlcmZhY2VcIjtcbmltcG9ydCBzYW5pdGl6ZVF1ZXJ5U3RyaW5nIGZyb20gXCIuLi9jb21tb24vc2FuaXRpemUtcXVlcnktc3RyaW5nXCI7XG5pbXBvcnQgc2FuaXRpemVUYWJsZVRleHQgZnJvbSBcIi4uL2NvbW1vbi9zYW5pdGl6ZS10YWJsZS10ZXh0XCI7XG5pbXBvcnQgZ2VuRm94VXJsIGZyb20gXCIuLi9jb21tb24vZ2VuLWZveC11cmxcIjtcblxuZXhwb3J0IGNvbnN0IGdldFBsYXllclNlYXNvbkF2ZXJhZ2UgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwTmFtZSA9IHJlcS5xdWVyeS5wbGF5ZXJfbmFtZSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCBuYmFfanNfaWQ6IE51bWJlciA9IE5CQV9KU19JRFNbc2FuaXRpemVRdWVyeVN0cmluZyhwTmFtZSldO1xuICAgIGlmICghbmJhX2pzX2lkKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6IFwidW5hYmxlIHRvIGZpbmQgcGxheWVyIHdpdGggY29ycmVzcG9uZGluZyBJRFwiIH0pO1xuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJfaW1hZ2VfdXJsOiBzdHJpbmcgPSBnZXRQbGF5ZXJJbWFnZVVybChuYmFfanNfaWQpO1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gYGh0dHA6Ly9kYXRhLm5iYS5uZXQvcHJvZC92MS8yMDIxL3BsYXllcnMvJHtuYmFfanNfaWR9X3Byb2ZpbGUuanNvbmA7XG4gICAgY29uc3QgeyBkYXRhOiBvdXRlckRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIGNvbnN0IHsgc3RhdHMgfTogeyBzdGF0czogSVBMQVlFUl9TVEFUUyB9ID0gb3V0ZXJEYXRhLmxlYWd1ZS5zdGFuZGFyZDtcbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDIwMClcbiAgICAgIC5zZW5kKHsgc3RhdHMsIHBsYXllcl9pbWFnZV91cmwsIG1lc3NhZ2U6IFwiU3VjY2Vzc1wiIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUGxheWVycyA9IGFzeW5jIChcbiAgcmVxOiBSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb25cbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybDogc3RyaW5nID1cbiAgICAgIFwiaHR0cDovL2RhdGEubmJhLm5ldC9kYXRhLzEwcy9wcm9kL3YxLzIwMjEvcGxheWVycy5qc29uXCI7XG4gICAgY29uc3QgeyBkYXRhIH06IHsgZGF0YTogSUFMTF9QTEFZRVJTIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICBjb25zdCB7IHN0YW5kYXJkOiBwbGF5ZXJzIH0gPSBkYXRhLmxlYWd1ZTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBwbGF5ZXJzLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWVMYXN0VGVuR2FtZVN0YXRzID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmlyc3ROYW1lID0gcmVxLnF1ZXJ5LmZpcnN0X25hbWUgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gcmVxLnF1ZXJ5Lmxhc3RfbmFtZSBhcyBzdHJpbmc7XG4gICAgaWYgKCFmaXJzdE5hbWUgfHwgIWxhc3ROYW1lKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6IFwiUGxlYXNlIHByb3ZpZGUgdGhlIHBsYXllcidzIG5hbWUgXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IGZOYW1lID0gc2FuaXRpemVRdWVyeVN0cmluZyhmaXJzdE5hbWUpO1xuICAgIGNvbnN0IGxOYW1lID0gc2FuaXRpemVRdWVyeVN0cmluZyhsYXN0TmFtZSk7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBnZW5Gb3hVcmwoZk5hbWUsIGxOYW1lKTtcbiAgICBjb25zdCBjaGVlcmlvUmVzID0gYXdhaXQgcmVxdWVzdFAuZ2V0KHVybCk7XG4gICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChjaGVlcmlvUmVzKTtcbiAgICBjb25zdCBnYW1lczogSUdBTUVfTE9HX1NUQVRTW10gPSBbXTtcbiAgICBjb25zdCBoZWFkZXJzOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgXCJkYXRlXCIsXG4gICAgICBcIm9wcFwiLFxuICAgICAgXCJtaW5cIixcbiAgICAgIFwicHRzXCIsXG4gICAgICBcImZnXCIsXG4gICAgICBcIjNmZ1wiLFxuICAgICAgXCJmdFwiLFxuICAgICAgXCJPZmZSZWJcIixcbiAgICAgIFwiRGVmUmViXCIsXG4gICAgICBcIlJlYlwiLFxuICAgICAgXCJBc3RcIixcbiAgICAgIFwiU3RsXCIsXG4gICAgICBcIkJsa1wiLFxuICAgICAgXCJQRlwiLFxuICAgICAgXCJUT1wiLFxuICAgICAgXCJwbHVzTWludXNcIixcbiAgICBdO1xuICAgIGNvbnN0IF90YWJsZVNlbGVjdG9yID1cbiAgICAgIFwiI19fbGF5b3V0ID4gZGl2ID4gZGl2LmZzY29tLW1haW4tY29udGVudCA+IGRpdi5nYW1lbG9nLWZ1bGwgPiBkaXYudGFibGUtd3JhcHBlci1jb250YWluZXIuYmlmcm9zdC10YWJsZS5jYXJvdXNlbC13cmFwcGVyID4gZGl2LnRhYmxlLXdyYXBwZXIuY2Fyb3VzZWwtY29udGFpbmVyLnRhYmxlLWNhcm91c2VsID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyXCI7XG4gICAgJChfdGFibGVTZWxlY3RvcikuZWFjaCgoXywgZSkgPT4ge1xuICAgICAgY29uc3QgX3Jvd3MgPSAkKGUpLmZpbmQoXCJ0ZFwiKTtcbiAgICAgIGxldCBkYXRhT2JqOiBJR0FNRV9MT0dfU1RBVFMgPSB7XG4gICAgICAgIGRhdGU6IFwiXCIsXG4gICAgICAgIG9wcDogXCJcIixcbiAgICAgICAgbWluOiBcIlwiLFxuICAgICAgICBwdHM6IFwiXCIsXG4gICAgICAgIGZnOiBcIlwiLFxuICAgICAgICB0aHJlZUZnOiBcIlwiLFxuICAgICAgICBmdDogXCJcIixcbiAgICAgICAgb2ZmUmViOiBcIlwiLFxuICAgICAgICBkZWZSZWI6IFwiXCIsXG4gICAgICAgIHJlYjogXCJcIixcbiAgICAgICAgYXN0OiBcIlwiLFxuICAgICAgICBzdGw6IFwiXCIsXG4gICAgICAgIGJsazogXCJcIixcbiAgICAgICAgcGY6IFwiXCIsXG4gICAgICAgIHRvOiBcIlwiLFxuICAgICAgICBwbHVzTWludXM6IFwiXCIsXG4gICAgICB9O1xuICAgICAgJChfcm93cykuZWFjaCgoaW5kZXgsIGUpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3Qgb2JqS2V5OiBzdHJpbmcgPSBoZWFkZXJzW2luZGV4XTtcbiAgICAgICAgY29uc3QgX2NoZWVyaW9UZXh0OiBzdHJpbmcgPSAkKGUpLnRleHQoKS5yZXBsYWNlKC9cXHNcXHMrL2csIFwiIFwiKS50cmltKCk7XG4gICAgICAgIGNvbnN0IF90ZXh0OiBzdHJpbmcgPSBzYW5pdGl6ZVRhYmxlVGV4dChfY2hlZXJpb1RleHQpO1xuICAgICAgICBkYXRhT2JqID0ge1xuICAgICAgICAgIC4uLmRhdGFPYmosXG4gICAgICAgICAgW29iaktleV06IF90ZXh0LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBnYW1lcy5wdXNoKGRhdGFPYmopO1xuICAgIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGdhbWVsb2c6IGdhbWVzLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgfVxufTtcbiJdfQ==
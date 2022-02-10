import { Request, Response, NextFunction } from "express";
import axios from "axios";
import cheerio, { Cheerio } from "cheerio";
import requestP from "request-promise";

import { NBA_JS_IDS } from "../constants/playerIds";
import IPLAYER_STATS from "../interfaces/playerStats.interface";
import getPlayerImageUrl from "../common/get-player-image-url";
import IALL_PLAYERS from "../interfaces/allPlayersResponse.interface";
import IGAME_LOG_STATS from "../interfaces/gameLogStats.interface";
import sanitizeQueryString from "../common/sanitize-query-string";
import sanitizeTableText from "../common/sanitize-table-text";
import genFoxUrl from "../common/gen-fox-url";

export const getPlayerSeasonAverage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pName = req.query.player_name as string;

    const nba_js_id: Number = NBA_JS_IDS[sanitizeQueryString(pName)];
    if (!nba_js_id) {
      return res
        .status(500)
        .send({ message: "unable to find player with corresponding ID" });
    }
    const player_image_url: string = getPlayerImageUrl(nba_js_id);
    const url: string = `http://data.nba.net/prod/v1/2021/players/${nba_js_id}_profile.json`;
    const { data: outerData } = await axios.get(url);
    const { stats }: { stats: IPLAYER_STATS } = outerData.league.standard;
    return res
      .status(200)
      .send({ stats, player_image_url, message: "Success" });
  } catch (err) {
    return next(err);
  }
};

export const getAllPlayers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const url: string =
      "http://data.nba.net/data/10s/prod/v1/2021/players.json";
    const { data }: { data: IALL_PLAYERS } = await axios.get(url);
    const { standard: players } = data.league;
    return res.status(200).send({ players, message: "Success" });
  } catch (err) {
    return next(err);
  }
};

export const gameLastTenGameStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const firstName = req.query.first_name as string;
    const lastName = req.query.last_name as string;
    if (!firstName || !lastName) {
      return res
        .status(500)
        .send({ message: "Please provide the player's name " });
    }
    const fName = sanitizeQueryString(firstName);
    const lName = sanitizeQueryString(lastName);
    const url: string = genFoxUrl(fName, lName);
    const cheerioRes = await requestP.get(url);
    const $ = cheerio.load(cheerioRes);
    const games: IGAME_LOG_STATS[] = [];
    const headers: Array<string> = [
      "date",
      "opp",
      "min",
      "pts",
      "fg",
      "threeFg",
      "ft",
      "offReb",
      "defReb",
      "reb",
      "ast",
      "stl",
      "blk",
      "pf",
      "to",
      "plusMinus",
    ];
    const _tableSelector =
      "#__layout > div > div.fscom-main-content > div.gamelog-full > div.table-wrapper-container.bifrost-table.carousel-wrapper > div.table-wrapper.carousel-container.table-carousel > div > table > tbody > tr";
    $(_tableSelector).each((_, e) => {
      const _rows = $(e).find("td");
      let dataObj: IGAME_LOG_STATS = {
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
        plusMinus: "",
      };
      $(_rows).each((index, e): void => {
        const objKey: string = headers[index];
        const _cheerioText: string = $(e).text().replace(/\s\s+/g, " ").trim();
        const _text: string = sanitizeTableText(_cheerioText);
        dataObj = {
          ...dataObj,
          [objKey]: _text,
        };
      });
      games.push(dataObj);
    });
    return res.status(200).send({ gamelog: games, message: "Success" });
  } catch (err) {
    return next(err);
  }
};

import { Request, Response, NextFunction } from "express";
import axios from "axios";

import { NBA_JS_IDS } from "../constants/playerIds";
import IPLAYER_STATS from "../interfaces/playerStats.interface";
import getPlayerImageUrl from "../common/get-player-image-url";
import IALL_PLAYERS from "../interfaces/allPlayersResponse.interface";

export const getPlayerSeasonAverage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pName = req.query.player_name as string;

    const nba_js_id: Number = NBA_JS_IDS[pName.toLowerCase()];
    if (!nba_js_id) {
      return res
        .status(500)
        .send({ message: "unable to find player with corresponding ID" });
    }
    const player_image_url: string = getPlayerImageUrl(nba_js_id);
    const url: string = `http://data.nba.net/prod/v1/2021/players/${nba_js_id}_profile.json`;
    const { data: outerData } = await axios.get(url);
    const { league: data }: { league: IPLAYER_STATS } = outerData;
    return res.status(200).send({ data, player_image_url, message: "Success" });
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

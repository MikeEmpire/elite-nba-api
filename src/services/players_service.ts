import { Request, Response, NextFunction } from "express";
import axios, { Axios, AxiosResponse } from "axios";

import { playerIds, NBA_JS_IDS } from "../constants/playerIds";
import IPLAYER_STATS from "../interfaces/playerStats.interface";
import { BALL_DONT_LIE_URL } from "../constants";
import getPlayerImageUrl from "../common/get-player-image-url";
import IALL_PLAYERS from "../interfaces/allPlayersResponse.interface";

export const getPlayerSeasonAverage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pName = req.query.player_name as string;

    const player_id: Number = playerIds[pName.toLowerCase()];
    const nba_js_id: Number = NBA_JS_IDS[pName.toLowerCase()];
    if (!player_id) {
      return res
        .status(500)
        .send({ message: "unable to find player with corresponding ID" });
    }
    const player_image_url: string = getPlayerImageUrl(nba_js_id);
    const url: string = `${BALL_DONT_LIE_URL}/season_averages`;
    const params: object = {
      season: 2021,
      player_ids: [player_id],
    };
    const { data: outerData } = await axios.get(url, { params });
    const { data }: { data: IPLAYER_STATS } = outerData;
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

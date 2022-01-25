import { Request, Response, NextFunction } from "express";
import axios from "axios";

import playerIds from "../constants/playerIds";
import IPLAYER_STATS from "../interfaces/playerStats.interface";
import { BALL_DONT_LIE_URL } from "../constants";

export const getPlayerSeasonAverage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pName = req.query.player_name as string;
    const player_id = playerIds[pName];
    if (!player_id) {
      // TODO: use api to find player
      return res
        .status(500)
        .send({ message: "unable to find player with corresponding ID" });
    }
    const url: string = `${BALL_DONT_LIE_URL}/season_averages`;
    const params: object = {
      season: 2021,
      player_ids: [player_id],
    };
    const { data: outerData } = await axios.get(url, { params });
    const { data }: { data: IPLAYER_STATS } = outerData;
    return res.status(200).send({ data, message: "Success" });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

import axios from "axios";
import { Response, Request, NextFunction } from "express";

import getTodaysDate from "../common/get-todays-date";
import { TEAM_HASHMAP } from "../constants";
import IGAME_DATA from "../interfaces/gameinfo.interface";

export const getTodaysGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryDate: string = req.query.date as string;
    const todaysDate = getTodaysDate(queryDate);
    const url = `https://data.nba.net/10s/prod/v1/${todaysDate}/scoreboard.json`;
    const { data }: { data: IGAME_DATA } = await axios.get(url);
    // TODO: Consolidate hash map function below into external function / service
    const dataCopy: IGAME_DATA = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < data.games.length; i++) {
      const hTeamId: string = dataCopy.games[i].hTeam.teamId as string;
      const vTeamId: string = dataCopy.games[i].vTeam.teamId as string;
      const hAdditionalInfo = TEAM_HASHMAP[hTeamId];
      const vAdditionalInfo = TEAM_HASHMAP[vTeamId];
      dataCopy.games[i].vTeam.additionalInfo = vAdditionalInfo;
      dataCopy.games[i].hTeam.additionalInfo = hAdditionalInfo;
    }
    return res.status(200).send({ data, message: "Hit!" });
  } catch (err) {
    return next(err);
  }
};

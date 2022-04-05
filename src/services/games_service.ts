import axios from "axios";
import { Response, Request, NextFunction } from "express";

import getTodaysDate from "../common/get-todays-date";
import { TEAM_HASHMAP } from "../constants";
import GAME_BOX_SCORE from "../interfaces/gameBoxScore.interface";
import IGAME_DATA from "../interfaces/gameinfo.interface";
import SCHEDULE_RESPONSE from "../interfaces/nbaGameInfo.interface";

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
    return res.status(200).send({ data: dataCopy, message: "Hit!" });
  } catch (err) {
    return next(err);
  }
};

export const gameTodaysGamesV2 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const url = `https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json`;
    const { data }: { data: SCHEDULE_RESPONSE } = await axios.get(url);
    const { games } = data.scoreboard;
    return res.status(200).send({ games });
  } catch (err) {
    return next(err);
  }
};

type GameParams = {
  date: String;
  code: String;
};
export const getGameStats = async (
  req: Request<{}, {}, {}, GameParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    let gameStatus: String = "";
    const { date, code } = req.query;
    const url = `https://data.nba.net/10s/prod/v1/${date}/${code}_boxscore.json`;
    return axios.get(url).then((schedule) => {
      if (schedule.status !== 200) {
        return res.status(400).send({ message: "error!" });
      }
      const gameData: GAME_BOX_SCORE = schedule.data;

      const gamePeriod = gameData.basicGameData.period.current;
      if (gamePeriod !== 0) {
        const expandedUrl = `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${code}.json`;
        return axios.get(expandedUrl).then((boxscore) => {
          return res.status(200).send({ basicData: gameData, boxscore });
        });
      }

      return res.status(200).send({ basicData: gameData });
    });
  } catch (err) {
    return next(err);
  }
};

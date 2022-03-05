import axios from "axios";
import { Response, Request, NextFunction } from "express";

import getTodaysDate from "../common/get-todays-date";
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
    return res.status(200).send({ data, message: "Hit!" });
  } catch (err) {
    return next(err);
  }
};

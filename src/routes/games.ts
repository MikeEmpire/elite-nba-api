import express from "express";

import {
  gameTodaysGamesV2,
  getGameStats,
  getTodaysGames,
} from "../services/games_service";

const router = express.Router();

router.get("/", getTodaysGames);

router.get("/v2", gameTodaysGamesV2);

router.get("/stats", getGameStats);

export default router;

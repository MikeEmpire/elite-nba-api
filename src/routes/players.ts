import express from "express";

import {
  gameLastTenGameStats,
  getAllPlayers,
  getPlayerSeasonAverage,
} from "../services/players_service";

const router = express.Router();

router.get("/", getPlayerSeasonAverage);

router.get("/all", getAllPlayers);

router.get("/gamelog", gameLastTenGameStats);

export default router;

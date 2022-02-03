import express from "express";

import {
  getAllPlayers,
  getPlayerSeasonAverage,
} from "../services/players_service";

const router = express.Router();

router.get("/", getPlayerSeasonAverage);

router.get("/all", getAllPlayers);

export default router;

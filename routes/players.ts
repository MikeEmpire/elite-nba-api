import express from "express";

import { getPlayerSeasonAverage } from "../services/players_service";

const router = express.Router();

router.get("/season", getPlayerSeasonAverage);

export default router;

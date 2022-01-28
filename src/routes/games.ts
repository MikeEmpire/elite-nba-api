import express from "express";

import { getTodaysGames } from "../services/games_service";

const router = express.Router();

router.get("/", getTodaysGames);

export default router;

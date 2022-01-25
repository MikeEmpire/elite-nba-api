import { Express } from "express";

import players from "../routes/players";

import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

export default (app: Express) => {
  app.use("/api/players", players);

  app.use(errorHandler);
  app.use(notFoundHandler);
};

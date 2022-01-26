import { Application, NextFunction, Request, Response } from "express";

import players from "./routes/players";

import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

export default (app: Application) => {
  app.get("/", (_, res) => {
    res.send("what it do");
  });

  app.use("/api/players", players);

  app.use(errorHandler);
  app.use(notFoundHandler);
};

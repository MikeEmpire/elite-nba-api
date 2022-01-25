import { Application, NextFunction, Request, Response } from "express";

import players from "./routes/players";

import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

export default (app: Application) => {
  app.use("/", (req: Request, res: Response, next: NextFunction) =>
    res.status(200).send({ message: "hello" })
  );

  app.use("/api/players", players);

  app.use(errorHandler);
  app.use(notFoundHandler);
};

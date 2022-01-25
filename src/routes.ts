import players from "../routes/players";
import {
  Express,
  Request,
  ErrorRequestHandler,
  NextFunction,
  Response,
} from "express";

export default (app: Express) => {
  app.use("/api/players", players);

  app.use(
    (
      err: ErrorRequestHandler,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      let statusCode: number = 500;
      if (!err) {
        // eslint-disable-next-line no-param-reassign
        statusCode = 400;
      }
      // TODO: Enhance error handling
      // console.log(err);

      return res.status(statusCode).send(err);
    }
  );
};

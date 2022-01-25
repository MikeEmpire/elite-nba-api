import * as dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

import routes from "./routes";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

/**
 * App Variables
 */

export const PORT: number = parseInt(process.env.PORT as string, 10);

const app: Application = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

/**
 * Server Activation
 */

routes(app);

export default app;

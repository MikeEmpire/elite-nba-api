import * as dotenv from "dotenv";
import express from "express";
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

const PORT: number = parseInt(process.env.PORT as string, 10);

export const app = express();

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

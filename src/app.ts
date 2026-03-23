import express, { Express } from "express";
import setupSwagger from "./config/swagger";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";
import resourceRouter from "../src/api/v1/routes/resourceRoutes"
import { getCorsOptions } from "./config/corsConfig";
import { getHelmetConfig } from "./config/helmetConfig";

/** import the routes **/


const app: Express = express();

app.use(getHelmetConfig());
app.use(cors(getCorsOptions()));

if (process.env.NODE_ENV === "production") {
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    app.use(consoleLogger);
}

app.use(express.json());


/** Update the api endppoints with appropriate routes **/

app.use("/api/v1/resources", resourceRouter)


app.use(errorHandler);

// Setup Swagger
setupSwagger(app);

export default app;
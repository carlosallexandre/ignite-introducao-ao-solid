import express from "express";
import path from "path";
import swagger from "swagger-ui-express";
import YAML from "yamljs";

import { usersRoutes } from "./routes/users.routes";

const app = express();

const swaggerDocument = YAML.load(path.resolve(__dirname, "swagger.yaml"));

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument));

export { app };

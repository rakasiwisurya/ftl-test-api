import cors from "cors";
import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";

dotenv.config();

import router from "./src/routes";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    status: 404,
    message: "Service Not Found",
    data: null,
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: "Internal Server Error",
    data: null,
  });
});

app.listen(port, () => {
  console.info(`[server] server is running on port: ${port}`);
});

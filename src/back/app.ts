import * as express from "express";
import { Request, Response, NextFunction } from "express";

const app: express.Application = express();

app.set("port", process.env.PORT || 1000);

app.get("/", (req: Request, res: Response): void => {
  res.send("here");
});

app.listen(app.get("port"), (): void => {
  console.log(1000);
});
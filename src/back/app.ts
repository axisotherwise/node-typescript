import express from "express";
import nunjucks from "nunjucks";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import hpp from "hpp";
import helmet from "helmet";
import path from "path";
import passport from "passport";

import indexRouter from "./routes/index";
import authRouter from "./routes/auth";

import sequelize from "./models/sequelize";
import { Application, Request, Response, NextFunction, ErrorRequestHandler } from "express";

dotenv.config();
const app: Application = express();

app.set("port", process.env.PORT || 1000);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
sequelize.sync({ force: false })
  .then(() => console.log("db connect"))
  .catch((err: Error) => console.error(err));

app.use(morgan("dev"));
app.use("/image", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET!,
  cookie: {
    httpOnly: true,
    secure: false,
    domain: false,
  },
}));

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  const error: object = {
    message: `${req.method} ${req.url} 존재하지 않습니다.`,
    status: 404,
  }
  next(error);
});

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(500);
  res.render("error");
;});

app.listen(app.get("port"), (): void => {
  console.log(1000);
});
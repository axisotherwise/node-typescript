import * as express from "express";
import * as nunjucks from "nunjucks";
import * as morgan from "morgan";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as dotenv from "dotenv";
import * as hpp from "hpp";
import * as helmet from "helmet";
import * as path from "path";
import * as passport from "passport";

import indexRouter from "./routes/index";
import authRouter from "./routes/auth";

import { sequelize } from "./models/index";
import { Request, Response, NextFunction } from "express";

dotenv.config();
const app: express.Application = express();

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

app.listen(app.get("port"), (): void => {
  console.log(1000);
}); 
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import profileRoutes from "./routes/profile";
import commentRoutes from "./routes/comment";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setMiddleWare();
    this.setRouter();
  }
  private setMiddleWare() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  private setRouter() {
    this.app.use("/profile", profileRoutes);
    this.app.use("/comment", commentRoutes);
  }
}

export default new App().app;
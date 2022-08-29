import express, { Application } from "express";
import morgan from "morgan";

import userRoutes from "./routes/user.router";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setMiddleWare();
    this.setRouter();
  }
  private setMiddleWare() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  private setRouter() {
    this.app.use("/", userRoutes);
  }
  private setErrorHandler() {
  
  }
}

export default new App().app;
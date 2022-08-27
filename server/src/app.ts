import express, { Application } from "express";
import morgan from "morgan";

class App {
  app: Application;
  
  constructor() {
    this.app = express();
    this.setMiddleWare();
  }
  setMiddleWare() {
    this.app.use(morgan("dev"));
  }
  setRouter() {
    this.app.use("/", );
  }
  setErrorHandler() {
  
  }
}

export default new App().app;
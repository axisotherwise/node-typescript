import express, { Application } from "express";
import morgan from "morgan";

// const app: Application = express();

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setMiddleWare();
  }
  setMiddleWare() {
    this.app.use(morgan("dev"));
  }
  setRouter() {

  }
  setErrorHandler() {
  
  }
}

export default new App().app;
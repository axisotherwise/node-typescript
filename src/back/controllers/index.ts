import { RequestHandler, Request, Response, NextFunction} from "express";

const indexRouter: RequestHandler = (req, res) => {
  res.render("index");
};

const joinRouter: RequestHandler = (req, res) => {
  res.render("join");
};

const profileRouter: RequestHandler = (req, res) => {
  res.render("profile");
};

const writeRouter: RequestHandler = (req, res) => {
  res.render("write");
};

export {
  indexRouter,
  joinRouter,
  profileRouter,
  writeRouter,
}
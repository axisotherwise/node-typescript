import { RequestHandler } from "express";

const isLoggedIn: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.redirect("/?message=로그인 필요");
}

const isNotLoggedIn: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) return res.redirect("/?message=로그인 상태");
  return next();
}

export {
  isLoggedIn,
  isNotLoggedIn,
}
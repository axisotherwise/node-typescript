import { RequestHandler, Request, Response, NextFunction } from "express";

const indexRouter: RequestHandler = (req, res, next) => {
  res.render("index");
};
// const joinRouter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   res.render("join");
// }

export {
  indexRouter,
  test,
  // joinRouter,
}
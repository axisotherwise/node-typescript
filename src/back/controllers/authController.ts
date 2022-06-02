import { Request, Response, NextFunction } from "express";

const authJoin = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.end();
}
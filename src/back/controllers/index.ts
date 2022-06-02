import { Request, Response, NextFunction} from "express";

const indexRouter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.render("index");
}

const joinRouter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.render("join");
}

export {
  indexRouter,
  joinRouter,
}
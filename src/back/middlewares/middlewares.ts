import { Request, Response, NextFunction} from "express";

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).send("로그인 필요");
  }
}

const isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = "이미 로그인 상태입니다.";
    return res.status(401).redirect(`/?error=${message}`);
  }
}

export {
  isLoggedIn,
  isNotLoggedIn,
};

import {
  RequestHandler,
  Request,
  Response,
  NextFunction
} from "express";

interface Body extends Request {
  email: string;
  age: number;
}

const result = async (req: Request, res: Response, next: NextFunction) => {
  // const { email } = req.body;
  // console.log(email);
}
const result2 = async (req: Request, res: Response, next: NextFunction) => {

  try {

  } catch (err) {

  }
}

export {
  result,
  result2,
}
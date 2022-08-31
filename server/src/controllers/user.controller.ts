import { RequestHandler } from "express";

import { BasicException, Error404 } from "../models/_.loader";

export default class UserController {
  public errorHandler = (err: unknown): Error404 => {
    return new Error404("404 에러 발생");
  }

  public createPost: RequestHandler = async (req, res) => {
    try {
      console.log(req.file);
    } catch (err) {
      const exception = this.errorHandler(err);
      return res.status(exception.statusCode).json({
        isSuccess: false,
        message: "404 에러입니다^^",
      });
    }
  } 
}
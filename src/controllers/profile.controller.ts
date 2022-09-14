import { RequestHandler } from "express";
import { run } from "../multer";

export default class UserController {
  public create: RequestHandler = async (req, res, next) => {
    try {
      const file = req.file as Express.MulterS3.File;

      run();
    } catch (err) {
      console.log(err);
    }
  };

  public delete: RequestHandler = async (req, res, next) => {
    try {
      console.log("딜리트 실행됩니다.");
    } catch (err) {
      console.log(err);
    }
  }
}
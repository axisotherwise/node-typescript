import { RequestHandler } from "express";

export default class UserController {
  public create: RequestHandler = async (req, res, next) => {
    try {
      const file = req.file as Express.MulterS3.File;

      console.log(file);
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
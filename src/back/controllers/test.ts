import { RequestHandler } from "express";

import User from "../models/user";
import Post from "../models/post";

const get: RequestHandler = async (req, res, next) => {
  const user = await User.findOne({
    where: { email: req.user!.email },
    include: [{
      model: Post,
    }],
  });
  return res.json(user);
};

export {
  get,
}
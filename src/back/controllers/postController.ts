import { RequestHandler, ErrorRequestHandler } from "express";

import User from "../models/user";
import Post from "../models/post";

const postWrite: RequestHandler = async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: 1,
    });
    return res.status(200).json(post);
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export {
  postWrite,
}
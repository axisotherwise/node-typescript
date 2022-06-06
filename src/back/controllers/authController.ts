import { RequestHandler, ErrorRequestHandler} from "express";
import passport from "passport";
import bcrypt from "bcrypt";

import User from "../models/user";

const authJoin: RequestHandler = async (req, res, next) => {
  const { email, password, name, married } = req.body;
  try {
    const exist = await User.findOne({ where: { email }});
    if (exist) return res.redirect("/?error=이미 가입된 회원입니다.");
    const hash = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      password: hash,
      name,
      married: married ? true : false,
    });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const authLogin: RequestHandler = async (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      next(authError);
    }
    if (!user) return res.redirect("/?error=유저가 존재하지 않습니다.");
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        next(loginError);
      }
      return res.redirect("/profile");
    });
  });
}

export {
  authJoin,
  authLogin,
}
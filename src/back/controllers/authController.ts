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
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const authLogin: RequestHandler = (req, res, next) => {
  passport.authenticate("local", (authError: Error, user: User, info: { message: string }) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (info) return res.redirect(`${info.message}`);
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect("/profile");
    });
  })(req, res, next);
};

export {
  authJoin,
  authLogin,
}
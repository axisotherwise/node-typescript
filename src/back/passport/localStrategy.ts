import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";

import User from "../models/user";

export default () => {
  passport.use(new Strategy({
    usernameField: "email",
    passwordField: "password",
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email }});
      if (!user) return done(null, false, { message: "가입되지 않은 회원입니다." });
      const compare = await bcrypt.compare(password, user.password);
      if (!compare) return done(null, false, { message: "비밀번호 불일치" });
      done(null, user);
    } catch (err) {
      console.error(err);
      return done(err);
    }
  }));
}





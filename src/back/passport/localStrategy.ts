import * as passport from "passport";
import * as local from "passport-local";
import * as bcrypt from "bcrypt";

import User from "../models/user";

const LocalStrategy = local.Strategy;

export default () => {
  passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email }});
      if (!user) return done(null, false, { message : "존재하지 않는 유저입니다." });
      const result = await bcrypt.compare(password, user.password);
      if (result) return done(null, result);
      return done(null, false, { message: "비밀번호 불일치" });
    } catch (err) {
      console.error(err);
      done(err);
    }
  }));
}





import local from "./localStrategy";
import passport from "passport";
import User from "../models/user";

export default () => {
  passport.serializeUser((user, done) => { // 실제 선언은 클래스 사용은 인스턴스
    done(null, user.email);
  });

  passport.deserializeUser<string>(async (email, done) => {
    try {
      const user = await User.findOne({ where: { email }});
      if (!user) return done("no user");
      return done(null, user);
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
  local();
}
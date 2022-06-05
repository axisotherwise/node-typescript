import * as passport from "passport";
import User from "../models/user";

export default () => {
  passport.serializeUser((user, done) => { // 실제 선언은 클래스 사용은 인스턴스
    done(null, user.id);
  });
  passport.deserializeUser<number>(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id }});
      if (!user) return done("no user");
      done(null, user);
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
  
}
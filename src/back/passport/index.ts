import * as passport from "passport";
import User from "../models/user";

export default () => {
  passport.serializeUser((user: User, done) => { // 실제 선언은 클래스 사용은 인스턴스
    done(null, user.id);
  });
  passport.deserializeUser(async (id: number, done) => {
    User.findOne({ where: { id }})
      .then(res => done(null, res))
      .catch(err => done(err));
  });
}
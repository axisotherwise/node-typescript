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
      
    } catch (err) {
      console.error(err);
      done(err);
    }
  }));
}





const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

// Single argument fetches from Mongo
const User = mongoose.model("users");

// We are not exporting anything from this file - we just need to ensure execution
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      new User({
        googleId: profile.id,
      }).save();
    }
  )
);

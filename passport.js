const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callBack: "auth/google/callback",
    scope: ["profile", "email"],
  }),
  function (accessToken, refreshToken, profile, callBack) {
    callBack(null, profile);
  }
);

//using cookie session (Serialize, Deserialize)
passport.serializeUser((user, done) => {
  done(null.user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

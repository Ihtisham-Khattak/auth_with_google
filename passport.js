const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.ClientID,
      clientSecret: process.env.ClientSecret,
      callBack: "auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callBack) {
      // This function will be called after the user authenticates with Google
      // You can use the profile information to create or update a user in your database
      callBack(null, profile);
    }
  )
);

//using cookie session (Serialize, Deserialize)
passport.serializeUser((user, done) => {
  done(null.user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

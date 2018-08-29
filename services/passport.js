const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done ) => {
  console.log("Access Token", accessToken);
  console.log("refreshToken", refreshToken);
  console.log("Profile", profile);
  console.log("Done", done);
}));
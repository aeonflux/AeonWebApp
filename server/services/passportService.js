// Passport JS Imports
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// Creates a Collection in Mongo
const mongoose = require("mongoose");
// Access to User Model
const User = mongoose.model("user");

// Key Imports
const keys = require("../config/keys");

// Generates identifying piece of user
passport.serializeUser((user, done) => {
  //Reference generated ID by MongoDB
  done(null, user.id);
});

// Convert ID in Cookie to an actual user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  //Client ID and Client Secret -  Requirements to access API
  //CallbackURL - handles token and user profile afer authentication
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // Access Token - Additional requests in behalf of the user
      // Email Contact List Access
      console.log("Access Token", accessToken);
      //Refresh Token - Automatically updates access token
      console.log("Refresh Token", refreshToken);
      //Profile - contains all user identification
      console.log("Profile", profile);

      // Duplicate Record Checking
      User.findOne({ googleID: profile.id }).then(existingUser => {
        // Duplicate Found
        if (existingUser) {
          done(null, existingUser);
        } else {
          // Saving a User Instance to DB
          new User({
            googleID: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

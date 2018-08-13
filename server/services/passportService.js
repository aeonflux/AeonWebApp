// Passport JS Imports
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
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
  // Proxy config will allow localhost:5000 or heroku domain https://arcane-ocean-69503.herokuapp.com/
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // Access Token - Additional requests in behalf of the user
      // Email Contact List Access
      console.log("Access Token", accessToken);
      //Refresh Token - Automatically updates access token
      console.log("Refresh Token", refreshToken);
      //Profile - contains all user identification
      console.log("Profile", profile);

      // Duplicate Record Checking
      const existingUser = await User.findOne({ googleID: profile.id });
      // Duplicate Found
      if (existingUser) {
        done(null, existingUser);
      } else {
        // Saving a User Instance to DB
        console.log("-======");
        console.log(profile.emails[0].value);
        const user = await new User({
          googleID: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value
        }).save();
        done(null, user);
      }
    }
  )
);

passport.use(
  //Client ID and Client Secret -  Requirements to access API
  //CallbackURL - handles token and user profile afer authentication
  // Proxy config will allow localhost:5000 or heroku domain https://arcane-ocean-69503.herokuapp.com/
  new FacebookStrategy(
    {
      clientID: "258101751587733",
      clientSecret: "0100170f54428fc8623bfcd576cec2d7",
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
      // Access Token - Additional requests in behalf of the user
      // Email Contact List Access
      console.log("Access Token", accessToken);
      //Refresh Token - Automatically updates access token
      console.log("Refresh Token", refreshToken);
      //Profile - contains all user identification
      console.log("Profile", profile);

      // Duplicate Record Checking
      // const existingUser = await User.findOne({ googleID: profile.id });
      // Duplicate Found
      const existingUser = null;
      if (existingUser) {
        done(null, existingUser);
      } else {
        // Saving a User Instance to DB
        console.log(profile);
        const user = await new User({
          googleID: profile.id,
          firstName: profile._json.name,
          email: profile._json.email
        }).save();
        done(null, user);
      }
    }
  )
);

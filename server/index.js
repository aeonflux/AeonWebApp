//Web Server Imports
const express = require("express");
// Passport JS Imports
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Key Imports
const keys = require("./config/keys");

//Initialize Application
const app = express();

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
    }
  )
);

// Forward Authentication Request to Google, User Permission Grant
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// Authentication, Profile Request
app.get("/auth/google/callback", passport.authenticate("google"));

// app.get("/", (req, res) => {
//   res.send({ bye: "aeon" });
// });

//Environment variables
//PRODUCTION environment - process.env.PORT - sent by Heroku
//DEVELOPMENT environment - default
const PORT = process.env.PORT || 5000;

app.listen(PORT);

//Web Server Imports
const express = require("express");

// Import Keys
const keys = require("./config/keys");

// Creates Collection in Mongo
const mongoose = require("mongoose");
// Creates a Collection 'User'
require("./models/User");

// Services Declaration
require("./services/passportService");

// Cookie Session
const cookieSession = require("cookie-session");
const passport = require("passport");

// Connect to MongoDB Collections
mongoose.connect(keys.mongoURI);

//Initialize Application
const app = express();

//
app.use(
  cookieSession({
    // 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // encryption
    keys: [keys.cookieKey]
  })
);

// Initialize Passport within app
app.use(passport.initialize());

// Initialize Passport session in app
app.use(passport.session());

//Routes Usage
require("./routes/authRoutes")(app);

// Verifies root route
app.use("/", (req, res) => {
  res.send({ message: "Welcome to Aeon Hub" });
});

//Environment variables
//PRODUCTION environment - process.env.PORT - sent by Heroku
//DEVELOPMENT environment - default
const PORT = process.env.PORT || 5000;

app.listen(PORT);

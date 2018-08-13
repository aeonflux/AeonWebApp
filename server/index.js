//Web Server Imports
const express = require("express");

// Import Keys
const keys = require("./config/keys");

// Creates Collection in Mongo
const mongoose = require("mongoose");

// Body Parser
// Parse incoming request bodies in a middleware before your handlers
const bodyParser = require("body-parser");

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

//Wire up Middlewares
// parses all requests, available in req.body property
app.use(bodyParser.json());

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
// For Authentication
require("./routes/authRoutes")(app);
// For Billing
require("./routes/billingRoutes")(app);

// Verifies root route
app.use("/", (req, res) => {
  res.send({ message: "Welcome to Aeon Hub" });
});

// Fav Icon
app.use("/favicon.ico", express.static("favicon.ico"));

//Environment variables
//PRODUCTION environment - process.env.PORT - sent by Heroku
//DEVELOPMENT environment - default
const PORT = process.env.PORT || 5000;

app.listen(PORT);

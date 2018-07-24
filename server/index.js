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

// Connect to MongoDB Collections
mongoose.connect(keys.mongoURI);

//Initialize Application
const app = express();

//Routes Usage
require("./routes/authRoutes")(app);

//Environment variables
//PRODUCTION environment - process.env.PORT - sent by Heroku
//DEVELOPMENT environment - default
const PORT = process.env.PORT || 5000;

app.listen(PORT);

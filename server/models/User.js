// Creates Collection in Mongo
const mongoose = require("mongoose");

// Unique Set of Properties
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String
});

mongoose.model("user", userSchema);

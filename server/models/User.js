// Creates Collection in Mongo
const mongoose = require("mongoose");

// Unique Set of Properties
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  firstName: String,
  lastName: String,
  email: String,
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model("user", userSchema);

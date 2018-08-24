const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  // Responded corresponds to the response status represented by a Boolean value
  //default - initial value of the email (not responded)
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;

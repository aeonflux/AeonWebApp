// Identifies which credentials to return

if (process.env.NODE_ENV === "production") {
  // Production Level
  module.exports = require("./prod");
} else {
  // Development Level
  module.exports = require("./dev");
}

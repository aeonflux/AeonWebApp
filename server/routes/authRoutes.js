const passport = require("passport");
// Forward Authentication Request to Google, User Permission Grant

// Call Function with Express App Object
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Authentication, Profile Request
  app.get("/auth/google/callback", passport.authenticate("google"));
};

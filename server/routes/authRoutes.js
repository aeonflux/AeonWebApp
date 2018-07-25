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

  // Retrieves Current User
  app.get("/api/current_user", (req, res) => {
    // Authorized User already logged into app
    res.send(req.user);

    // Returns Cookie Session
    // res.send(req.session);
  });

  // Logging Out a User
  app.get("/api/logout", (req, res) => {
    // Removes the current cookie
    req.logout();
    // Must return null response
    res.send(req.user);
  });
};

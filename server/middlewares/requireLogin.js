// Handles route-specific  middlewares

module.exports = (req, res, next) => {
  // next = equivalent to done();
  // Stops the middleware chain once user is not logged in
  if (!req.user) {
    return res.status(401).send({
      error: "You must log in!"
    });
  }

  // proceed to the actual request handler
  next();
};

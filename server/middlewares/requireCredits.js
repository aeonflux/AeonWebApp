// Handles route-specific  middlewares

module.exports = (req, res, next) => {
  // next = equivalent to done();
  // Stops the middleware chain once user has credits at least 1
  if (req.user.credits < 1) {
    //403 Forbidden
    // The server understood the request but refusing to fullfill it
    // state a reason for refusal
    return res.status(403).send({
      error: "You don't have enough credits!"
    });
  }

  // proceed to the actual request handler
  next();
};

//Status Codes References
//400 Bad Request
// The request could not be parsed by the server. Client should modify request

//401 Unauthorized
// The request requires user authentication
// Attached to headers
//cookie webtoken etc.

//402 Payment Required
//Reserved for future use

//403 Forbidden
// The server understood the request but refusing to fullfill it
// state a reason for refusal

//404 Not Found
// Server has not found anything matching the Request URI.

//405 Method Not Allowed
// Method specified in the request is not ALlowed for the resource identified by the Request URI
//Response must include the allow header

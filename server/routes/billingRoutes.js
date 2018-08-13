// Handles all requests related to billing
//Retrieve Stripe key
const keys = require("../config/keys");

// Get Secret key from keys
const stripe = require("stripe")(keys.stripeSecretKey);

// Require login middleware
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // Token handler
  // requireLogin - anytime a user references to this function , perform requireLogin
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // If user is not logged in
    if (!req.user) {
      //   Unauthorized or forbidden
      return res.status(401).send({ error: "You must log in" });
    }
    // Creating a charge object
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 Design Credits",
      // charge authorization id
      source: req.body.id // obtained with Stripe.js
    });

    //  Updates User models user
    req.user.credits += 5;
    //   Save updated User model
    const user = await req.user.save();

    res.send(user);
  });
};

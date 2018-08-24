import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

// Compatibility with react and redux libraries
// connect - Link Components to Action Creation
import { connect } from "react-redux";

//imports all actions
import * as actions from "../actions";

class Payments extends Component {
  //country's respective currency
  // Use US Dollars for this instance
  // amount =  $5 = 500in cents
  // token = given by Stripe, represents the charge , callback function
  //stripeKey = publishable key in declared in the environment variables

  //Additional Content
  //name - name of modal
  //description - specifics of payment

  //Token Handler
  //this.props.handleToken - passes the token to the action creator
  render() {
    // For testing
    // debugger;
    return (
      <StripeCheckout
        name="Aeon"
        description="$5 for design credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn" style={{ backgroundColor: "#4C3DA6" }}>
          {" "}
          Add Credits{" "}
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);

import React, { Component } from "react";
//Hookup from redux store
import { connect } from "react-redux";
//Link Router
import { Link } from "react-router-dom";

//Payment Component
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      // Getting login status
      case null:
        return "awaiting";
      // User not logged in
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      // User is logged in
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits : {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div
          className="nav-wrapper"
          style={{
            backgroundColor: "#C0C2DC",
            padding: "20px"
          }}
        >
          {/* If user is logged in => go to /orders else return to root */}
          <Link to={this.props.auth ? "/orders" : "/"} className="brand-logo">
            <div data-aos="flip-right">
              <img
                style={{
                  border: "20px #4C3DA6 solid",
                  borderRadius: "50px"
                }}
                src="https://image.ibb.co/fSVGF9/EON_1.png"
              />
            </div>
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
//connect helpyer

function mapStatetoProps({ auth }) {
  return { auth };
}
export default connect(mapStatetoProps)(Header);

//event.preventDefault

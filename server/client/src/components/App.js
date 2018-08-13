import React, { Component } from "react";
// React Router Libraries
// BrowserRouter  - Determines the behavior of the React Router
//                - Changes the visible components based on the URL
// Route - Setup rules on a specific route  and components visibility
import { BrowserRouter, Route } from "react-router-dom";

// Compatibility with react and redux libraries
// connect - Link Components to Action Creation
import { connect } from "react-redux";
// Import all actions
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const OrderNew = () => <h2>OrderNew</h2>;

class App extends Component {
  // Component is rendered into the screen
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/orders" component={Dashboard} />
            <Route path="/orders/new" component={OrderNew} />
          </div>
        </BrowserRouter>
      </div>
    ); // <div className="container">
  }
}

// First argument - prop declaration
export default connect(
  null,
  actions
)(App);

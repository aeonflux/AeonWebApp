// CSS Imports
import "materialize-css/dist/css/materialize.min.css";

// React Imports
import React from "react";
import ReactDOM from "react-dom";

// Redux Libraries
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// Action Creators
import reduxThunk from "redux-thunk";

import App from "./components/App";
// Reducers
import reducers from "./reducers";

// Development only axios helpers!
// import axios from "axios";
// window.axios = axios;

// Houses All Redux Setup
// Creates a store
const store = createStore(() => reducers, {}, applyMiddleware(reduxThunk));

// Renders components on screen
ReactDOM.render(
  // Provider Updates All Components with the current state
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

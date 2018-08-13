import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  // Dispatch a function right after response from API
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//Retrieves token sent by Stripe
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  //token is retrieved
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

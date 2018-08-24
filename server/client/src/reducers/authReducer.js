import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

//don't push to an array
// adds a value to the current state

//using [action.payload.data, ...state]
// creates a copy before adding a new value

import { FETCH_USER } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.auth;
    default:
      return state;
  }
};

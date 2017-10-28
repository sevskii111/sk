import { FETCH_EXCHENGE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXCHENGE:
      return action.payload;
    default:
      return state;
  }
};

import { FETCH_ACTIONS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ACTIONS:
      return [...action.payload];
    default:
      return state;
  }
};

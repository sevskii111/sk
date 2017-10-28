import { ERROR, CLOSE_ERROR } from "../actions/types";
const errorsOnScreen = 5;
export default (state = { index: 0, errors: [] }, action) => {
  switch (action.type) {
    case ERROR:
      return {
        index: state.index + 1,
        errors: [
          ...state.errors,
          { message: action.payload, index: state.index }
        ].slice(-errorsOnScreen)
      };
    case CLOSE_ERROR:
      return {
        index: state.index,
        errors: [...state.errors]
          .filter(x => x.index !== action.payload)
          .slice(-errorsOnScreen)
      };
    default:
      return state;
  }
};

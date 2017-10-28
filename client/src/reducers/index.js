import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import actionsReducer from "./actionsReducer";
import errorsReducer from "./errorsReducer";
import teamsReducer from "./teamsReducer";
import projectsReducer from "./projectsReducer";
import exchengeReducer from "./exchengeReducer";

export default combineReducers({
  form: formReducer,
  actions: actionsReducer,
  auth: authReducer,
  errors: errorsReducer,
  teams: teamsReducer,
  projects: projectsReducer,
  exchenge: exchengeReducer
});

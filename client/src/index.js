import "materialize-css/dist/css/materialize.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// Development only axios helpers!
import axios from "axios";
window.axios = axios;

// import { composeWithDevTools } from "redux-devtools-extension";
// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });

// const store = createStore(
//   reducers,
//   {},
//   composeEnhancers(applyMiddleware(reduxThunk))
// );

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

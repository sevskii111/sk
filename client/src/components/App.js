import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import ErrorsContainer from "./ErrorsContainer";
import Teams from "./Teams";
import Actions from "./Actions";
import Exchange from "./Exchenge";

class App extends Component {
  componentDidMount() {
    this.props.checkRights();
    this.props.fetchExchenge();
    setInterval(() => {
      this.props.fetchExchenge();
    }, 1000);
  }

  render() {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <div className="container" style={{ height: "100%" }}>
          <BrowserRouter>
            <div style={{ width: "100%", height: "100%" }}>
              {this.props.auth ? (
                <div>
                  <Route path="/" component={Header} />
                  {this.props.auth ? (
                    <div>
                      <Route exact path="/teams" component={Teams} />
                      <Route exact path="/actions" component={Actions} />
                      <Route exact path="/exchenge" component={Exchange} />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ) : (
                <Exchange />
              )}
              <ErrorsContainer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, teams }) => {
  return { auth, teams };
};

export default connect(mapStateToProps, actions)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import CreateTeamForm from "./CreateTeamForm";

class CreateTeam extends Component {
  handleCreateTeam({ name }) {
    this.props.createTeam(name);
  }
  render() {
    return (
      <div className="card-panel blue-grey" style={{ padding: "0 20px" }}>
        <span className="white-text">
          <div>
            <CreateTeamForm onSubmit={this.handleCreateTeam.bind(this)} />
          </div>
        </span>
      </div>
    );
  }
}

export default connect(null, actions)(CreateTeam);

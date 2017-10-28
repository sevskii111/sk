import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../actions";

import Team from "./Team";
import CreateTeam from "./CreateTeam";
import TeamEdit from "./TeamEdit";

class Teams extends Component {
  componentDidMount() {
    this.props.fetchTeams();
  }
  renderTeams() {
    if (!this.props.teams) return <div />;
    return (
      <div>
        {this.props.teams.map((t, ind) => (
          <div key={ind}>
            <TeamEdit name={t.name} />
            <Team team={t} />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <CreateTeam />
        {this.renderTeams()}
      </div>
    );
  }
}

const mapStateToProps = ({ teams }) => {
  return { teams };
};

export default connect(mapStateToProps, actions)(Teams);

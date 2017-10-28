import React, { Component } from "react";
import { connect } from "react-redux";
import { FaClose, FaEdit } from "react-icons/lib/fa";
import { MdAttachMoney } from "react-icons/lib/md";

import * as actions from "../actions";

class TeamEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, exitClicks: 0, amount: 0, comment: "" };
  }
  deleteTeam() {
    if (this.state.exitClicks === 2) {
      this.props.deleteTeam(this.props.name);
    } else {
      this.setState({
        exitClicks: this.state.exitClicks + 1
      });
    }
  }
  renameTeam(e) {
    e.preventDefault();
    this.props.renameTeam(this.props.name, this.state.name);
  }
  sendMoney(e) {
    e.preventDefault();
    this.props.sendMoneyToTeam(
      this.props.name,
      this.state.amount,
      this.state.comment
    );
    this.setState({ amount: 0, comment: "" });
  }
  render() {
    return (
      <div className="card blue-grey" style={{ margin: 0, color: "white" }}>
        <div
          className="card-action"
          style={{ display: "flex", paddingBottom: 0 }}
        >
          <form
            style={{ display: "flex", flexGrow: "3" }}
            onSubmit={this.renameTeam.bind(this)}
          >
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <button className="btn">
              <FaEdit />
            </button>
          </form>
          <button className="btn red" onClick={this.deleteTeam.bind(this)}>
            <FaClose />
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(TeamEdit);

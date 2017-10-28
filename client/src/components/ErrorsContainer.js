import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import Error from "./Error";

class ErrorsContainer extends Component {
  handleClose(index, closeError) {
    closeError(index);
  }

  renderErrors({ errors }) {
    if (!errors) return;
    return errors.map(x => (
      <Error
        key={x.index}
        message={x.message}
        index={x.index}
        handleClose={this.handleClose}
        closeError={this.props.closeError}
      />
    ));
  }

  render() {
    return (
      <div style={{ position: "fixed", right: "20px", bottom: "0" }}>
        {this.renderErrors(this.props.errors)}
      </div>
    );
  }
}

const mapStateToProps = ({ errors }) => {
  return { errors };
};

export default connect(mapStateToProps, actions)(ErrorsContainer);

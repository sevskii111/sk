import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CreateTeamForm extends Component {
  render() {
    return (
      <div className="row">
        <form onSubmit={this.props.handleSubmit}>
          <div className="input-field s10 col">
            <Field
              component="input"
              name="name"
              placeholder="Назвние команды"
              type="text"
            />
          </div>
          <button className="waves-effect waves-light btn s2 col input-field">
            Создать
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "createTeam" })(CreateTeamForm);

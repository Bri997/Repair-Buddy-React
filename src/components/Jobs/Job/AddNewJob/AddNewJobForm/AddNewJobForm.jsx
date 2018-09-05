import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { addNewJobAction } from "../../../../../actions";

import "./AddNewJobForm.css";

class AddNewJobForm extends Component {
  onSubmit(values) {
    let newJobDetails = {
      jobName: values.jobName,
      vinNumber: values.vinNumber,
      description: values.description
    };
    this.props.dispatch(addNewJobAction(newJobDetails));
  }

  render() {
    return (
      <React.Fragment>
        <div className="NewJobForm">
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <Field
              name="jobName"
              type="text"
              placeholder="Name For Job"
              component="input"
            />
            <Field
              name="vinNumber"
              type="text"
              placeholder="VIN Number"
              component="input"
            />
            <Field
              name="description"
              type="text"
              placeholder="Description"
              component="input"
            />

            <button>Start New Job</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default reduxForm({ form: "NewJob" })(AddNewJobForm);

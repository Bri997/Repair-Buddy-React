import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
// import {newJobActions} from "../../../../../actions"

import "./AddNewImageForm.css";

class AddNewImageForm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="NewImageForm">
          <form>
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

export default reduxForm({ form: "NewImage" })(AddNewImageForm);

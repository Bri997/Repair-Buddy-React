import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
// import {newImageAction} from "../../../../../actions"

import "./AddNewImageForm.css";

class AddNewImageForm extends Component {
  fileSelecthandler = event => {
    console.log(event.target);
  };

  validate = event => {
    console.log(event.target);
  };
  render() {
    return (
      <React.Fragment>
        <div className="AddNewImageForm">
          <form>
            <Field
              name="image"
              type="file"
              onChange={this.fileSelecthandler}
              validate={this.validate}
            />

            <Field
              name="description"
              type="text"
              placeholder="Image Description"
              component="input"
            />
            <button>Add Image and Tags</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default reduxForm({ form: "NewImage" })(AddNewImageForm);

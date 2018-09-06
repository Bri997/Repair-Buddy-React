import React, { Component } from "react";
import { reduxForm, Field, Form } from "redux-form";
import DropZoneField from "./DropZoneField.js";
import isEmpty from "lodash/isEmpty";
// import {newImageAction} from "../../../../../actions"

import "./AddNewImageForm.css";

const imageIsRequired = value => (isEmpty(value) ? "Required" : undefined);

class AddNewImageForm extends Component {
  state = { imageFile: [] };
  handleFormSubmit = formProps => {
    const fd = new FormData();
    fd.append("imageFile", formProps.imageToUpload[0]);
    // append any additional Redux form fields
    // create an AJAX request here with the created formData
  };

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  resetForm = () => {
    this.setState({ imageFile: [] });
    this.props.reset();
  };

  render() {
    return (
      <React.Fragment>
        <div className="AddNewImageForm">
          <Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field
              name="imageToUpload"
              component={DropZoneField}
              type="file"
              imagefile={this.state.imageFile}
              handleOnDrop={this.handleOnDrop}
              validate={[imageIsRequired]}
            />

            <Field
              name="description"
              type="text"
              placeholder="Image Description"
              component="input"
            />
            <button
              type="submit"
              className="uk-button uk-button-primary uk-button-large"
              disabled={this.props.submitting}
            >
              Submit
            </button>
            <button
              type="button"
              className="uk-button uk-button-default uk-button-large"
              disabled={this.props.pristine || this.props.submitting}
              onClick={this.resetForm}
              style={{ float: "right" }}
            >
              Clear
            </button>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default reduxForm({ form: "NewImage" })(AddNewImageForm);

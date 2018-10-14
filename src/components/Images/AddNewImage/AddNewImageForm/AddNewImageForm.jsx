import React, { Component } from "react";
import { reduxForm, Field, Form } from "redux-form";
import DropZoneField from "./DropZoneField.js";
import isEmpty from "lodash/isEmpty";
import { addNewImageAction } from "../../../../actions";
import { connect } from "react-redux";

import "./AddNewImageForm.css";

const imageIsRequired = value => (isEmpty(value) ? "Required" : undefined);

class AddNewImageForm extends Component {
  state = { imageFile: [] };
  handleFormSubmit = async formProps => {
    this.props.dispatch(
      addNewImageAction(
        formProps.imageToUpload[0],
        this.props.selectedJob._id,
        this.props.user.token,
        formProps.description
      )
    );
    let jobId = this.props.selectedJob._id;
    await (function() {
      window.location.href = `/JobDetail/${jobId}`;
    })();
  };

  handleOnDrop = newImageFile => this.setState({ url: newImageFile });

  resetForm = () => {
    this.setState({ url: [] });
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
              imagefile={this.state.url}
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

const mapStateToProps = state => ({
  selectedJob: state.repair.selectedJob,
  user: state.repair.user
});
const connectedForm = connect(mapStateToProps)(AddNewImageForm);
export default reduxForm({ form: "NewImage" })(connectedForm);

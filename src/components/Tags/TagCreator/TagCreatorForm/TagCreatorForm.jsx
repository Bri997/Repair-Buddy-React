import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { createTag } from "../../../../actions";
import { connect } from "react-redux";

class TagCreatorForm extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit(input) {
    this.props.dispatch(createTag(input.tag, this.props.imageId));
  }
  render() {
    return (
      <React.Fragment>
        <div className="TagCreatorForm">
          <form
            onSubmit={this.props.handleSubmit(input => this.onSubmit(input))}
          >
            <Field name="tag" type="text" placeholder="Tag" component="input" />
            <button>Add</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ selectedJob: state.repair.selectedJob });
const connectedForm = connect(mapStateToProps)(TagCreatorForm);
export default reduxForm({ form: "TagCreatorForm" })(connectedForm);

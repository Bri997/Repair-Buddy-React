import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { addNewTagAction } from "../../../../actions";
import { connect } from "react-redux";

class TagCreatorForm extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit(input) {
    let token = this.props.user.token;
    this.props.dispatch(addNewTagAction(input.tag, this.props.imageId, token));
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

const mapStateToProps = state => ({
  selectedJob: state.repair.selectedJob,
  user: state.repair.user
});
const connectedForm = connect(mapStateToProps)(TagCreatorForm);
export default reduxForm({ form: "TagCreatorForm" })(connectedForm);

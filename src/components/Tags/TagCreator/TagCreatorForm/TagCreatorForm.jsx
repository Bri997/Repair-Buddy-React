import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { createTag } from '../../../../actions';

class TagCreatorForm extends Component {
  constructor(props) {
    super(props);

    this.image = this.props.jobs.images.find(
      image => image.id == this.props.match.params.id
    );
  }
  createNewTag(input) {
    
    this.props.dispacth(createTag(input, this.props.imageId));
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
  selectedJob: state.repair.selecteJob
});

const ConnectedTagCreator = connect(mapStateToProps)(TagCreatorForm);

export default reduxForm({ form: "TagCreatorForm" })(ConnectedTagCreator);

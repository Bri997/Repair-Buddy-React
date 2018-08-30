import React from "react";
import { reduxForm, Field } from "redux-form";

class TagCreatorForm extends Component {
  constructor(props) {
    super(props);

    this.image = this.props.jobs.images.find(
      image => image.id == this.props.match.params.id
    );
  }
  createNewTag(input) {
    let newTag = {
      tags: [""]
    };
    this.props.dispacth(tagCreatorAction(newTag));
  }
  render() {
    return (
      <React.Fragment>
        <div className="TagCreatorForm">
          <form
            onSubmit={this.props.handleSubmit(input => this.onSubmit(input))}
          >
            <Field name="Tag" type="text" placeholder="Tag" component="input" />
            <button>Add</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default TagCreatorForm;
reduxForm({ form: "TagCreatorForm" })(TagCreatorForm);

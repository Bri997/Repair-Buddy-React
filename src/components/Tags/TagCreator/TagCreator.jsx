import React, { Component } from "react";
import TagCreatorForm from "../TagCreator/TagCreatorForm/TagCreatorForm";

class TagCreator extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <p onClick={this.props.addTag}>+ Create Tag</p>
        </div>
        <TagCreatorForm />
      </React.Fragment>
    );
  }
}

export default TagCreator;

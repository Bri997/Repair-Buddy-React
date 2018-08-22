import React, { Component } from "react";
import TagCreator from "../TagCreator/TagCreator";

class Tag extends Component {
  state = {
    tag: ["Im a Tag"]
  };
  render() {
    return (
      <React.Fragment>
        <TagCreator addingTag={() => this.props.addTag} />
        <p>{this.state.tag}</p>
      </React.Fragment>
    );
  }
}

export default Tag;

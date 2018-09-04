import React, { Component } from "react";
import TagCreatorForm from "../TagCreator/TagCreatorForm/TagCreatorForm";

class TagCreator extends Component {
  state = {
    show: false
  };

  render() {
    let form = this.state.show ? (
      <TagCreatorForm imageId={this.props.imageId} />
    ) : (
      ""
    );
    return (
      <React.Fragment>
        <div>
          <p onClick={() => this.setState({ show: !this.state.show })}>
            + Create Tag
          </p>
        </div>
        {form}
      </React.Fragment>
    );
  }
}

export default TagCreator;

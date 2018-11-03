import React, { Component } from "react";
import Tag from "../Tags/Tag/Tag";
import "./Tags.css";
import TagCreator from "./TagCreator/TagCreator";
import TagCreatorForm from "./TagCreator/TagCreatorForm/TagCreatorForm";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  render() {
    const tags = this.props.image.tag.map((tag, index) => {
      return (
        <React.Fragment>
          <Tag name={tag} key={index} imageId={this.props.image._id}>
            {" "}
          </Tag>
        </React.Fragment>
      );
    });

    const form = this.state.showForm ? (
      <TagCreatorForm />
    ) : (
      <TagCreator imageId={this.props.image._id} />
    );

    return (
      <React.Fragment>
        <div className="TagCreator">{form}</div>

        {tags}
      </React.Fragment>
    );
  }
}

export default Tags;

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
    if (!this.props.image.tags) {
      return <React.Fragment />;
    }
    console.log(this.props);

    const tags = this.props.image.tags.map((tag, index) => {
      return <Tag name={tag} key={index} />;
    });

    const form = this.state.showForm ? (
      <TagCreatorForm />
    ) : (
      <TagCreator imageId={this.props.image.id} />
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

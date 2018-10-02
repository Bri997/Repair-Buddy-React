import React, { Component } from "react";
import Tags from "../../Tags/Tags";
import "./Image.css";
import RemoveImage from "./RemoveImage";

class Image extends Component {
  state = {};
  render(props) {
    return (
      <React.Fragment>
        <div className="ImageContainer">
          <img
            style={{ width: this.props.width }}
            className="Image"
            src={"http://localhost:3000/newuploads/" + this.props.image.url}
          />
          <h3>{this.props.image.imgDescription}</h3>

          <Tags image={this.props.image} />
          <RemoveImage imageId={this.props.image._id} />
        </div>
      </React.Fragment>
    );
  }
}

export default Image;

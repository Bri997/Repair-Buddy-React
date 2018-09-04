import React, { Component } from "react";
import Tags from "../../Tags/Tags";
import "./Image.css";

// class Image extends Component {
//   render(props) {
//     return (
//       <React.Fragment>
//         <div className="Image">
//           <img style={{ width: props.width }} src={this.props.image.url} />
//           <h3>{this.props.image.imageDescription}</h3>

//           <Tags image={this.props.image} />
//         </div>
//       </React.Fragment>
//     );
//   }
// }

const Image = props => {
  return (
    <React.Fragment>
      <div className="ImageContainer">
        <img
          style={{ width: props.width }}
          className="Image"
          src={props.image.url}
        />
        <h3>{props.image.imageDescription}</h3>

        <Tags image={props.image} />
      </div>
    </React.Fragment>
  );
};

export default Image;

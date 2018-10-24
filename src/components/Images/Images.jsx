import React, { Component } from "react";

import Image from "./Image/Image";

class Images extends Component {
  render() {
    const images = this.props.images.map((image, index) => {
      return (
        <Image
          width={this.props.width}
          margin={this.props.margin}
          key={index}
          image={image}
        />
      );
    });
    return (
      <React.Fragment>
        <div>{images} </div>
      </React.Fragment>
    );
  }
}

export default Images;

// const Images = props => {
//   const images = props.images.map((image, index) => {
//     return <Image width="30%" key={index} image={image} />;
//   });
//   return (
//     <React.Fragment>
//       <div>{images} </div>
//     </React.Fragment>
//   );
// };

// export default Images;

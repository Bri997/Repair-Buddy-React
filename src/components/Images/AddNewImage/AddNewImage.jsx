import React from "react";
import { Link } from "react-router-dom";

const AddNewImage = () => {
  return (
    <React.Fragment>
      <div className="AddNewImage">
        <Link to={"/AddNewImageForm"}>
          <h4>+ Add New Image</h4>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default AddNewImage;

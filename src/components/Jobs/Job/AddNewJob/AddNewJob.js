import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AddNewJob.css";

const AddNewJob = () => {
  return (
    <React.Fragment>
      <div className="AddNewJob">
        <Link to={"/AddNewJobForm"}>
          <h4>+ Add New Job</h4>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default AddNewJob;

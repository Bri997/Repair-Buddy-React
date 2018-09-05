import React, { Component } from "react";
import { Link } from "react-router-dom";

const AddNewJob = () => {
  return (
    <React.Fragment>
      <div>
        <Link to={"/AddNewJobForm"}>+ Add New Job</Link>
      </div>
    </React.Fragment>
  );
};

export default AddNewJob;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Job.css";

// import Image from "../../Images/Image/Image"

import Tags from "../../Tags/Tags";

class Job extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="UserDisplay">
          <div className="JobArea">
            <img width="15%" src={this.props.job.images[0].url} />
            <h3>{this.props.job.jobName}</h3>
            <p>{this.props.job.jobInfo}</p>

            <Link to={`/JobDetail/${this.props.job.id}`}>Continue >></Link>

            <p> {this.props.job.id}</p>
            <Tags className="Tag" image={this.props.job.images[0]} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Job;
// const Job = props => {
//   return (
//     <React.Fragment>
//       <div className="UserDisplay">
//         <div className="JobArea">
//           <img width="15%" src={props.job.images[0].url} />
//           <h3>{props.job.jobName}</h3>
//           <p>{props.job.jobInfo}</p>

//           <Link to={`/JobDetail/${props.job.id}`}>Continue >></Link>

//           <p> {props.job.id}</p>
//           <Tags className="Tag" image={props.job.images[0]} />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Job;

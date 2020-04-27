import React, { Component } from "react";
import "./PatreqStatus.css";

class PatReqStatus extends Component {
  statusreport() {
    if (this.props.ele.status === "request") {
      return (
        <div className="patreqcard">
          <h4>{this.props.ele.doctorid}</h4>
          <h4 className="waiting">Request Pending</h4>
        </div>
      );
    } else if (this.props.ele.status === "accepted") {
      return (
        <div className="patreqcard">
          <h4>{this.props.ele.doctorid}</h4>
          <h3>scheduled date: {this.props.ele.schedule_date}</h3>
          <h4 className="success">Request Accepted</h4>
        </div>
      );
    } else {
      return (
        <div className="patreqcard">
          <h4>{this.props.ele.doctorid}</h4>
          <h4 className="cancl">Appoinment Cancelled</h4>
        </div>
      );
    }
  }

  render() {
    return <div>{this.statusreport()}</div>;
  }
}

export default PatReqStatus;

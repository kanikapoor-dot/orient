import React, { Component } from "react";
import "./sche.css";

class ScheduleList extends Component {
  render() {
    return (
      <div className="sche">
        <h4>Patient Name: {this.props.ele.patient_name}</h4>
        <h3>{this.props.ele.schedule_date}</h3> 
        <h4>Email id: {this.props.ele.patientid}</h4>
       
      </div>
    );
  }
}

export default ScheduleList;

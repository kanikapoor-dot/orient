import React from "react";
import "./DoctorBatchCard.css";

class DocterBatchCard extends React.Component {
  render() {
    return (
      <div className="batchDiv">
        <h3>{this.props.pro.firstname} {this.props.pro.lastname}</h3>
        <h5 className="em">{this.props.pro.email}</h5>
        <hr />
        <p className="spec">Specialist: {this.props.pro.specialist}</p>
        <p className="hosp">Hospital name: {this.props.pro.hospital_name}</p>
        <address className="addre">{this.props.pro.address}</address>
      </div>
    );
  }
}

export default DocterBatchCard;

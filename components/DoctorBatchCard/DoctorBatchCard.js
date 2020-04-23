import React from "react";
import './DoctorBatchCard.css'

class DocterBatchCard extends React.Component {
  render() {
    return (
    <div className="batchDiv">
        <h4>NAME</h4>
        <h5>email</h5>
        <hr /> 
        <h4>Specialist: Dentist</h4>
        <br />
        <h5>Hospital Name</h5>
        <address>123,all good street,success-100</address>
    </div>
    )
  }
}

export default DocterBatchCard;

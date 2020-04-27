import React from "react";
import "./DoctorBatchCard.css";
import {withRouter} from 'react-router-dom'

class DocterBatchCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  processRequest(){
    const patient = JSON.parse(localStorage.getItem("userToken"))
    let d = new Date();
    let date = d.toLocaleTimeString();

    if(patient){
      const body = JSON.stringify({
        patientid: patient.email,
        firstname:patient.firstname,
        lastname: patient.lastname,
        doctorid: this.props.pro.email,
        requesttime: date,
        status: "request"
      })

      fetch("http://localhost:4000/appoint",{
        method: "POST",
        headers:{
          "Content-type":"application/json"
        },
        body
      })
      .then(res => res.json())
      .then(resp => {
          alert("Requested Successfully !")
      })
      .catch(err => {
        alert("Already Request sends!")
      })
    }else{
      alert("Login to Continue")
      this.props.history.push('/login')
    }
  }
  


  render() {
    return (
      <div className="batchDiv">
        <h3>{this.props.pro.firstname} {this.props.pro.lastname}</h3>
        <h5 className="em">{this.props.pro.email}</h5>
        <hr />
        <p className="spec">Specialist: {this.props.pro.specialist}</p>
        <p className="hosp">Hospital name: {this.props.pro.hospital_name}</p>
        <address className="addre">{this.props.pro.address}</address>
        <button className="get-appoin" onClick={this.processRequest.bind(this)}>Get Appoinment</button>
      </div>
    );
  }
}

export default withRouter(DocterBatchCard);

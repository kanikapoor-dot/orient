import React, { Component } from "react";
import PatReqStatus from "../../card/patReqstatusCard/PatReqStatus";
import './patientAppoint.css'

class PatientAppointPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data: JSON.parse(localStorage.getItem("userToken")),
      reqlist: [],
    };
  }

  componentDidMount() {
    this.getUserReqDetail();
  }

  async getUserReqDetail() {
    const temp = [];
    const body = JSON.stringify({
        patientid : this.state.data.email
    })
    await fetch("http://localhost:4000/pat_appoint_req_status", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp) {
          resp.forEach((element) => {
            const newTemp = <PatReqStatus key={element.requesttime} ele={element} />;
            temp.push(newTemp);
          });
        } else {
          return null;
        }

        this.setState({ reqlist: temp });
      });

  }

  render() {
    return (
        <div className="patient-panel">
          <div className="patrequests">
            <h3>Request Information</h3>
            {this.state.reqlist.length > 0 ? (
              this.state.reqlist
            ) : (
              <h2>No Appoinments Requested</h2>
            )}
          </div>
        </div>
    );
  }
}

export default PatientAppointPanel;

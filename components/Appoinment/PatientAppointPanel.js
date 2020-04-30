import React, { Component } from "react";
import PatReqStatus from "../../card/patReqstatusCard/PatReqStatus";
import "./patientAppoint.css";

class PatientAppointPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("userToken")),
      reqlist: [],
      rejectedcount: 0,
    };
  }

  componentDidMount() {
    this.getUserReqDetail();
    this.cheakRejectCount();
  }

  cheakRejectCount() {
    const body = JSON.stringify({
      patientid: this.state.data.email,
    });

    fetch("http://localhost:4000/count_rejected", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
    .then((res) => res.json())
    .then(res => {
      this.setState({rejectedcount: res[0].count})
    })
  }

  async getUserReqDetail() {
    const temp = [];
    const body = JSON.stringify({
      patientid: this.state.data.email,
    });
    await fetch("http://localhost:4000/pat_appoint_req_status", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp) {
          resp.forEach((element) => {
            const newTemp = (
              <PatReqStatus key={element.requesttime} ele={element} />
            );
            temp.push(newTemp);
          });
        } else {
          return null;
        }

        this.setState({ reqlist: temp });
      });
  }

  clearRejected(e) {
    e.preventDefault();

    const body = JSON.stringify({
      patientid: this.state.data.email,
    });

    fetch("http://localhost:4000/clear_rejected", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    }).then(window.location.reload(false));
  }

  clearbutton = (
    <button className="clear-but" onClick={this.clearRejected.bind(this)}>
            clear Rejected
          </button>
  )

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

          {this.state.rejectedcount > 0 ? this.clearbutton : null}
        </div>
      </div>
    );
  }
}

export default PatientAppointPanel;

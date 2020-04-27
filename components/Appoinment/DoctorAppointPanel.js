import React from "react";
import ReqCard from "../../card/ReqCard/ReqCard";
import "./doctorpanel.css";

class DoctorAppointPanel extends React.Component {
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

  getUserReqDetail() {
    const temp = [];
    const body = JSON.stringify({
      doctorid: this.state.data.email,
    });

    fetch("http://localhost:4000/doc_appoint_req", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.length > 0) {
          console.log("tests", resp);
          resp.forEach((element) => {
            const newTemp = <ReqCard key={element.email} ele={element} />;
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
      <div className="doctor-panel">
        <div className="requests">
          <h3>Request</h3>
          {this.state.reqlist ? (
            this.state.reqlist
          ) : (
            <h2>No Request from Patients</h2>
          )}
        </div>
      </div>
    );
  }
}

export default DoctorAppointPanel;

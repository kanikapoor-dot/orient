import React from "react";
import ReqCard from "../../card/ReqCard/ReqCard";
import "./doctorpanel.css";
import ScheduleList from "../../card/scheduleList/ScheduleList";

class DoctorAppointPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("userToken")),
      reqlist: [],
      Schedulelist: [],
    };
  }

  componentDidMount() {
    this.getUserReqDetail();
    this.getScheduleDetail();
  }

  async getUserReqDetail() {
    const temp = [];
    const body = JSON.stringify({
      doctorid: this.state.data.email,
    });

    await fetch("http://localhost:4000/doc_appoint_req", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp) {
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

  async getScheduleDetail() {
    const temp = [];
    const body = JSON.stringify({
      doctorid: this.state.data.email,
    });

    await fetch("http://localhost:4000/doc_schedule_list", {
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
            const newTemp = <ScheduleList key={element.email} ele={element} />;
            temp.push(newTemp);
          });
        } else {
          return null;
        }

        this.setState({ Schedulelist: temp });
      });
  }

  render() {
    return (
      <div className="doctor-panel">
        <div className="requests">
          <h3>Requests</h3>
          <hr />
          {this.state.reqlist.length > 0 ? (
            this.state.reqlist
          ) : (
            <h2>No Request from Patients</h2>
          )}
        </div>
        <div className="accepted">
          <h3>Scheduled</h3>
          <hr />
          {this.state.Schedulelist.length > 0 ? (
            this.state.Schedulelist
          ) : (
            <h2>No Any Schedules</h2>
          )}
        </div>
      </div>
    );
  }
}

export default DoctorAppointPanel;

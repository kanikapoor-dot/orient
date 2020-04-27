import React from "react";
import "./reqCard.css";

class ReqCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule_date: "",
      schedule_time: "",
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  acceptAppoin(e) {
    e.preventDefault();
    var n = new Date();
    const body = JSON.stringify({
      schedule_date: this.state.schedule_date,
      schedule_time: this.state.schedule_time,      
      dateofres: n.toDateString(),
      responsetime: n.toLocaleTimeString(),
      patientid: this.props.ele.patientid,
      doctorid: this.props.ele.doctorid,
      requesttime: this.props.ele.requesttime,
      dateofreq: this.props.ele.dateofreq,
    });

    fetch("http://localhost:4000/accept_appoin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => {
        console.log(res);
        alert("Scheduled Appoinment");
      })
      .catch((err) => console.log(err));
  }

  rejectAppoin(e) {
    
    e.preventDefault();
    var n = new Date();
    const body = JSON.stringify({    
      dateofres: n.toDateString(),
      responsetime: n.toLocaleTimeString(),
      patientid: this.props.ele.patientid,
      doctorid: this.props.ele.doctorid,
      requesttime: this.props.ele.requesttime,
      dateofreq: this.props.ele.dateofreq,
    });

    fetch("http://localhost:4000/reject_appoin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => {
        console.log(res);
        alert("Appoinment Rejected");
      })
      .catch((err) => console.log(err));

  }

  render() {
    return (
      <div className="reqcard">
        <h4>{this.props.ele.patient_name}</h4>
        <div className="schedule">
        <input
            type="date"
            id="schedule_date"
            name="schedule_date"
            onChange={this.onChange.bind(this)}
          />
        <input
            type="time"
            id="schedule_time"
            name="schedule_time"
            onChange={this.onChange.bind(this)}
          />

        </div>

        <div className="reqbutts">
          
          <button className="accept" onClick={this.acceptAppoin.bind(this)}>
            Schedule
          </button>
          <button className="reject" onClick={this.rejectAppoin.bind(this)}>
            Reject
          </button>
        </div>
      </div>
    );
  }
}

export default ReqCard;

import React from "react";
import "./profile.css";
import PatientProfileUpdate from "../PatientProfileUpdate/PatientProfileUpdate";
import DoctorProfileUpdate from "../DoctorProfileUpdate/DoctorProfileUpdate";
import FindDoctor from "../FindDoctor/FindDoctor";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClickComp: null,
      userData: JSON.parse(localStorage.getItem("userToken")),
      usertype: localStorage.getItem("usertype")
    };
  }
  profileupdate = (e) => {
    e.preventDefault();
    const {userData} = this.state
    if (this.state.usertype == "patient") {
      this.setState({ showClickComp: <PatientProfileUpdate userval={userData}/> });
    } else {
      this.setState({ showClickComp: <DoctorProfileUpdate userval={userData}/> });
    }
  };

  trackrecord = (e) => {
    e.preventDefault();
  };

  findDoctors = (e) => {
    e.preventDefault();
    this.setState({ showClickComp: <FindDoctor /> });
  };

  Oppinments = (e) => {
    e.preventDefault();
  };

  render() {
    const patientprofile = (
      <ul>
        <li>
          <button onClick={this.profileupdate.bind(this)}>
            Profile Update
          </button>
        </li>
        <li>
          <button onClick={this.findDoctors.bind(this)}>Find Doctors</button>
        </li>
        <li>
          <button onClick={this.trackrecord.bind(this)}>
            Track Your Records
          </button>
        </li>
        <li>
          <button onClick={this.Oppinments.bind(this)}>Oppoinments</button>
        </li>
      </ul>
    );
    const docterprofile = (
      <ul>
        <li>
          <button onClick={this.profileupdate.bind(this)}>
            Profile Update
          </button>
        </li>
        <li>
          <button onClick={this.trackrecord.bind(this)}>
            Patient Records
          </button>
        </li>
        <li>
          <button onClick={this.Oppinments.bind(this)}>Oppoinments</button>
        </li>
      </ul>
    );

    return (
      <div className="profile-container">
        <header className="profile-header">
          <nav className="profile-navbar">{this.state.usertype == "patient" ? patientprofile : docterprofile}</nav>
        </header>
        <main className="showClickComp">{this.state.showClickComp}</main>
      </div>
    );
  }
}

export default Profile;

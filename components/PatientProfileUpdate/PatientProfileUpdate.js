import React from "react";
import "./PatientProfileUpdate.css";

export default class PatientProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.userval.username,
      firstname: this.props.userval.firstname,
      lastname: this.props.userval.lastname,
      lookingfor: this.props.userval.lookfor,
      email: this.props.userval.email,
      usertype: localStorage.getItem("usertype")
    }
    this.submitPatientUpdate = this.submitPatientUpdate.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitPatientUpdate = (e) => {

    e.preventDefault();
    
    const body = JSON.stringify({
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      usertype: this.state.usertype,
      email: this.state.email,
      lookingfor: this.state.lookingfor,
    });

    fetch("http://localhost:4000/update_profile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((reponse) => reponse.json)
      .then((res) => {
        console.log(res)
        alert("Update Successfull! LogOut and Login again to see effect")
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="p-contain">
        <div className="p-form">
          <h1>Profile Update</h1>
          <form className="p-form-horiz">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              id="firstname"
              onChange={this.onChange}
              value={this.state.firstname}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              id="lastname"
              onChange={this.onChange}
              value={this.state.lastname}
            />
            <input
              type="text"
              name="username"
              id="username"
              onChange={this.onChange}
              value={this.state.username}
            />
            <input
              type="text"
              name="email"
              value={this.state.email}
              id="email"
              disabled
            />
            <input
              type="text"
              placeholder="Need Specialist For"
              name="lookingfor"
              id="looking for"
              onChange={this.onChange}
              value={this.state.lookingfor}
            />
            <input 
            type="submit" 
            value="Update Profile" 
            name="updateProfile" 
            id="updateProfile"
            onClick={this.submitPatientUpdate}
            />
          </form>
        </div>
      </div>
    );
  }
}

import React from "react";
import "./DoctorProfileUpd.css";

export default class DoctorProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.userval.username,
      firstname: this.props.userval.firstname,
      lastname: this.props.userval.lastname,
      imr: this.props.userval.imr,
      hospitalname: this.props.userval.hospital_name,
      address: this.props.userval.address,
      specialist: this.props.userval.specialist,
      openat: this.props.userval.openat,
      closeat: this.props.userval.closeat,
      email: this.props.userval.email,
      usertype: localStorage.getItem("usertype")
    };

    this.submitDocterUpdate = this.submitDocterUpdate.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitDocterUpdate = (e) => {

    e.preventDefault();
    
    const body = JSON.stringify({
      username: this.state.firstname,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      imr: this.state.imr,
      hospitalname: this.state.hospitalname,
      address: this.state.address,
      specialist: this.state.specialist,
      openat: this.state.openat,
      closeat: this.state.closeat,
      usertype: this.state.usertype,
      email: this.state.email,
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
      <div className="d-contain">
        <div className="D-form">
          <h1>Profile Update</h1>
          <form className="form-horiz">
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
              onChange={this.onChange}
              value={this.state.username}
              id="username"
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
              name="imr"
              placeholder="Indian Medical Registration No"
              onChange={this.onChange}
              value={this.state.imr}
            />
            <input
              type="text"
              name="hospitalname"
              placeholder="Hospital Name"
              onChange={this.onChange}
              value={this.state.hospitalname}
            />
            <textarea
              placeholder="Enter Your Hospital Address"
              name="address"
              id="address"
              onChange={this.onChange}
              value={this.state.address}
            />
            <br />
            <label>Working Hours :</label>
            <div className="workhour">
              <label>From:</label>
              <input
                type="time"
                name="openat"
                onChange={this.onChange}
                value={this.state.openat}
              />
              <label>To:</label>
              <input
                type="time"
                name="closeat"
                onChange={this.onChange}
                value={this.state.closeat}
              />      
            </div>
            <input
              type="text"
              placeholder="Specialist"
              name="specialist"
              id="specialist"
              onChange={this.onChange}
              value={this.state.specialist}
            />
            <input
              type="submit"
              title="Update Profile"
              name="updateProfile"
              id="updateProfile"
              onClick={this.submitDocterUpdate}
            />
          </form>
        </div>
      </div>
    );
  }
}

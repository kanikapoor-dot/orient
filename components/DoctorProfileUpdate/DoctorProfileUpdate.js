import React from "react";
import "./DoctorProfileUpd.css";

export default class DoctorProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "user name",
      email: "username@mail.com",
    };
  }

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
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              id="lastname"
            />
            <input
              type="text"
              name="username"
              value={this.state.username}
              id="username"
              disabled
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
            />
            <input
              type="text"
              name="hospitalname"
              placeholder="Hospital Name"
            />
            <textarea placeholder="Enter Your Hospital Address" />
            <br />
            <label>Working Hours :</label>
            <div className="workhour">
              <label>From:</label>
              <input type="time" name="opensat" />
              <label>To:</label>
              <input type="time" name="closeat" />
            </div>
            <input
              type="text"
              placeholder="Specialist"
              name="specialist"
              id="specialist"
            />
            <input 
            type="submit" 
            value="Update Profile" 
            name="updateProfile" 
            id="updateProfile"
            />
          </form>
        </div>
      </div>
    );
  }
}

import React from "react";
import "./PatientProfileUpdate.css";

export default class PatientProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "user name",
      email: "username@mail.com",
    };
  }

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
              placeholder="Looking for"
              name="looking for"
              id="looking for"
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

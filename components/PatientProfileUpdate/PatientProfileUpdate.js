import React from "react";
import "./PatientProfileUpdate.css";

export default class PatientProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem("userToken"))
    this.state = {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      lookingfor: data.lookfor,
      email: data.email,
      usertype: localStorage.getItem("usertype"),
      storeData: {},
    };

    console.log(data)
    this.submitPatientUpdate = this.submitPatientUpdate.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const body = JSON.stringify({
      email: this.state.email,
      usertype: this.state.usertype,
    });

    fetch("http://localhost:4000/profile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((respon) => respon.json())
      .then((resp) => {
        localStorage.setItem("userToken",JSON.stringify(resp[0]))
        this.setState({ storeData: resp[0] });
      })
      .catch((err) => console.log(err));
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
        alert("Update Successfull");
        this.props.history.push('/')
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
              placeholder={
                this.state.storeData.firstname
                  ? this.state.storeData.firstname
                  : "First Name"
              }
              id="firstname"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder={
                this.state.storeData.lastname
                  ? this.state.storeData.lastname
                  : "Last Name"
              }
              id="lastname"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="username"
              placeholder={
                this.state.storeData.username
                  ? this.state.storeData.username
                  : "User Name"
              }
              id="username"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="email"
              placeholder={this.state.email}
              id="email"
              disabled
            />
            <input
              type="text"
              placeholder={
                this.state.storeData.lookfor
                  ? this.state.storeData.lookfor
                  : "Need Specialist For"
              }
              name="lookingfor"
              id="looking for"
              onChange={this.onChange}
            />
            <input
              type="submit"
              title="Update Profile"
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

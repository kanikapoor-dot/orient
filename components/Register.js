import React from "react";
import "../css/Register.css";
import { Redirect } from 'react-router-dom'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      repassword: "",
      usertype: "",
      isLoggedIn: false,
    };
  }

  SubmitRegister() {
    const body = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      usertype: this.state.usertype,
    });

    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((respo) => respo.json())
      .then((res) => {
        if (res.name == "OrientDB.RequestError") {
          alert("Email already exit!");
        } else {
          this.setState({ isLoggedIn: !this.state.isLoggedIn });
          alert("Registered successfully");
        }
      })
      .catch((error) => {
        console.log("error in test", error);
      });
  }

  CheckUserPassword = (e) => {
    e.preventDefault();
    const { password, repassword } = this.state;
    if (password === repassword) {
      this.SubmitRegister();
    } else {
      alert("Password MisMatch!");
    }
  };

  checkLogedIn() {
    if(this.state.isLoggedIn){
     return <Redirect to="/login" />
    }else {
      return null
    }
  }

  render() {
    return (
      <div className="contain">
        <div className="register-contain">
          <div className="emty">
            <h1>SIGN UP</h1>
          </div>
          <form>
            <input
              type="text"
              placeholder="User Name"
              id="username"
              email="username"
              name="username"
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="abc@gmail.com"
              id="email"
              name="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              required
            />

            <div className="radios">
              <div className="rad">
                <label>
                  <input
                    type="radio"
                    id="Patient"
                    name="usertype"
                    value="patient"
                    onClick={(e) => {
                      this.setState({ usertype: e.target.value });
                    }}
                  />
                  Patient
                </label>
              </div>
              <div className="rad">
                <label>
                  <input
                    type="radio"
                    id="Docter"
                    name="usertype"
                    value="docter"
                    onClick={(e) => {
                      this.setState({ usertype: e.target.value });
                    }}
                  />
                  Docter
                </label>
              </div>
            </div>

            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              required
            />
            <input
              type="password"
              placeholder="Confirm-password"
              name="repassword"
              id="repassword"
              onChange={(e) => {
                this.setState({ repassword: e.target.value });
              }}
              required
            />
            <input
              type="submit"
              value="submit"
              onClick={this.CheckUserPassword}
            />
          </form>
        </div>
       {this.checkLogedIn()}
      </div>
    );
  }
}

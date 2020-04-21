import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      usertype:"",
    };
  }

  SubmitLogin = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
      usertype: this.state.usertype,
    });

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((responser) => responser.json())
      .then((res) => {
        if (res.length === 0) {
          console.log(res)
          alert("Username Password Failed!");
        } else {
          console.log(res);
          alert("Login Succesfully");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="logincontain">
        <div className="login-contain">
          <div className="emty">
            <h1 style={{color:"grey"}}>SIGN IN</h1>
          </div>
          <form className="login-form">
            <input
              type="text"
              placeholder="abc@gmail.com"
              id="email"
              name="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              required
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              required
            />

            <div className="radiobutton">
              <div className="rad-patient">
                <input
                  type="radio"
                  name="usertype"
                  id="patient"
                  value="patient"
                  onClick={(e) => {
                    this.setState({usertype: e.target.value});
                  }}
                />
                <label>Patient</label>
              </div>
              <div className="rad-doctor">
                <input
                  type="radio"
                  name="usertype"
                  id="doctor"
                  value="doctor"
                  onClick={(e) => {
                    this.setState({usertype: e.target.value});
                  }}
                />
                <label>Doctor</label>
              </div>
            </div>

            <input type="submit" value="submit" onClick={this.SubmitLogin} />

            <p>
              Don't have an account{" "}
              <Link to="/register" style={{ color: "violet" }}>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

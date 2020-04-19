import React from "react";
import "../css/Login.css";
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  SubmitLogin = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      email:this.state.email,
      password:this.state.password
    })

    fetch("",{
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body
    })
    .then(responser => responser.json())
    .then(res => {
      if (res.err) {
        alert("username password fail");
      } else {
        console.log(res)
        alert("login succesfully");
      }
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="logincontain">
        <div className="login-contain">
          <div className="emty">
            <h1>SIGN IN</h1>
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
            <input type="submit" value="submit" onClick={this.SubmitLogin}/>

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

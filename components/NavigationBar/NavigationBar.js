import React from "react";
import "./NavigationBar.css";
import { Link, withRouter} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }



  logout(e) {
    e.preventDefault()
    localStorage.removeItem("userToken");
    localStorage.removeItem("usertype");
    this.props.history.push(`/`)
  }

  render() {
    const guestlinks = (
      <ul>
        <li>
          <Link className="link-style" to="/">
            Health Facts
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/">
            Find Doctors
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/register">
            Register
          </Link>
        </li>
      </ul>
    );

    const userlinks = (
      <ul>
        <li>
          <Link className="link-style" to="/">
            Health Facts
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/" onClick={this.logout.bind(this)}>
            Logout
          </Link>
        </li>
      </ul>
    );

    return (
      <div className="home-contain">
        <header className="myHeader">
          <nav className="navbar">
            {localStorage.userToken ? userlinks : guestlinks}</nav>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
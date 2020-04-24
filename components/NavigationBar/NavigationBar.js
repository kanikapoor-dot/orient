import React from "react";
import "./NavigationBar.css";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push(`/`);
  }

  render() {
    const guestlinks = (
      <header className="myHeader">
        <nav className="navbar">
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
        </nav>
      </header>
    );

    const docterlinks = (
      <header className="myHeader">
        <nav className="navbar">
          <ul>
            <li>
              <Link className="link-style" to="/">
                Health Facts
              </Link>
            </li>
            <li>
              <Link to="/docter_profile_update" className="link-style">Profile Update</Link>
            </li>
            <li>
              <Link to="/patient_records" className="link-style">Patient Records</Link>
            </li>
            <li>
              <Link to="/oppoinments" className="link-style">Oppoinments</Link>
            </li>
            <li>
              <Link className="link-style" to="#" onClick={this.logout.bind(this)}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );

    const patientlinks = (
      <header className="myHeader">
        <nav className="navbar">
          <ul>
            <li>
              <Link className="link-style" to="/">
                Health Facts
              </Link>
            </li>
            <li>
              <Link to="/patient_profile_update" className="link-style">Profile Update</Link>
            </li>
            <li>
              <Link to="/track_records" className="link-style">Track Records</Link>
            </li>
            <li>
              <Link to="/oppoinments" className="link-style">Oppoinments</Link>
            </li>
            <li>
              <Link className="link-style" to="#" onClick={this.logout.bind(this)}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );

    return (
      <div className="home-contain">
        {localStorage.userToken
          ? localStorage.usertype === "doctor"
            ? docterlinks
            : patientlinks
          : guestlinks}
      </div>
    );
  }
}

export default withRouter(Header);

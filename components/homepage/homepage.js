import React from "react";
import "./homepage.css";
import {
  FaUserCircle,
  FaBookMedical,
  FaFileContract,
} from "react-icons/fa";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-container">
        <div className="navBar">
          <div className="navSection">
            <ul>
              <li>
                <div className="navItem">
                  <FaUserCircle />
                  <p>Profile</p>
                </div>
              </li>
              <li>
                <div className="navItem">
                  <FaBookMedical />
                  <p>Docters</p>
                </div>
              </li>
              <li>
                <div className="navItem">
                  <FaFileContract />
                  <p>Track</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bodySection">
          <h1>Homepage</h1>
        </div>
      </div>
    );
  }
}

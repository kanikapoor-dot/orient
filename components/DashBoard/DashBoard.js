import React from "react";
import "./DashBoard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DoctorProfileUpdate from "../DoctorProfileUpdate/DoctorProfileUpdate";
import PatientProfileUpdate from "../PatientProfileUpdate/PatientProfileUpdate";

import { FaUserCircle, FaBookMedical, FaFileContract } from "react-icons/fa";

export default class DashBoard extends React.Component {
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
        </div>
      </div>
    );
  }
}

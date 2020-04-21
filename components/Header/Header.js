import React from "react";
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className="home-contain">
        <header className="myHeader">
          <nav className="navbar">
            <ul>
              <li>
                <h4>Health Facts</h4>
              </li>
              <li>
                <h4>Dash Board</h4>
              </li>
              <li>
                <h4>Login</h4>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

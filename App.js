import React from "react";
import "./App.css";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DoctorProfileUpdate from "./components/DoctorProfileUpdate/DoctorProfileUpdate";
import PatientProfileUpdate from "./components/PatientProfileUpdate/PatientProfileUpdate"
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/doctor-profile" exact component={DoctorProfileUpdate} />
          <Route path="/patient-profile" exact component={PatientProfileUpdate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/profile/profile";
import FindDocter from './components/FindDoctor/FindDoctor'
import PatientProfileUpdate from "./components/PatientProfileUpdate/PatientProfileUpdate";
import DoctorProfileUpdate from "./components/DoctorProfileUpdate/DoctorProfileUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />        
        <Switch>
          <Route path="/docter_profile_update" exact component={DoctorProfileUpdate} />
          <Route path="/patient_profile_update" exact component={PatientProfileUpdate} />
          <Route path="/docter-list" exact component={FindDocter} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

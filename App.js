import React from "react";
import "./App.css";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import DoctorProfileUpdate from './components/DoctorProfileUpdate/DoctorProfileUpdate'
import PatientProfileUpdate from './components/PatientProfileUpdate/PatientProfileUpdate'
import HealthFeeds from "./components/healthfeeds/HealthFeeds";
import FindDocter from "./components/FindDoctor/FindDoctor";
import DoctorAppointPanel from "./components/Appoinment/DoctorAppointPanel";
import PatientAppointPanel from "./components/Appoinment/PatientAppointPanel";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />        
        <Route path="/" exact component={HealthFeeds} />
        <Switch>
          <Route path="/find_doctor" exact component={FindDocter} />
          <Route path="/docter_profile_update" exact component={DoctorProfileUpdate} />
          <Route path="/patient_profile_update" exact component={PatientProfileUpdate} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/doc_appoint_list" exact component={DoctorAppointPanel} />
          <Route path="/pat_appoint_status" exact component={PatientAppointPanel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

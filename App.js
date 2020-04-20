import React from "react";
import "./App.css";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DocterProfileUpdate from "./components/DocterProfileUpdate/DocterProfileUpdate";
import PatientProfileUpdate from "./components/PatientProfileUpdate/PatientProfileUpdate"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/docter-profile" exact component={DocterProfileUpdate} />
          <Route path="/patient-profile" exact component={PatientProfileUpdate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

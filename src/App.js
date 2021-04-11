import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Appointment from "./Component/AppointmentComponents/Appointment/Appointment";
import Home from "./Component/Home/Home/Home";
import NotFound from "./Component/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/appointment">
            <Appointment />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;

import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import AddDoctor from "./Component/AddDoctor/AddDoctor";
import AllPatients from "./Component/AllPatientsComponents/AllPatients/AllPatients";
import Appointment from "./Component/AppointmentComponents/Appointment/Appointment";
import DashBoard from "./Component/DashBoardComponents/DashBoard/DashBoard";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/LoginComponents/Login/Login";
import NotFound from "./Component/NotFound/NotFound";

export const UserContext = createContext ();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
        <Router>
      <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/appointment">
            <Appointment />
        </Route>
        <Route path="/dashboard/appointment">
            <DashBoard />
        </Route>
        <Route path="/dashboard/allPatients">
          <AllPatients />
        </Route>
        <Route path="/dashboard/addDoctor">
          <AddDoctor />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;

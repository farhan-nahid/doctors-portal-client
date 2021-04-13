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
import PrivateRoute from "./Component/LoginComponents/PrivateRoute/PrivateRoute";
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
        <PrivateRoute exact path="/dashboard">
            <DashBoard />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/appointment">
            <DashBoard />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/allPatients">
          <AllPatients />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/addDoctor">
          <AddDoctor />
        </PrivateRoute>
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

import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
//import Users from "./data/Users";
import Prueba from "./components/Prueba";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewUserP from "./user/pages/NewUserP";
import Users from "./user/pages/Users";

import "./App.css";

function App() {
  const apiUserUrl =
    "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //console.log("Se ejecuta el useEfect");
    fetch(apiUserUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UserList items={users} />
        </Route>
        <Route path="/users" exact>
          <Users></Users>
        </Route>
        <Route path="/users/newuser" exact>
          <NewUserP></NewUserP>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

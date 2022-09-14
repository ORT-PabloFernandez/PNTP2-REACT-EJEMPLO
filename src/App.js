import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
//import Users from "./data/Users";

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

  return <UserList items={users} />;
}

export default App;

import React, { useState, useEffect } from "react";

const url = "http://127.0.0.1:3001/users/";
const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("Token"),
        },
      });

      response.json().then((data) => {
        setUsers(data);
      });
    }

    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>

      {console.log(users)}
    </div>
  );
};

export default Users;
